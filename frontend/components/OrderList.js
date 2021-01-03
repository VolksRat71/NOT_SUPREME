import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import OrderItemStyles from './styles/OrderItemStyles';
import Error from './ErrorMessage';

const USER_ORDERS_QUERY = gql`
    query USER_ORDERS_QUERY {
        orders(orderBy: createdAt_DESC) {
            id
            total
            createdAt
            items {
                id
                title
                price
                description
                quantity
                image
            }
        }
    }
`

const OrderUl = styled.ul`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`

const addingTool = (order) => {
    return order.items.reduce((tally, item) => tally + item.quantity, 0)
}

class OrderList extends Component {
    render() {
        return (
            <Query query={USER_ORDERS_QUERY}>
                {({ data: { orders }, loading, error }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <Error error={error} />

                    return (
                        <div>
                            <h2>You have {orders.length} orders</h2>
                            <OrderUl>
                                {orders.map(order => (
                                    <Link href={{
                                        pathname: '/order',
                                        query: { id: order.id }
                                    }}>
                                        <a>
                                            <OrderItemStyles key={order.id}>
                                                <div className="order-meta">
                                                    <p>{addingTool(order)} Item{addingTool(order) === 1 ? '' : 's'}</p>
                                                    <p>{order.items.length} Product{order.items.length === 1 ? '' : 's'}</p>
                                                    <p>{formatMoney(order.total)}</p>
                                                    <p>{formatDistance(order.createdAt, new Date())}</p>
                                                </div>
                                                <div className="images">
                                                    {order.items.map(item => (
                                                        <img key={item.id} src={item.image} alt={item.title} />
                                                    ))}
                                                </div>
                                            </OrderItemStyles>
                                        </a>
                                    </Link>
                                ))}
                            </OrderUl>
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default OrderList;
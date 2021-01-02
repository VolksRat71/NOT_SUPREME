import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';

const CREATE_ORDER_MUTATION = gql`
    mutation CREATE_ORDER_MUTATION($token: String!){
        createOrder(token: $token) {
            id
            charge
            total
            items {
                id
                title
            }
        }
    }
`

function totalItems(cart) {
    return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)
}

class TakeMyMoney extends Component {
    onToken = async (res, createOrder) => {
        console.log('On Token Called')
        console.log(res.id)
        // Manually call the mutation once we have the strip token
        const order = await createOrder({
            variables: {
                token: res.id
            }
        }).catch(err => {
            alert(err.message)
        })
        console.log(order)
    }

    render() {
        return (
            <>
                <User>
                    {({ data: { me } }) => (
                        <Mutation
                            mutation={CREATE_ORDER_MUTATION}
                            refetchQueries={
                                [{ query: CURRENT_USER_QUERY }]
                            }
                        >{createOrder => (
                            <StripeCheckout
                                amount={calcTotalPrice(me.cart)}
                                name="NOT SUPREME"
                                description={`Order of ${totalItems(me.cart)} item${totalItems(me.cart) === 1 ? '' : 's'}`}
                                image={me.cart.length && me.cart[0].item && me.cart[0].item.image}
                                stripeKey="pk_test_51I4xX7GXKle0o1lB9heJfv9N1qu0xRRtvLwtKPJCzCSRM3pbRtZ4hjKMYWv1qEHNEn5C4vCUixSpG0hiw4XoXAXx00AD2ilOE8"
                                currency="USD"
                                email={me.email}
                                token={res => this.onToken(res, createOrder)}
                            >{this.props.children}</StripeCheckout>
                        )}</Mutation>
                    )}
                </User>
            </>
        )
    }
}

export default TakeMyMoney;
import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import SickButton from './styles/SickButton';
import User from './User';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';
import takeMyMoney from './TakeMyMoney';
import TakeMyMoney from './TakeMyMoney';

const LOCAL_STATE_QUERY = gql`
    query {
        cartOpen @client
    }
`;

const TOGGLE_CART_MUTATION = gql`
    mutation {
        toggleCart @client
    }
`;

const Composed = adopt({
    user: ({ render }) => <User>{render}</User>,
    toggleCart: ({ render }) => <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>,
    localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>
});

const Cart = () => (
    <Composed>
        {({ user, toggleCart, localState }) => {
            const me = user.data.me;
            if (!me) return null;
            const firstName = me.name.split(" ")[0]
            return (
                <CartStyles open={localState.data.cartOpen}>
                    <header>
                        <CloseButton onClick={toggleCart} title="close">&times;</CloseButton>
                        <Supreme>{firstName.toUpperCase()}'S CART</Supreme>
                        <p>You have {me.cart.length} item{me.cart.length === 1 ? '' : 's'} in your cart.</p>
                    </header>
                    <ul>
                        {me.cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
                    </ul>
                    <footer>
                        {me.cart.length &&
                            <>
                                <p>{formatMoney(calcTotalPrice(me.cart))}</p>
                                <TakeMyMoney>
                                    <SickButton>Checkout</SickButton>
                                </TakeMyMoney>
                            </>
                        }
                    </footer>
                </CartStyles>
            )
        }}
    </Composed>
)

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
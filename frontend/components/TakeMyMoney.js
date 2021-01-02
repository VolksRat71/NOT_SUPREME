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

function totalItems(cart) {
    return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)
}

class TakeMyMoney extends Component {
    onToken = res => {
        console.log('On Token Called')
        console.log(res.id)
    }

    render() {
        return (
            <>
                <User>
                    {({ data: { me } }) => (
                        <StripeCheckout
                            amount={calcTotalPrice(me.cart)}
                            name="NOT SUPREME"
                            description={`Order of ${totalItems(me.cart)} item${totalItems(me.cart) === 1 ? '' : 's'}`}
                            image={me.cart[0].item && me.cart[0].item.image}
                            stripeKey="pk_test_51I4xX7GXKle0o1lB9heJfv9N1qu0xRRtvLwtKPJCzCSRM3pbRtZ4hjKMYWv1qEHNEn5C4vCUixSpG0hiw4XoXAXx00AD2ilOE8"
                            currency="USD"
                            email={me.email}
                            token={res => this.onToken(res)}
                        >{this.props.children}</StripeCheckout>
                    )}
                </User>
            </>
        )
    }
}

export default TakeMyMoney;
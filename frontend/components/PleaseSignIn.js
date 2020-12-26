import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import SignIn from './SignIn';

const PleaseSignIn = props => (
    <Query query={CURRENT_USER_QUERY}>
        {({ data, loading }) => {
            if (loading) return <p>Loading...</p>
            if (!data.me) {
                return (
                    <>
                        <p>Please Sign In before continuing.</p>
                        <SignIn />
                    </>
                )
            }
            return props.children
        }}
    </Query >
)


export default PleaseSignIn;
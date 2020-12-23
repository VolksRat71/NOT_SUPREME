import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        signOut {
            message
        }
    }
`

const SignOut = props => (
    <Mutation
        mutation={SIGN_OUT_MUTATION}
        refetchQueries={
            [{ query: CURRENT_USER_QUERY }]
        }>
        {(signOut) => {
            return <a onClick={signOut}>Sign Out</a>
        }}
    </Mutation>
)

export default SignOut;
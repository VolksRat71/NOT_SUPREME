import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION (
        $email: String!, $password: String!
    ) {
  signIn(email: $email, password: $password) {
    id
    email
    name
  }
}
`

class SignIn extends Component {
    state = {
        password: '',
        email: ''
    }

    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Mutation
                mutation={SIGNIN_MUTATION}
                variables={this.state}
                refetchQueries={
                    [{ query: CURRENT_USER_QUERY }]
                }>
                {(signIn, { error, loading }) => {
                    // console.log(`Sign In reponse ${request}`);
                    return (
                        <Form
                            method="post"
                            onSubmit={async e => {
                                e.preventDefault();
                                await signIn();
                                this.setState({
                                    password: '',
                                    email: ''
                                })
                            }}>
                            <fieldset disabled={loading} aria-busy={loading}>
                                <h2>Sign in to your Account</h2>
                                <Error error={error} />
                                <label htmlFor="email">
                                    Email
                                <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.saveToState} />
                                </label>
                                <label htmlFor="password">
                                    Password
                                <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.saveToState} />
                                </label>
                                <button type="submit">Sign In</button>
                            </fieldset>
                        </Form>
                    )
                }}
            </Mutation>
        )
    }
}

export default SignIn;
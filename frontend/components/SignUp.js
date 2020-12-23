import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION (
        $email: String!, $password: String!, $name: String!
    ) {
  signUp(email: $email, name: $name, password: $password) {
    id
    email
    name
  }
}
`

class SignUp extends Component {
    state = {
        name: "",
        password: "",
        email: ""
    }

    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
                {(signUp, { error, loading }) => {
                    return (
                        <Form
                            method="post"
                            onSubmit={async e => {
                                e.preventDefault();
                                const res = await signUp();
                                this.setState({
                                    name: "",
                                    password: "",
                                    email: ""
                                })
                            }}>
                            <fieldset disabled={loading} aria-busy={loading}>
                                <h2>Sign Up for an Account</h2>
                                <Error error={error} />
                                <label htmlFor="email">
                                    Email
                                <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        value={this.state.email}
                                        onChange={this.saveToState} />
                                </label>
                                <label htmlFor="name">
                                    Name
                                <input
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        value={this.state.name}
                                        onChange={this.saveToState} />
                                </label>
                                <label htmlFor="password">
                                    Password
                                <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={this.state.password}
                                        onChange={this.saveToState} />
                                </label>
                                <button type="submit">Sign Up</button>
                            </fieldset>
                        </Form>
                    )
                }}
            </Mutation>
        )
    }
}

export default SignUp;
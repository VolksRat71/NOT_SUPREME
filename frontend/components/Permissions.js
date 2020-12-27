import React, { Component } from 'react'
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Table from './styles/Table';
import SickButton from './styles/SickButton';

const possiblePermissions = [
    'ADMIN',
    'USER',
    'ITEMCREATE',
    'ITEMUPDATE',
    'ITEMDELETE',
    'PERMISSIONUPDATE'
];

const ALL_USERS_QUERY = gql`
    query {
        users {
            id
            name
            email
            permissions
        }
    }
`;

const Permissions = props => (
    <Query query={ALL_USERS_QUERY}>
        {({ data, loading, error }) => (
            <>
                <Error error={error} />
                <>
                    <h1>Manage Permissions</h1>
                    <Table>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                {possiblePermissions.map(permission => {
                                    return <th>{permission}</th>
                                })}
                                <th>UPDATE PERMISSION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users.map(user => {
                                return <User user={user} />
                            })}
                        </tbody>
                    </Table>
                </>
            </>
        )}
    </Query>
);

class User extends React.Component {
    render() {
        const user = this.props.user
        return (
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {possiblePermissions.map(permission => {
                    return (
                        <td>
                            <label
                                htmlFor={`${user.id}-permission=${permission}`}>
                                <input type="checkbox" />
                            </label>
                        </td>
                    )
                })}
                <td>
                    <SickButton>Update</SickButton>
                </td>
            </tr>
        )
    }
}

export default Permissions;
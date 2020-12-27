import React, { Component } from 'react'
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Table from './styles/Table';
import SickButton from './styles/SickButton';
import PropTypes from 'prop-types';

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
                                    return <th key={permission}>{permission}</th>
                                })}
                                <th>UPDATE PERMISSION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users.map(user => {
                                return <UserPermissions key={user.id} user={user} />
                            })}
                        </tbody>
                    </Table>
                </>
            </>
        )}
    </Query>
);

class UserPermissions extends React.Component {
    static propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string,
            id: PropTypes.string,
            permissions: PropTypes.array
        }).isRequired
    }

    state = {
        permissions: this.props.user.permissions
    }

    handlePermissionChange = e => {
        const checkbox = e.target;
        // take a copy of current permissions
        let updatedPermissions = [...this.state.permissions];
        if (checkbox.checked) {
            updatedPermissions.push(checkbox.value)
        } else {
            updatedPermissions = updatedPermissions.filter(permission => {
                return permission !== checkbox.value
            })
        }
        this.setState({ permissions: updatedPermissions })
    }

    render() {
        const user = this.props.user
        return (
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {possiblePermissions.map(permission => {
                    return (
                        <td key={permission}>
                            <label
                                htmlFor={`${user.id}-permission=${permission}`}>
                                <input
                                    type="checkbox"
                                    checked={this.state.permissions.includes(permission)}
                                    value={permission}
                                    onChange={this.handlePermissionChange} />
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
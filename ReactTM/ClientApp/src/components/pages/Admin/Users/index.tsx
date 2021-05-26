import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Fragment, useState, useEffect  } from 'react';
import { UsersProps } from './UsersProps';
import { User } from '../../../../models';

function renderUser(user: User, index: number) {
    return (
        <tr key={index.toString()}>
            <td>{user.login}</td>
            <td>{user.name}</td>
            <td>{user.role}</td>
            <td>
                <Link to={`/admin/user/${user.id}`}>Редактировать</Link>
            </td>
            <td>
                <button>Удлить</button>
            </td>
        </tr>
    );
}

const Users: React.FC<UsersProps> = (props) => {

    console.log(props.users);
    const users = props.users ? props.users.map(renderUser) : new Array<JSX.Element>();

    return (
        <Fragment>
            <table>
                <thead>
                    <th>
                        <td>Логин</td>
                        <td>Имя</td>
                        <td>Роль</td>
                        <td></td>
                        <td></td>
                    </th>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
        </Fragment>
    );
} 

export default Users;
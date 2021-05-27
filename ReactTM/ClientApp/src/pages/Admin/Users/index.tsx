import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import UsersComponent from '../../../components/pages/Admin/Users';
import api from '../../../api/adminApi';
import State from '../../../store/oauth';
import { User } from '../../../models';


const Users: React.FC = () => {
    const [users, serUsers] = useState(new Array<User>());
    const [wasLoad, setWasLoad] = useState(false);

    if (!wasLoad) {
        api.user.getAll(0, 10)
            .then(u => {
                setWasLoad(true);
                serUsers(u.items);
            })
            .catch();
    }
    console.log('/admin/users');
    return (
        <Fragment>
            awdawdawd
            <Link to='/admin/user/new'>Новый</Link>
            <UsersComponent users={users} />
        </Fragment>
    );
} 

export default Users;
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import UserComponent from '../../../components/pages/Admin/User';
import api from '../../../api/adminApi';
import State from '../../../store/oauth';
import { User } from '../../../models';

const UserPage: React.FC = () => {
    const [user, setUser] = useState<User>({
        id: '',
        name: '',
        login: '',
        password: '',
        role: ''
    });

    return (
        <Fragment>
            <UserComponent user={user} />
        </Fragment>
    );
} 

export default UserPage;
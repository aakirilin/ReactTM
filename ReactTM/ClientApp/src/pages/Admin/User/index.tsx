import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import UserComponent from '../../../components/pages/Admin/User';
import api from '../../../api/adminApi';
import State from '../../../store/oauth';
import { User } from '../../../models';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../store/Admin/User/selectors';
import { LoadUserCreator, SetLoginCreator, SetNameCreator, SetPasswordCreator, SetRoleCreator, SetUserCreator } from '../../../store/Admin/User/types';

const UserPage: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const [wasLoad, setWasLoad] = useState(false);

    const addUser = () => {
        api.user.add(user).then().catch(e => console.log(e));
    } 

    dispatch(LoadUserCreator(userId, wasLoad, setWasLoad));
    console.log(user);
    return (
        <Fragment>
            <UserComponent
                user={user}
                setName={(newValue) => { dispatch(SetNameCreator(newValue)) }}
                setLogin={(newValue) => { dispatch(SetLoginCreator(newValue)) }}
                setPassword={(newValue) => { dispatch(SetPasswordCreator(newValue)) }}
                setRole={(newValue) => { dispatch(SetRoleCreator(newValue)) }}
                addUser={addUser} />
        </Fragment>
    );
} 

export default UserPage;
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Fragment, useState, useEffect  } from 'react';
import { UserProps } from './UserProps';
import { User } from '../../../../models';
import './UserStyle.css';

const UserComponent: React.FC<UserProps> = (props) => {

    const user = props.user;
    return (
        <Fragment>
            <div className='card'>
                <div className='card-item'>
                    <div className='card-item-title'>Логин: </div>
                    <input className='card-item-inputbox' value={user.login} />
                </div>

                <div className='card-item'>
                    <div className='card-item-title'>Имя: </div>
                    <input className='card-item-inputbox' value={user.name} />
                </div>

                <div className='card-item'>
                    <div className='card-item-title'>Пароль: </div>
                    <input className='card-item-inputbox' value={user.password} />
                </div>

                <div className='card-item'>
                    <div className='card-item-title'>Роль: </div>
                    <input className='card-item-inputbox' value={user.role} />
                </div>
            </div>
            <div>
            </div>
        </Fragment>
    );
} 

export default UserComponent;
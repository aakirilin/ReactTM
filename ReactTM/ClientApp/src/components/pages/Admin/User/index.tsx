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
                    <input className='card-item-inputbox' value={user.login} onChange={(e) => { props.setLogin(e.target.value); }} />
                </div>

                <div className='card-item'>
                    <div className='card-item-title'>Имя: </div>
                    <input className='card-item-inputbox' value={user.name} onChange={(e) => { props.setName(e.target.value); }} />
                </div>

                <div className='card-item'>
                    <div className='card-item-title'>Пароль: </div>
                    <input className='card-item-inputbox' value={user.password} onChange={(e) => { props.setPassword(e.target.value); }} />
                </div>

                <div className='card-item'>
                    <div className='card-item-title'>Роль: </div>
                    <input className='card-item-inputbox' value={user.role} onChange={(e) => { props.setRole(e.target.value); }} />
                </div>
            </div>
            <div>
                <button type='button' onClick={() => { props.addUser(); }}>Сохранить</button>
            </div>
        </Fragment>
    );
} 

export default UserComponent;
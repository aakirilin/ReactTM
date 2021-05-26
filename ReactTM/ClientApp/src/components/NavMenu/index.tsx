import * as React from 'react';
import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import State from '../../store/oauth';
import './NavMenu.css';
import oauthState from '../../store/oauth';

const adminMenu = (
    <Fragment>
        <NavLink to={'/admin/users'}>Пользователи</NavLink>
    </Fragment>    
);

const userMenu = (
    <Fragment>
        <NavLink to={'/'}>Все задачи</NavLink>
        <NavLink to={'/messages'}>Сообщения</NavLink>
        <NavLink to={'/contacts'}>Контакты</NavLink>
    </Fragment>
);

const NavMenu: React.FC = () => {
    const isAdmin = oauthState.currentUser.isAdmin();

    return (
        <Fragment>
            <nav className={'navMenu'}>
                <div className={'navigate'}>
                    <div className={'dropMenu'}>
                        <span>Меню</span>
                        <ul className={'dropMenuTop'}>
                            {isAdmin ? adminMenu : userMenu}
                        </ul>
                    </div>
                    <NavLink to={'/newTask'}>Нования задача</NavLink>
                </div>
                <div>
                    <span>Пользователь: {State.currentUser.name()}</span>
                    <button>Выйти</button>
                </div>
            </nav>
        </Fragment>
    );
}

export default NavMenu;
import * as React from 'react';
import { Fragment } from 'react';
import { LoginProps } from './LoginProps';

const Login: React.FC<LoginProps> = (props) => {
    const p = props.props;
    return (
        <Fragment>
            <div>
                <div>
                    <div>
                        <input type="text" id="login-login" value={p.login} onChange={(e) => {p.setLogin(e.target.value); }} />
                        <label htmlFor="login-login">Логин</label>
                    </div>
                    <div>
                        <input type="password" id="login-password" value={p.password} onChange={(e) => { p.setPassword(e.target.value); }}/>
                        <label htmlFor="login-password">Пароль</label>
                    </div>
                    <div>
                        <button type="button" onClick={() => { console.log('onClick'); p.onAccept(p.login, p.password); }}>Войти</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
} 

export default Login;
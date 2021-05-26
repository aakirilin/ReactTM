import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Fragment, useState, useEffect  } from 'react';
import LoginComponent from '../../components/pages/Login';
import api from '../../api/ouathApi';
import oauthState from '../../store/oauth';


const Login: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const props = {
        login: login,
        password: password,
        setLogin: setLogin,
        setPassword: setPassword,
        onAccept: (login: string, password: string) => {
            api.loginRequest(login, password)
                .then(token => {
                    oauthState.token.set(token);
                    return api.userDescription();
                })
                .then(description => {
                    oauthState.currentUser.set(description);
                    history.push('/');
                })
                .catch(e => console.log(e));
        }
    }

    return (
        <Fragment>
            <LoginComponent props={props} />
        </Fragment>
    );
} 

export default Login;
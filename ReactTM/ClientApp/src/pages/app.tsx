import * as React from 'react';
import { Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Layout from '../components/Layout';
import Home from '../components/pages/Home';
import Counter from '../components/Counter';
import FetchData from '../components/FetchData';
import oauthState from '../store/oauth';
import Login from './Login';
import NewTask from './NewTask';
//import Users from './Admin/Users';
//import User from './Admin/User';


const Users = React.lazy(() => import('./Admin/Users'));
const User = React.lazy(() => import('./Admin/User'));

export default () => {

    const history = useHistory();

    if (!oauthState.isLogined() && history.location.pathname !== '/login') {
        history.push('/login');
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path='/login' component={Login} />
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/newTask' component={NewTask} />
                    <Route path='/admin'>
                        <Route path='/admin/users' component={Users} />
                        <Route path='/admin/user/:userId?' component={User} />
                    </Route>
                    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
                </Layout>
            </Switch>
        </Suspense>
    )};

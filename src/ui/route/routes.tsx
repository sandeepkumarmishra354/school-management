import React, { PureComponent } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';
import ProtectedRoute from '../components/ProtectedRoute';

const Page404 = React.lazy(() => import('../page/Page404'));
const SchoolHome = React.lazy(() => import('./SchoolHome'));
const SchoolAuth = React.lazy(() => import('./SchoolAuth'));

export default class AppRootRoute extends PureComponent {

    render() {
        return (
            <Switch>
                <ProtectedRoute path='/school'>
                    <MySuspense>
                        <SchoolHome />
                    </MySuspense>
                </ProtectedRoute>
                <Redirect exact from='/' to='/school' />
                <Redirect exact from='/home' to='/school' />
                <Route path='/auth'>
                    <MySuspense>
                        <SchoolAuth/>
                    </MySuspense>
                </Route>
                <Route>
                    <MySuspense>
                        <Page404 />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }
}
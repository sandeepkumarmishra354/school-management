import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageDashboard = React.lazy(() => import('../page/dashboard/PageDashboard'));

export default class RouteDashboard extends Component {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageDashboard />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../../nav_page/Dashboard';
import { RouteModules } from '../../../modules/route.modules';

export default class MainRoute extends React.PureComponent {
    render() {
        return (
            <Switch>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
                <Route exact path='/'>
                    <Redirect to='/dashboard' />
                </Route>
                <RouteModules/>
            </Switch>
        )
    }
}
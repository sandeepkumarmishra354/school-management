import React, { PureComponent } from 'react'
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { RouteUrlMap } from '../../../config/sidenav_config';
import MyDashboard from './component/MyDashboard';

class _RouteDashboard extends PureComponent<RouteComponentProps> {
    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.dashboard} component={MyDashboard}/>
                <Route exact path='/dashboard'>
                    <Redirect to='/'/>
                </Route>
                <Route exact path='/home'>
                    <Redirect to='/' />
                </Route>
            </Switch>
        );
    }
}

export const RouteDashboard = withRouter(_RouteDashboard);
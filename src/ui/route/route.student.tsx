import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageStudent = React.lazy(() => import('../page/student/PageStudent'));

export default class RouteStudent extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageStudent />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
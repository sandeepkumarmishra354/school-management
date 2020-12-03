import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageTeacher = React.lazy(() => import('../page/teacher/PageTeacher'));

export default class RouteTeacher extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageTeacher />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
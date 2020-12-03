import React, { PureComponent} from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageAttendance = React.lazy(() => import('../page/attendance/PageAttendance'));

export default class RouteAttendance extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageAttendance />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
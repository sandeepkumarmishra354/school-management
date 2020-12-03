import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageHostel = React.lazy(() => import('../page/hostel/PageHostel'));

export default class RouteHostel extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageHostel />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
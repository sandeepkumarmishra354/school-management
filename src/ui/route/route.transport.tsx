import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageTransport = React.lazy(() => import('../page/transport/PageTransport'));

export default class RouteTransport extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageTransport />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
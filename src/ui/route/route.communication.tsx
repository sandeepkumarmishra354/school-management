import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageCommunication = React.lazy(() => import('../page/communication/PageCommunication'));

export default class RouteCommunication extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageCommunication />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageInventory = React.lazy(() => import('../page/inventory/PageInventory'));

export default class RouteInventory extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageInventory />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
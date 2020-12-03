import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageLibrary = React.lazy(() => import('../page/library/PageLibrary'));

export default class RouteLibrary extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageLibrary />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
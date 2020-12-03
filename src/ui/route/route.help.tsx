import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageHelp = React.lazy(() => import('../page/help/PageHelp'));

export default class RouteHelp extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageHelp />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
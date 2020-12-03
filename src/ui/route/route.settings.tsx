import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageSettings = React.lazy(() => import('../page/settings/PageSettings'));

export default class RouteSettings extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageSettings />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
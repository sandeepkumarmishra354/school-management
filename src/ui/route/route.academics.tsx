import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageAcademics = React.lazy(() => import('../page/academics/PageAcademics'));

export default class RouteAcademics extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageAcademics />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
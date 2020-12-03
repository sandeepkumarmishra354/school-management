import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageFeeManagement = React.lazy(() => import('../page/fee_management/PageFeeManagement'));

export default class RouteFee extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageFeeManagement />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
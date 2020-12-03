import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PagePayrollManagement = React.lazy(() => import('../page/payroll_management/PagePayrollManagement'));

export default class RoutePayroll extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PagePayrollManagement />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
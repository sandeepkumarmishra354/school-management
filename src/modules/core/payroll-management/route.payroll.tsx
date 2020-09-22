import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import { RouteUrlMap } from '../../../config/sidenav_config';
import PayrollGenerate from './component/PayrollGenerate';
import PayrollReport from './component/PayrollReport';

class _RoutePayroll extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.payroll_management["payroll-generate"]}>
                    <PayrollGenerate/>
                </Route>
                <Route exact path={RouteUrlMap.payroll_management["payroll-report"]}>
                    <PayrollReport/>
                </Route>
            </Switch>
        );
    }
}

export const RoutePayroll = withRouter(_RoutePayroll);
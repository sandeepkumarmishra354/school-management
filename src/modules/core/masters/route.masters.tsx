import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import { RouteUrlMap } from '../../../config/sidenav_config';
import MasterCreateCourse from './component/MasterCreateCourse';
import MasterCreateFee from './component/MasterCreateFee';
import MasterCreatePayroll from './component/MasterCreatePayroll';
import MasterCreateSession from './component/MasterCreateSession';

class _RouteMasters extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.master["master-cr-course"]}>
                    <MasterCreateCourse />
                </Route>
                <Route exact path={RouteUrlMap.master["master-cr-fee"]}>
                    <MasterCreateFee />
                </Route>
                <Route exact path={RouteUrlMap.master["master-cr-payroll"]}>
                    <MasterCreatePayroll />
                </Route>
                <Route exact path={RouteUrlMap.master["master-cr-session"]}>
                    <MasterCreateSession />
                </Route>
            </Switch>
        );
    }

}

export const RouteMasters = withRouter(_RouteMasters);
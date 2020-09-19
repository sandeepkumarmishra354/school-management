import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import MasterCreateCourse from './component/MasterCreateCourse';
import MasterCreateFee from './component/MasterCreateFee';
import MasterCreatePayroll from './component/MasterCreatePayroll';
import MasterCreateSession from './component/MasterCreateSession';

class _RouteMasters extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/create-course`}>
                    <MasterCreateCourse />
                </Route>
                <Route exact path={`${path}/create-fee`}>
                    <MasterCreateFee />
                </Route>
                <Route exact path={`${path}/create-payroll`}>
                    <MasterCreatePayroll />
                </Route>
                <Route exact path={`${path}/create-session`}>
                    <MasterCreateSession />
                </Route>
            </Switch>
        );
    }

}

export const RouteMasters = withRouter(_RouteMasters);
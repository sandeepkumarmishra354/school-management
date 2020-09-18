import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import MasterCreateCourse from './component/MasterCreateCourse';
import MasterCreateFee from './component/MasterCreateFee';
import MasterCreatePayroll from './component/MasterCreatePayroll';
import MasterCreateSession from './component/MasterCreateSession';

class _RouteMasters extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/create-course'>
                    <MasterCreateCourse />
                </Route>
                <Route path='/create-fee'>
                    <MasterCreateFee />
                </Route>
                <Route path='/create-payroll'>
                    <MasterCreatePayroll />
                </Route>
                <Route path='/create-session'>
                    <MasterCreateSession />
                </Route>
            </Router>
        );
    }

}

export const RouteMasters = withRouter(_RouteMasters);
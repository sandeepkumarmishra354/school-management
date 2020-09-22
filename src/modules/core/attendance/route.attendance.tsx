import React, {  PureComponent } from 'react'
import { RouteComponentProps, Route, withRouter, Switch } from 'react-router-dom';
import AttendanceTeacher from './component/AttendanceTeacher';
import AttendanceStudent from './component/AttendanceStudent';
import { RouteUrlMap } from '../../../config/sidenav_config';

class _RouteAttendance extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.attendance["attendance-student"]}>
                    <AttendanceStudent/>
                </Route>
                <Route exact path={RouteUrlMap.attendance["attendance-teacher"]}>
                    <AttendanceTeacher />
                </Route>
            </Switch>
        );
    }

}

export const RouteAttendance = withRouter(_RouteAttendance);
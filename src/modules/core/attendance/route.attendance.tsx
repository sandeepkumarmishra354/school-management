import React, {  PureComponent } from 'react'
import { RouteComponentProps, Route, withRouter, Switch } from 'react-router-dom';
import AttendanceTeacher from './component/AttendanceTeacher';
import AttendanceStudent from './component/AttendanceStudent';

class _RouteAttendance extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/student`}>
                    <AttendanceStudent/>
                </Route>
                <Route exact path={`${path}/teacher`}>
                    <AttendanceTeacher />
                </Route>
            </Switch>
        );
    }

}

export const RouteAttendance = withRouter(_RouteAttendance);
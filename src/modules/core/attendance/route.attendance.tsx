import React, {  PureComponent } from 'react'
import { RouteComponentProps, Router, Route, withRouter } from 'react-router-dom';
import AttendanceTeacher from './component/AttendanceTeacher';
import AttendanceStudent from './component/AttendanceStudent';

class _RouteAttendance extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/student'>
                    <AttendanceStudent/>
                </Route>
                <Route path='/teacher'>
                    <AttendanceTeacher />
                </Route>
            </Router>
        );
    }

}

export const RouteAttendance = withRouter(_RouteAttendance);
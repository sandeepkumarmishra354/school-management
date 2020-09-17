import React, { Component } from 'react'
import { RouteComponentProps, withRouter, Switch, Route } from 'react-router-dom';
import AttendanceList from '../attendence/AttendanceList';

class RouteAttendance extends Component<RouteComponentProps> {
    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={path}>
                    <AttendanceList/>
                </Route>
            </Switch>
        );
    }
}

export default withRouter(RouteAttendance);
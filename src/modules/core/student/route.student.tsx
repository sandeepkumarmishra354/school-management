import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import StudentList from './component/StudentList';
import StudentNewEntry from './component/StudentNewEntry';
import StudentBulkDelete from './component/StudentBulkDelete';
import { RouteUrlMap } from '../../../config/sidenav_config';

class _RouteStudent extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.student["student-list"]}>
                    <StudentList/>
                </Route>
                <Route exact path={RouteUrlMap.student["student-new"]}>
                    <StudentNewEntry/>
                </Route>
                <Route exact path={RouteUrlMap.student["student-delete"]}>
                    <StudentBulkDelete/>
                </Route>
            </Switch>
        );
    }
}

export const RouteStudent = withRouter(_RouteStudent);
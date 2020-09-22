import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import TeacherList from './component/TeacherList';
import TeacherNewEntry from './component/TeacherNewEntry';
import TeacherBulkDelete from './component/TeacherBulkDelete';
import { RouteUrlMap } from '../../../config/sidenav_config';

class _RouteTeacher extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.teacher["teacher-list"]}>
                    <TeacherList/>
                </Route>
                <Route exact path={RouteUrlMap.teacher["teacher-new"]}>
                    <TeacherNewEntry/>
                </Route>
                <Route exact path={RouteUrlMap.teacher["teacher-delete"]}>
                    <TeacherBulkDelete/>
                </Route>
            </Switch>
        );
    }
}

export const RouteTeacher = withRouter(_RouteTeacher);
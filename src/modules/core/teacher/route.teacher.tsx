import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import TeacherList from './component/TeacherList';
import TeacherNewEntry from './component/TeacherNewEntry';
import TeacherBulkDelete from './component/TeacherBulkDelete';

class _RouteTeacher extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/list`}>
                    <TeacherList/>
                </Route>
                <Route exact path={`${path}/new`}>
                    <TeacherNewEntry/>
                </Route>
                <Route exact path={`${path}/bulk-delete`}>
                    <TeacherBulkDelete/>
                </Route>
            </Switch>
        );
    }
}

export const RouteTeacher = withRouter(_RouteTeacher);
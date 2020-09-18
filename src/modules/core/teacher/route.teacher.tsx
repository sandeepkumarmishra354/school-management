import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import TeacherList from './component/TeacherList';
import TeacherNewEntry from './component/TeacherNewEntry';
import TeacherBulkDelete from './component/TeacherBulkDelete';

class _RouteTeacher extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/list'>
                    <TeacherList/>
                </Route>
                <Route path='/new'>
                    <TeacherNewEntry/>
                </Route>
                <Route path='/bulk-delete'>
                    <TeacherBulkDelete/>
                </Route>
            </Router>
        );
    }
}

export const RouteTeacher = withRouter(_RouteTeacher);
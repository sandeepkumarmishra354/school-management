import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import StudentList from './component/StudentList';
import StudentNewEntry from './component/StudentNewEntry';
import StudentBulkDelete from './component/StudentBulkDelete';

class _RouteStudent extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/list'>
                    <StudentList/>
                </Route>
                <Route path='/new'>
                    <StudentNewEntry/>
                </Route>
                <Route path='/bulk-delete'>
                    <StudentBulkDelete/>
                </Route>
            </Router>
        );
    }
}

export const RouteStudent = withRouter(_RouteStudent);
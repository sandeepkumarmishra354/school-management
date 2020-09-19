import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import StudentList from './component/StudentList';
import StudentNewEntry from './component/StudentNewEntry';
import StudentBulkDelete from './component/StudentBulkDelete';

class _RouteStudent extends PureComponent<RouteComponentProps> {

    render() {
        let {path} = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/list`}>
                    <StudentList/>
                </Route>
                <Route exact path={`${path}/new`}>
                    <StudentNewEntry/>
                </Route>
                <Route exact path={`${path}/bulk-delete`}>
                    <StudentBulkDelete/>
                </Route>
            </Switch>
        );
    }
}

export const RouteStudent = withRouter(_RouteStudent);
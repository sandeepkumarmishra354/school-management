import React, { Component } from 'react'
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import StudentList from '../student/StudentList';
import { storeStudent } from '../../../mobx/store/student/store.student';
import CreateNewStudent from '../student/CreateNewStudent';
import { StudentFormModel } from '../form-model/create.student';
import StudentProfile from '../student/StudentProfile';

class RouteStudent extends Component<RouteComponentProps, {}> {
    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route
                    exact path={path}>
                    <StudentList
                        store={storeStudent}
                        onRowClicked={(data) => { }} />
                </Route>
                <Route path={`${path}/new`}>
                    <CreateNewStudent
                        store={storeStudent}
                        formModel={StudentFormModel.createStudent} />
                </Route>
                <Route path={`${path}/profile/:uid`}>
                    <StudentProfile store={storeStudent}/>
                </Route>
            </Switch>
        );
    }
}

export default withRouter(RouteStudent);
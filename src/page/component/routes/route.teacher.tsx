import React, { Component } from 'react'
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import TeacherList from '../teacher/TeacherList';
import { storeTeacher } from '../../../mobx/store/teacher/store.teacher';
import CreateNewTeacher from '../teacher/CreateNewTeacher';
import { TeacherFormModel } from '../form-model/create.teacher';
import TeacherProfile from '../teacher/TeacherProfile';

class RouteTeacher extends Component<RouteComponentProps, {}> {
    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route
                    exact path={path}>
                    <TeacherList
                        store={storeTeacher}
                        onRowClicked={(data) => { }} />
                </Route>
                <Route path={`${path}/new`}>
                    <CreateNewTeacher
                        store={storeTeacher}
                        formModel={TeacherFormModel.createTeacher} />
                </Route>
                <Route path={`${path}/profile/:uid`}>
                    <TeacherProfile store={storeTeacher}/>
                </Route>
            </Switch>
        );
    }
}

export default withRouter(RouteTeacher);
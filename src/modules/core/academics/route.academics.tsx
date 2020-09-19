import React, { PureComponent } from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import ClassTimeTable from './component/ClassTimeTable';
import TeacherTimeTable from './component/TeacherTimeTable';
import AssignClassTeacher from './component/AssignClassTeacher';
import PromoteStudents from './component/PromoteStudents';
import AcademinSubjects from './component/AcademicSubjects';
import AcademicClasses from './component/AcademicClasses';
import AcademicSections from './component/AcademicSections';
import { withRouter } from 'react-router-dom';

class _RouteAcademics extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/timetable-class`}>
                    <ClassTimeTable />
                </Route>
                <Route exact path={`${path}/timetable-teacher`}>
                    <TeacherTimeTable />
                </Route>
                <Route exact path={`${path}/assign-teacher`}>
                    <AssignClassTeacher />
                </Route>
                <Route exact path={`${path}/promote`}>
                    <PromoteStudents />
                </Route>
                <Route exact path={`${path}/subjects`}>
                    <AcademinSubjects />
                </Route>
                <Route exact path={`${path}/class`}>
                    <AcademicClasses />
                </Route>
                <Route exact path={`${path}/section`}>
                    <AcademicSections />
                </Route>
            </Switch>
        );
    }

}

export const RouteAcademics = withRouter(_RouteAcademics);
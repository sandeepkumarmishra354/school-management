import React, { PureComponent } from 'react'
import { Route, Router, RouteComponentProps, withRouter } from 'react-router-dom';
import ClassTimeTable from './component/ClassTimeTable';
import TeacherTimeTable from './component/TeacherTimeTable';
import AssignClassTeacher from './component/AssignClassTeacher';
import PromoteStudents from './component/PromoteStudents';
import AcademinSubjects from './component/AcademicSubjects';
import AcademicClasses from './component/AcademicClasses';
import AcademicSections from './component/AcademicSections';

class _RouteAcademics extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route exact path='/timetable-class'>
                    <ClassTimeTable />
                </Route>
                <Route exact path='/timetable-teacher'>
                    <TeacherTimeTable />
                </Route>
                <Route exact path='/assign-teacher'>
                    <AssignClassTeacher />
                </Route>
                <Route exact path='/promote'>
                    <PromoteStudents />
                </Route>
                <Route exact path='/subjects'>
                    <AcademinSubjects />
                </Route>
                <Route exact path='/class'>
                    <AcademicClasses />
                </Route>
                <Route exact path='/section'>
                    <AcademicSections />
                </Route>
            </Router>
        );
    }

}

export const RouteAcademics = withRouter(_RouteAcademics);
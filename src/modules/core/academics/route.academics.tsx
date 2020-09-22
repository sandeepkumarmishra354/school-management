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
import { RouteUrlMap } from '../../../config/sidenav_config';

class _RouteAcademics extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.academics["academics-tt-class"]}>
                    <ClassTimeTable />
                </Route>
                <Route exact path={RouteUrlMap.academics["academics-tt-teacher"]}>
                    <TeacherTimeTable />
                </Route>
                <Route exact path={RouteUrlMap.academics["academics-assign-teacher"]}>
                    <AssignClassTeacher />
                </Route>
                <Route exact path={RouteUrlMap.academics["academics-promote"]}>
                    <PromoteStudents />
                </Route>
                <Route exact path={RouteUrlMap.academics["academics-subjects"]}>
                    <AcademinSubjects />
                </Route>
                <Route exact path={RouteUrlMap.academics["academics-class"]}>
                    <AcademicClasses />
                </Route>
                <Route exact path={RouteUrlMap.academics["academics-section"]}>
                    <AcademicSections />
                </Route>
            </Switch>
        );
    }

}

export const RouteAcademics = withRouter(_RouteAcademics);
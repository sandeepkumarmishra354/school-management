import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../../nav_page/Dashboard'
import Stats from '../../nav_page/Stats'
import Student from '../../nav_page/Student'
import Teacher from '../../nav_page/Teacher'
import { storeTeacher } from '../../../mobx/store/teacher/store.teacher'
import AttendenceManagement from '../../nav_page/AttendenceManagement'
import FeeCollection from '../../nav_page/FeeCollection'
import SaleryManagement from '../../nav_page/SaleryManagement'
import Help from '../../nav_page/Help'
import Settings from '../../nav_page/Settings'

export default class MainRoute extends React.PureComponent {
    render() {
        return (
            <Switch>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
                <Route exact path='/'>
                    <Redirect to='/dashboard' />
                </Route>
                <Route path='/stats'>
                    <Stats />
                </Route>
                <Route path='/student'>
                    <Student />
                </Route>
                <Route path='/teacher'>
                    <Teacher store={storeTeacher} />
                </Route>
                <Route path='/attendance'>
                    <AttendenceManagement />
                </Route>
                <Route path='/fee'>
                    <FeeCollection />
                </Route>
                <Route path='/salery'>
                    <SaleryManagement />
                </Route>
                <Route path='/help'>
                    <Help />
                </Route>
                <Route path='/setting'>
                    <Settings />
                </Route>
            </Switch>
        )
    }
}
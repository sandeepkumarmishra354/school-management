import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import { RouteStudent } from './core/student/route.student';
import { RouteTeacher } from './core/teacher/route.teacher';
import { RouteAttendance } from './core/attendance/route.attendance';
import { RouterFee } from './core/fee-management/router.fee';
import { RoutePayroll } from './core/payroll-management/route.payroll';
import { RouteMasters } from './core/masters/route.masters';
import { RouteAcademics } from './core/academics/route.academics';
import { RouteLibrary } from './optional/library/route.library';
import { RouteHostel } from './optional/hostel/route.hostel';
import { RouteTransport } from './optional/transport/route.transport';
import { RouteInventory } from './core/inventory/route.inventory';
import { RouteExpense } from './core/expense/route.expense';
import { RouteSetting } from './core/setting/route.setting';
import { RouteCommunication } from './core/communication/route.communication';
import { RouteCertificate } from './core/certificate/route.certificate';

class _RouteModules extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/student' component={RouteStudent} />
                <Route path='/teacher' component={RouteTeacher} />
                <Route path='/attendance' component={RouteAttendance} />
                <Route path='/fee' component={RouterFee} />
                <Route path='/payroll' component={RoutePayroll} />
                <Route path='/masters' component={RouteMasters} />
                <Route path='/academics' component={RouteAcademics} />
                <Route path='/library' component={RouteLibrary} />
                <Route path='/hostel' component={RouteHostel} />
                <Route path='/transport' component={RouteTransport} />
                <Route path='/inventory' component={RouteInventory} />
                <Route path='/expense' component={RouteExpense} />
                <Route path='/setting' component={RouteSetting} />
                <Route path='/communication' component={RouteCommunication} />
                <Route path='/certificate' component={RouteCertificate} />
            </Router>
        );
    }

}

export const RouteModules = withRouter(_RouteModules);
import React, { CSSProperties, PureComponent } from 'react'
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import { inject, observer, Provider } from 'mobx-react';
import { StoreSidebar } from '../../mobx/sidebar/store.sidebar';
import AppHeader from '../components/AppHeader';
import ProtectedRoute from '../components/ProtectedRoute';
import SidebarOptions from '../components/SidebarOptions';
import RouteAcademics from './route.academics';
import RouteAttendance from './route.attendance';
import RouteCertificate from './route.certificate';
import RouteCommunication from './route.communication';
import RouteDashboard from './route.dashboard';
import RouteFee from './route.fee';
import RouteHelp from './route.help';
import RouteHostel from './route.hostel';
import RouteInventory from './route.inventory';
import RouteLibrary from './route.library';
import RoutePayroll from './route.payroll';
import RouteSettings from './route.settings';
import RouteStudent from './route.student';
import RouteTeacher from './route.teacher';
import RouteTransport from './route.transport';
import { AppHomeStore } from '../../mobx/store.app.home';
import { StoreSidebarOption } from '../../mobx/sidebar/store.sidebar_options';
import MySuspense from '../components/MySuspense';

const Page404 = React.lazy(() => import('../page/Page404'));

const routeHeadings: any = {
    'dashboard': 'Dashboard',
    'attendance': 'Attendance',
    'student': 'Student',
    'teacher': 'Teacher',
    'fee-management': 'Fee Management',
    'payroll-management': 'Payroll Management',
    'academics': 'Academics',
    'library': 'Library',
    'hostel': 'Hostel',
    'inventory': 'Inventory',
    'communication': 'Communication',
    'transport': 'Transport',
    'certificate': 'Issue Certificate',
    'settings': 'Settings',
    'help': 'Help',
};

interface AppRouteProps extends RouteComponentProps {
    storeSidebarOption?: StoreSidebarOption
}

@inject('storeSidebarOption')
class _AppPrivateRoute extends PureComponent<AppRouteProps> {

    componentDidMount = () => {
        this.props.history.listen(this._historyListener);
    }

    private _historyListener = async (data: any) => {
        //set app heading
        try {
            let pathname = data.pathname as string;
            if (pathname.includes('school')) {
                let paths = pathname.split('/').filter(p => p !== '');
                console.log(paths);
                if (paths.length >= 2) {
                    let path = paths[1];
                    let heading = routeHeadings[path];
                    this.props.storeSidebarOption?.setOption(heading)
                }
            }
        } catch (err) {
            //
        }
    }

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <ProtectedRoute exact path={`${path}/dashboard`}>
                    <RouteDashboard />
                </ProtectedRoute>
                <Redirect exact from={`${path}/home`} to={`${path}/dashboard`} />
                <Redirect exact from={`${path}`} to={`${path}/dashboard`} />
                <ProtectedRoute exact path={`${path}/attendance`}>
                    <RouteAttendance />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/student`}>
                    <RouteStudent />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/teacher`}>
                    <RouteTeacher />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/fee-management`}>
                    <RouteFee />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/payroll-management`}>
                    <RoutePayroll />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/academics`}>
                    <RouteAcademics />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/library`}>
                    <RouteLibrary />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/hostel`}>
                    <RouteHostel />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/inventory`}>
                    <RouteInventory />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/communication`}>
                    <RouteCommunication />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/transport`}>
                    <RouteTransport />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/certificate`}>
                    <RouteCertificate />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/settings`}>
                    <RouteSettings />
                </ProtectedRoute>
                <ProtectedRoute exact path={`${path}/help`}>
                    <RouteHelp />
                </ProtectedRoute>
                <Route>
                    <MySuspense>
                        <Page404 />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }
}

const AppPrivateRoute = withRouter(_AppPrivateRoute);

class HomeContent extends PureComponent {

    private readonly styles: CSSProperties = {
        padding: 20,
        width: '100%'
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <AppHeader />
                <div style={{width:'100%'}}>
                    <AppPrivateRoute />
                </div>
            </div>
        );
    }
}

@inject('storeSidebar')
@observer
class _SchoolHome extends PureComponent<{ storeSidebar?: StoreSidebar }> {

    componentDidMount = () => {
        this.props.storeSidebar?.registerListener();
    }

    componentWillUnmount = () => {
        this.props.storeSidebar?.removeListener();
    }

    render() {
        return (
            <Sidebar
                sidebar={<SidebarOptions />}
                styles={{ sidebar: { backgroundColor: '#fff',minWidth:'200px' } }}
                open={this.props.storeSidebar?.sidebarOpen}
                docked={this.props.storeSidebar?.sidebarDocked}
                onSetOpen={this.props.storeSidebar?.setSidebarOpen}
                contentClassName='content-holder'>
                <HomeContent/>
            </Sidebar>
        );
    }

}

export default class SchoolHome extends PureComponent {
    render() {
        return (
            <Provider {...AppHomeStore}>
                <_SchoolHome />
            </Provider>
        );
    }
}
import React, { Component } from 'react'
import { Sidenav, Nav, Icon } from 'rsuite'
import { NavOption, sidenavStore } from '../../mobx/store/store.sidenav'
import { observer } from 'mobx-react';
import { authStore } from '../../mobx/store/store.auth';

interface Props {
    navStore: typeof sidenavStore,
    authStore: typeof authStore
}

@observer
export default class SideNav extends Component<Props, {}> {

    private _navSelected = (nav: NavOption) => {
        if(nav !== NavOption.LOGOUT)
            this.props.navStore.setCurrentNav(nav);
        else
            this.props.authStore.logout();
    }

    render() {
        return (
            <Sidenav
                style={{ backgroundColor: "transparent" }}
                appearance='inverse'
                expanded={this.props.navStore.expanded}>
                <Sidenav.Body>
                    <Nav
                    onSelect={this._navSelected}
                    activeKey={this.props.navStore.currentNav}>
                        <Nav.Item eventKey='1' icon={<Icon icon="dashboard" />}>Dashboard</Nav.Item>
                        <Nav.Item eventKey={NavOption.STATS} icon={<Icon icon="charts" />}>Stats</Nav.Item>
                        <Nav.Item eventKey={NavOption.ATTENDENCE_MANAGEMENT} icon={<Icon icon="peoples" />}>Attendence</Nav.Item>
                        <Nav.Item eventKey={NavOption.STUDENT} icon={<Icon icon="child" />}>Student</Nav.Item>
                        <Nav.Item eventKey={NavOption.TEACHER} icon={<Icon icon="user" />}>Teacher</Nav.Item>
                        <Nav.Item eventKey={NavOption.GUARDIAN} icon={<Icon icon="shield" />}>Guardian</Nav.Item>
                        <Nav.Item eventKey={NavOption.CLASS_MANAGEMENT} icon={<Icon icon="hourglass" />}>Class Management</Nav.Item>
                        <Nav.Item eventKey={NavOption.FEE_COLLECTION} icon={<Icon icon="money" />}>Fee Management</Nav.Item>
                        <Nav.Item eventKey={NavOption.SALERY_MANAGEMENT} icon={<Icon icon="coincide" />}>Salery Management</Nav.Item>
                        <Nav.Item eventKey={NavOption.SETTING} icon={<Icon icon="setting" />}>Settings</Nav.Item>
                        <Nav.Item eventKey={NavOption.HELP} icon={<Icon icon="help-o" />}>
                            <span>Help</span>
                        </Nav.Item>
                        <Nav.Item eventKey={NavOption.LOGOUT} icon={<Icon style={{ color: '#E44236' }} icon="exit" />}>
                            <span style={{ color: '#E44236' }}>Logout</span>
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        )
    }
}
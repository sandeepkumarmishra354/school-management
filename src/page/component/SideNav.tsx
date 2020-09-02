import React, { Component } from 'react'
import { Sidenav, Nav, Icon } from 'rsuite'
import { NavOption } from '../../mobx/store/store.sidenav'
import { observer } from 'mobx-react';

interface Props {
    setNav: (nav:NavOption) => void,
    expand:boolean,
    nav:NavOption
}

@observer
export default class SideNav extends Component<Props, {}> {

    constructor(props:Props) {
        super(props);
    }

    private _navSelected = (nav:NavOption) => {
        this.props.setNav(nav);
    }

    render() {
        return (
            <Sidenav
                style={{ backgroundColor: "transparent" }}
                appearance='inverse'
                expanded={this.props.expand}
                onSelect={this._navSelected}
                activeKey={this.props.nav}>
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey={NavOption.DASHBOARD} icon={<Icon icon="dashboard" />}>Dashboard</Nav.Item>
                        <Nav.Item eventKey={NavOption.STATS} icon={<Icon icon="charts" />}>Stats</Nav.Item>
                        <Nav.Item eventKey={NavOption.ATTENDENCE_MANAGEMENT} icon={<Icon icon="peoples" />}>Attendence</Nav.Item>
                        <Nav.Item eventKey={NavOption.STUDENT} icon={<Icon icon="child" />}>Student</Nav.Item>
                        <Nav.Item eventKey={NavOption.TEACHER} icon={<Icon icon="user" />}>Teacher</Nav.Item>
                        <Nav.Item eventKey={NavOption.FEE_COLLECTION} icon={<Icon icon="money" />}>Fee Management</Nav.Item>
                        <Nav.Item eventKey={NavOption.SALERY_MANAGEMENT} icon={<Icon icon="coincide" />}>Salery Management</Nav.Item>
                        <Nav.Item eventKey={NavOption.SETTING} icon={<Icon icon="setting" />}>Settings</Nav.Item>
                        <Nav.Item eventKey={NavOption.HELP} icon={<Icon icon="help-o" />}>
                            <span>Help</span>
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        )
    }
}
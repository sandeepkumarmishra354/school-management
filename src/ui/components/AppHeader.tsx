import { inject, observer } from 'mobx-react';
import React, { PureComponent } from 'react'
import { FormControl, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
import { StoreSidebar } from '../../mobx/sidebar/store.sidebar';
import { StoreSidebarOption } from '../../mobx/sidebar/store.sidebar_options';
import SchoolBranding from './SchoolBranding';
import SidebarControllButton from './SidebarControllButton';

interface Props {
    storeSidebar?: StoreSidebar,
    storeSidebarOption?: StoreSidebarOption
}

@inject('storeSidebar', 'storeSidebarOption')
@observer
export default class AppHeader extends PureComponent<Props> {

    render() {
        return (
            <Navbar
                collapseOnSelect className='app-header'
                expand='lg'
                variant='light' >
                <Navbar.Brand>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <SidebarControllButton />
                        <SchoolBranding />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        <Form inline>
                            <FormControl
                                type='text' placeholder='search...'
                                className="mr-sm-2" style={{ height: 32 }} />
                            <Button
                                style={{ marginRight: 12 }}
                                variant='outline-primary' size='sm'>search</Button>
                        </Form>
                        <NavDropdown
                            id='collasible-nav-dropdown'
                            title='Admin'>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        );
    }

}
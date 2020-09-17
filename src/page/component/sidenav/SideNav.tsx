import React, { Component } from 'react'
import { Sidenav, Nav, Icon, Dropdown } from 'rsuite'
import { NavOption } from '../../../mobx/store/store.sidenav'
import { observer } from 'mobx-react';
import { routeHandler } from '../../../utils/route_handler';
import { ConfigSideNav } from '../../../config/sidenav_config';

interface Props {
    setNav: (nav: NavOption) => void,
    expand: boolean,
    nav: NavOption
}

@observer
export default class SideNav extends Component<Props, {}> {

    render() {
        return (
            <Sidenav
                style={{ backgroundColor:'#2F363F'}}
                appearance='inverse'
                expanded={this.props.expand}
                onSelect={routeHandler.handleSideNavOptions}
                activeKey={this.props.nav}>
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item
                            eventKey={NavOption.DASHBOARD}
                            icon={<Icon icon="dashboard" />}>
                            DASHBOARD
                        </Nav.Item>
                        <Dropdown
                        title='STUDENT'
                        eventKey={ConfigSideNav.student}
                            icon={<Icon icon='child'/>}>
                            <Dropdown.Item eventKey={ConfigSideNav.student.list} >List</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.student.new} >New entry</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.student.delete} >Bulk delete</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='TEACHER'
                            eventKey={ConfigSideNav.teacher}
                            icon={<Icon icon='user' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.teacher.list} >List</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.teacher.new} >New entry</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.teacher.delete} >Bulk delete</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='ATTENDANCE'
                            eventKey={ConfigSideNav.attendance}
                            icon={<Icon icon='people-group' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.attendance.student} >Students</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.attendance.teacher} >Teachers</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='ACADEMICS'
                            eventKey={ConfigSideNav.academics}
                            icon={<Icon icon='mortar-board' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.academics.timetable_class} >Class timetable</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.academics.timetable_teacher} >Teacher timetable</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.academics.assign_teacher} >Assign class teacher</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.academics.promote} >Promote students</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.academics.subjects} >Subjects</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.academics.class} >Classes</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.academics.section} >Sections</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='FEE MANAGEMENT'
                            eventKey={ConfigSideNav.fee_management}
                            icon={<Icon icon='money' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.fee_management.collect} >Fee collect</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.fee_management.reminder} >Fee reminder</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.fee_management.type} >Fee type</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.fee_management.discount} >Fee discount</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='PAYROLL MANAGEMENT'
                            eventKey={ConfigSideNav.payroll_management}
                            icon={<Icon icon='paypal' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.payroll_management.generate} >Generate</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.payroll_management.report} >Report</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='LIBRARY'
                            eventKey={ConfigSideNav.library}
                            icon={<Icon icon='book' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.library.list} >Books</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.library.issued} >Issued book</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.library.delete} >Bulk delete</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.library.report} >Report</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='HOSTEL'
                            eventKey={ConfigSideNav.hostel}
                            icon={<Icon icon='building' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.hostel.list} >Hostels</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.hostel.issued} >Issued hostels</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.hostel.delete} >Bulk delete</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.hostel.report} >Report</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='INVENTORY'
                            eventKey={ConfigSideNav.inventory}
                            icon={<Icon icon='attribution' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.inventory.add} >Add record</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.inventory.list} >Record list</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.inventory.report} >Report</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='EXPENSE'
                            eventKey={ConfigSideNav.expense}
                            icon={<Icon icon='cc-mastercard' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.expense.all} >All expenses</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.expense.add} >Add new</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.expense.report} >Report</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='MASTERS'
                            eventKey={ConfigSideNav.master}
                            icon={<Icon icon='list-alt' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.master.create_course} >Create course</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.master.create_session} >Create session</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.master.create_fee} >Create fee</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.master.create_payroll} >Create payroll</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='COMMUNICATION'
                            eventKey={ConfigSideNav.communication}
                            icon={<Icon icon='speaker' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.communication.student}>Student</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.communication.teacher} >Teacher</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.communication.guardian} >Guardian</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='TRANSPORT'
                            eventKey={ConfigSideNav.transport}
                            icon={<Icon icon='bus' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.transport.routes}>Routes</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.transport.vehicles} >Vehicles</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='CERTIFICATE / ID'
                            eventKey={ConfigSideNav.certificate_id}
                            icon={<Icon icon='certificate' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.certificate_id.cert_student}>Student certificate</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.certificate_id.cert_teacher} >Teacher certificate</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.certificate_id.cert_id_student} >Student id card</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.certificate_id.cert_id_teacher} >Teacher id card</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            title='SETTING'
                            eventKey={ConfigSideNav.settings}
                            icon={<Icon icon='gear-circle' />}>
                            <Dropdown.Item eventKey={ConfigSideNav.settings.general}>General</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.settings.communication} >Communication</Dropdown.Item>
                            <Dropdown.Item eventKey={ConfigSideNav.settings.payment} >Online payment</Dropdown.Item>
                        </Dropdown>
                        <Nav.Item
                            eventKey={NavOption.HELP}
                            icon={<Icon icon="help-o" />}>
                           HELP
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        )
    }
}
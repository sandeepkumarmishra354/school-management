import { inject, observer } from 'mobx-react';
import React, { PureComponent } from 'react'
import { Card, Table, Button, Dropdown } from 'react-bootstrap';
import { StoreAttendance } from '../../../../mobx/attendance/store.attendance';
import { AttendanceBasicInfo } from '../../../../mobx/data_types';
import MyCard from '../../../components/MyCard';
import { FaEllipsisH, FaFilePdf, FaFileExcel, FaFileUpload, FaEdit } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';
import MyButton from '../../../components/MyButton';
import DialogAttendanceEdit from './DialogAttendanceEdit';

interface Props {
    storeAttendance?: StoreAttendance,
}

const ToggleButton = React.forwardRef((props: any, ref: any) => (
    <span ref={ref}>
        <FaEllipsisH
            color='#7B8788'
            style={{ cursor: 'pointer' }}
            onClick={(e) => {
                e.preventDefault();
                props.onClick(e);
            }} />
    </span>
));

@inject('storeAttendance')
@observer
class _Table extends PureComponent<Props> {

    private getStatusColor = (status: string) => {
        return status === 'PRESENT' ? '#0A79DF' : '#E83350';
    }
    private _onEditClick = (item: AttendanceBasicInfo) => {
        if (this.props.storeAttendance)
            this.props.storeAttendance.editItem = item;
        this.props.storeAttendance?.setShowEditDialog(true);
    }

    private _getTableHeading = () => (
        <thead>
            <tr>
                <th>#</th>
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Section</th>
                <th>Date</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Address</th>
            </tr>
        </thead>
    );
    private _getTableRow = (item: AttendanceBasicInfo, index: number) => {
        let color = this.getStatusColor(item.status);
        return (
            <tr
                key={item.uuid}>
                <td style={{ padding: 10 }}>{index + 1}</td>
                <td style={{ color: '#2F363F' }}>{item.id}</td>
                <td style={{ color: '#2F363F' }}>{item.fullName}</td>
                <td style={{ color: '#2F363F' }}>{item.class}</td>
                <td style={{ color: '#2F363F' }}>{item.section}</td>
                <td style={{ color: '#2F363F' }}>{item.date}</td>
                <td style={{ color: '#2F363F' }}>{item.phone}</td>
                <td><span style={{ color }}>{item.status}</span></td>
                <td style={{ color: '#30336B' }}>{item.address}</td>
                <td
                    onClick={() => {
                        this._onEditClick(item);
                    }}
                    style={{ cursor: 'pointer', }}>
                    <FaEdit color='#F3B431' title='change status' />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <Table
                id='id-attendance-table'
                bordered striped
                hover size='sm'
                responsive variant='light'>
                {this._getTableHeading()}
                <tbody>
                    {this.props.storeAttendance?.attendanceList.map(this._getTableRow)}
                </tbody>
            </Table>
        );
    }
}

@inject('storeAttendance')
@observer
export default class AttendanceTable extends PureComponent<Props> {

    private _tableRef = React.createRef<_Table>();


    constructor(props: Props) {
        super(props);
    }
    private _loadMore = () => {
        this.props.storeAttendance?.loadMore();
    }

    private _onOptionSelect = (eventKey: string | null, event: any) => {
        if (eventKey === '1') {
            /*let table = document.getElementById('id-attendance-table')?.innerHTML;
            let win = window.open('','','height=500,width=700');
            win?.document.write(`<html> <body> ${table} </body></html>`);
            win?.close();
            win?.print();*/
            //window.print();
        }
    }

    render() {
        return (
            <MyCard style={{ marginBottom: 8 }} shadow={false}>
                <Card.Header>
                    <div
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%' }}>
                        Attendance List (Student)
                        <React.Fragment>
                            <Dropdown>
                                <Dropdown.Toggle
                                    id="dropdown-custom-components"
                                    as={ToggleButton} />
                                <Dropdown.Menu className='shadow-sm'>
                                    <Dropdown.Item eventKey='1'>
                                        <ReactToPrint
                                            trigger={() => {
                                                return (
                                                    <span>
                                                        <FaFilePdf color='#3498DB' style={{ marginRight: 15 }} />
                                                        <span style={{ color: '#333945' }}>export pdf</span>
                                                    </span>
                                                );
                                            }}
                                            content={() => this._tableRef.current} />
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey='2'>
                                        <FaFileExcel color='#3498DB' style={{ marginRight: 15 }} />
                                        <span style={{ color: '#333945' }}>export excel</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey='3'>
                                        <FaFileUpload color='#3498DB' style={{ marginRight: 15 }} />
                                        <span style={{ color: '#333945' }}>bulk upload</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </React.Fragment>
                    </div>
                </Card.Header>
                <_Table ref={this._tableRef} />
                <Card.Footer>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <MyButton
                            style={{ marginRight: 8 }}
                            disabled={this.props.storeAttendance?.fetchingList}
                            label='Prev'
                            size='sm'/>
                        <MyButton
                            loading={this.props.storeAttendance?.fetchingList}
                            size='sm' variant='primary'
                            label='Next'
                            onClick={this._loadMore}/>
                    </div>
                </Card.Footer>
                <DialogAttendanceEdit/>
            </MyCard>
        );
    }

}
import React, { Component, CSSProperties } from 'react';
import { Table, IconButton, Icon, Whisper, Tooltip, Avatar } from 'rsuite';
import { notificationHelper } from '../../../utils/NotificationHelper';
import { observer } from 'mobx-react';
import { storeTeacher, TeacherListType } from '../../../mobx/store/teacher/store.teacher';

const getStatusColor = (status: string) => {
    switch (status) {
        case 'ACTIVE':
            return '#019031';
        case 'INACTIVE':
            return '#E1DA00';
        default:
            return '#E71C23';
    }
}

const headerCellStyle: CSSProperties = {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15,
}
const flexCellStyle: CSSProperties = {
    width: '100%', height: '100%',
    display: 'flex', flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center'
}
const cellStyle: CSSProperties = {
    color: '#000',
    cursor: 'pointer'
}

interface Props {
    store: typeof storeTeacher
}

@observer
export default class TeacherList extends Component<Props, {}> {

    private _infoClicked = () => {
        notificationHelper.showInfo('Info button clicked');
    }

    private _editClicked = () => {
        notificationHelper.showInfo('Edit button clicked');
    }

    private _notifyClicked = () => {
        notificationHelper.showInfo('Notification button clicked');
    }

    componentDidMount = () => {
        this.props.store.fetchList();
    }

    render() {
        return (
            <Table
                data={this.props.store.teacherList}
                height={700}
                hover={true}
                loading={this.props.store.listFetching}
                bordered cellBordered>
                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Id</Table.HeaderCell>
                    <Table.Cell className="table-cell" dataKey='teacherId'>
                        {(rowData: TeacherListType) => (
                            <div style={{ ...flexCellStyle }}>
                                <Avatar style={{ marginRight: 10 }} src={rowData.avatar} alt='photo' circle size='sm' />
                                <h6 style={{ fontWeight:400, color: 'red' }}>{rowData.teacherId}</h6>
                            </div>
                        )}
                    </Table.Cell>
                </Table.Column>

                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Name</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='name' />
                </Table.Column>

                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Class</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='class' />
                </Table.Column>

                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Section</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='section' />
                </Table.Column>

                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Joining Date</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='joiningDate' />
                </Table.Column>

                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Status</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='status'>
                        {(rowData: TeacherListType) => (
                            <div style={{ ...flexCellStyle }}>
                                <h6 style={{ fontWeight:400, color: getStatusColor(rowData.status) }}>{rowData.status}</h6>
                            </div>
                        )}
                    </Table.Cell>
                </Table.Column>

                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Action</Table.HeaderCell>
                    <Table.Cell className="table-cell">
                        {(rowData: TeacherListType) => (
                            <div style={flexCellStyle}>
                                <Whisper placement='top' trigger='hover' speaker={<Tooltip>show full details</Tooltip>}>
                                    <IconButton style={{ marginRight: 12 }} size='sm' color='blue' icon={<Icon icon='user-info' />} onClick={this._infoClicked} />
                                </Whisper>
                                <Whisper placement='top' trigger='hover' speaker={<Tooltip>edit details</Tooltip>}>
                                    <IconButton style={{ marginRight: 12 }} size='sm' color='yellow' icon={<Icon icon='edit2' />} onClick={this._editClicked} />
                                </Whisper>
                                <Whisper placement='top' trigger='hover' speaker={<Tooltip>send notification</Tooltip>}>
                                    <IconButton size='sm' color='violet' icon={<Icon icon='bell-o' />} onClick={this._notifyClicked} />
                                </Whisper>
                            </div>
                        )}
                    </Table.Cell>
                </Table.Column>
            </Table>
        )
    }
}
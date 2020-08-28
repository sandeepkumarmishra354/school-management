import React, { Component, CSSProperties } from 'react';
import { Table, IconButton, Icon, Whisper, Tooltip, Avatar } from 'rsuite';
import { notificationHelper } from '../../../utils/NotificationHelper';
import { observer } from 'mobx-react';
import { storeFee, FeeListType } from '../../../mobx/store/fee/store.fee';

const getStatusColor = (status: string) => {
    switch (status) {
        case 'PAID':
            return '#45CE30';
        case 'PARTIAL':
            return '#F3B431';
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
    fontWeight: 'bold'
}

interface Props {
    store: typeof storeFee
}

@observer
export default class FeeList extends Component<Props, {}> {

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
                data={this.props.store.feeList}
                height={700}
                hover={true}
                loading={this.props.store.listFetching}
                bordered cellBordered>

                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Name</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='fullName' />
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
                    <Table.HeaderCell style={headerCellStyle}>Month</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='month' />
                </Table.Column>
                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Message</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='message' />
                </Table.Column>
                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Due Amount</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='dueAmount' />
                </Table.Column>
                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Paid Amount</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='paidAmount' />
                </Table.Column>

                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Status</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='status'>
                        {(rowData: FeeListType) => (
                            <div style={{ ...flexCellStyle }}>
                                <h6 style={{ fontWeight: 'bold', color: getStatusColor(rowData.status) }}>{rowData.status}</h6>
                            </div>
                        )}
                    </Table.Cell>
                </Table.Column>

                {/*<Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>ACTION</Table.HeaderCell>
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
                </Table.Column>*/}
            </Table>
        )
    }
}
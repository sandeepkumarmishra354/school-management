import React, { Component, CSSProperties } from 'react';
import { Table, IconButton, Icon, Whisper, Tooltip, Avatar } from 'rsuite';
import { notificationHelper } from '../../../utils/NotificationHelper';
import { observer } from 'mobx-react';
import { storeFee, FeeListType } from '../../../mobx/store/fee/store.fee';

const getStatusColor = (status: string) => {
    switch (status) {
        case 'PAID':
            return '#019031';
        case 'PARTIAL':
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
    store: typeof storeFee
}

@observer
export default class FeeList extends Component<Props, {}> {

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
                                <h6 style={{fontWeight:400, color: getStatusColor(rowData.status) }}>{rowData.status}</h6>
                            </div>
                        )}
                    </Table.Cell>
                </Table.Column>
            </Table>
        )
    }
}
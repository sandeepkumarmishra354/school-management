import React, { Component, CSSProperties } from 'react';
import { Table } from 'rsuite';
import './styles/attendence.css';
import { storeAttendenceTable, AttendenceData } from '../../../mobx/store/store.attendence.table';
import { observer } from 'mobx-react';

interface Props {
    tableStore: typeof storeAttendenceTable
}

const headerCellStyle: CSSProperties = {
    color: 'blue',
    fontWeight: 'bold',
}

@observer
export default class AttendenceTable extends Component<Props, {}> {

    render() {
        return (
            <div style={{ width: '100%' }}>
                <Table
                className="attendence-table"
                bordered cellBordered
                data={this.props.tableStore.tableDate} autoHeight
                    hover={true} loading={this.props.tableStore.isBusy}>
                    <Table.Column flexGrow={1} align='center'>
                        <Table.HeaderCell style={headerCellStyle}>ID</Table.HeaderCell>
                        <Table.Cell className="table-cell" dataKey='id' />
                    </Table.Column>

                    <Table.Column flexGrow={1} align='center'>
                        <Table.HeaderCell style={headerCellStyle}>NAME</Table.HeaderCell>
                        <Table.Cell className="table-cell" dataKey='name' />
                    </Table.Column>

                    <Table.Column flexGrow={1} align='center'>
                        <Table.HeaderCell style={headerCellStyle}>CLASS</Table.HeaderCell>
                        <Table.Cell className="table-cell" dataKey='class' />
                    </Table.Column>

                    <Table.Column flexGrow={1} align='center'>
                        <Table.HeaderCell style={headerCellStyle}>SECTION</Table.HeaderCell>
                        <Table.Cell className="table-cell" dataKey='section' />
                    </Table.Column>

                    <Table.Column flexGrow={1} align='center'>
                        <Table.HeaderCell style={headerCellStyle}>STATUS</Table.HeaderCell>
                        <Table.Cell className="table-cell" dataKey='status'>
                            {(rowData:AttendenceData) => (
                                <h6
                                    style={{ fontWeight: 250, fontSize: 15, color: rowData.status === 'PRESENT' ? '#019031' : '#E71C23'}}
                                >{rowData.status}</h6>
                            )}
                        </Table.Cell>
                    </Table.Column>
                </Table>
            </div>
        )
    }
}
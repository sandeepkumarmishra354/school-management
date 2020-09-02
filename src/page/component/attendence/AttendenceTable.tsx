import React, { Component, CSSProperties } from 'react';
import { Table } from 'rsuite';
import { AttendenceData } from '../../../mobx/store/attendence/store.attendence';
import { observer } from 'mobx-react';
import { attendenceStore } from '../../../mobx/store/attendence/store.attendence';

interface Props {
    attendenceStore: typeof attendenceStore
}

const headerCellStyle: CSSProperties = {
    color: 'blue',
    fontWeight: 'bold',
    fontSize:15,
}
const cellStyle: CSSProperties = {
    color: '#000',
    cursor: 'pointer'
}

@observer
export default class AttendenceTable extends Component<Props, {}> {

    constructor(props:Props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.attendenceStore.fetch();
    }

    render() {
        let store = this.props.attendenceStore;
        return (
            <Table
                bordered cellBordered
                data={store.attendenceList}
                height={700}
                hover={true} loading={store.fetching}>
                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>Id</Table.HeaderCell>
                    <Table.Cell style={{ ...cellStyle, color: 'red' }} className="table-cell" dataKey='id' />
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
                    <Table.HeaderCell style={headerCellStyle}>Status</Table.HeaderCell>
                    <Table.Cell className="table-cell" dataKey='status'>
                        {(rowData: AttendenceData) => (
                            <h6
                                style={{ fontWeight: 400, color: rowData.status === 'PRESENT' ? '#019031' : '#E71C23' }}
                            >{rowData.status}</h6>
                        )}
                    </Table.Cell>
                </Table.Column>
            </Table>
        )
    }
}
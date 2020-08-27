import React, { Component, CSSProperties } from 'react';
import { Table } from 'rsuite';
import { AttendenceData } from '../../../mobx/store/store.attendence.table';
import { observer } from 'mobx-react';
import { attendenceStore } from '../../../mobx/store/store.attendence';

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
    fontWeight: 'bold'
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
                    <Table.HeaderCell style={headerCellStyle}>ID</Table.HeaderCell>
                    <Table.Cell style={{ ...cellStyle, color: 'red' }} className="table-cell" dataKey='id' />
                </Table.Column>

                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>NAME</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='name' />
                </Table.Column>

                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>CLASS</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='class' />
                </Table.Column>

                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>SECTION</Table.HeaderCell>
                    <Table.Cell style={cellStyle} className="table-cell" dataKey='section' />
                </Table.Column>

                <Table.Column flexGrow={1} align='center'>
                    <Table.HeaderCell style={headerCellStyle}>STATUS</Table.HeaderCell>
                    <Table.Cell className="table-cell" dataKey='status'>
                        {(rowData: AttendenceData) => (
                            <h6
                                style={{ fontWeight: 250, fontSize: 15, color: rowData.status === 'PRESENT' ? '#019031' : '#E71C23' }}
                            >{rowData.status}</h6>
                        )}
                    </Table.Cell>
                </Table.Column>
            </Table>
        )
    }
}
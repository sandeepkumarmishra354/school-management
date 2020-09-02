import React, { Component, CSSProperties } from 'react';
import { Table, Avatar } from 'rsuite';
import { storeStudent, StudentListType } from '../../../mobx/store/student/store.student';
import { observer } from 'mobx-react';

const image = 'https://www.nme.com/wp-content/uploads/2019/11/Patman-2-696x442.png'

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
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  //justifyContent: 'center',
  alignItems: 'center'
}
const cellStyle: CSSProperties = {
  color: '#000',
  cursor: 'pointer'
  //fontWeight: 'bold'
}

interface Props {
  store: typeof storeStudent,
  onRowClicked: (rowData: StudentListType) => void
}

@observer
export default class StudentList extends Component<Props, {}> {

  componentDidMount = () => {
    this.props.store.fetchList();
  }

  render() {
    return (
      <Table
        rowKey='uid'
        onRowClick={this.props.onRowClicked}
        data={this.props.store.studentList}
        height={700}
        hover={true}
        loading={this.props.store.listFetching}
        bordered cellBordered>
        <Table.Column flexGrow={1} align='center'>
          <Table.HeaderCell style={headerCellStyle}>Id</Table.HeaderCell>
          <Table.Cell className="table-cell" dataKey='studentId'>
            {(rowData: StudentListType) => (
              <div style={{ ...flexCellStyle }}>
                <Avatar
                  style={{ marginRight: 10 }}
                  src={rowData.avatar}
                  alt='photo' circle size='xs' />
                <h6
                  style={{ fontWeight: 400, color: 'red' }}>
                  {rowData.studentId}
                </h6>
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
          <Table.HeaderCell style={headerCellStyle}>Roll no.</Table.HeaderCell>
          <Table.Cell style={cellStyle} className="table-cell" dataKey='rollNo' />
        </Table.Column>

        <Table.Column flexGrow={1} align='center'>
          <Table.HeaderCell style={headerCellStyle}>Birthday</Table.HeaderCell>
          <Table.Cell style={cellStyle} className="table-cell" dataKey='birthDate' />
        </Table.Column>

        <Table.Column flexGrow={1} align='center'>
          <Table.HeaderCell style={headerCellStyle}>Address</Table.HeaderCell>
          <Table.Cell style={cellStyle} className="table-cell" dataKey='address' />
        </Table.Column>

        <Table.Column flexGrow={1} align='center'>
          <Table.HeaderCell style={headerCellStyle}>Status</Table.HeaderCell>
          <Table.Cell style={cellStyle} className="table-cell" dataKey='status'>
            {(rowData: StudentListType) => (
              <div style={{ ...flexCellStyle, justifyContent: 'center' }}>
                <h6
                  style={{ fontWeight: 400, color: getStatusColor(rowData.status) }}>
                  {rowData.status}
                </h6>
              </div>
            )}
          </Table.Cell>
        </Table.Column>
      </Table>
    )
  }
}
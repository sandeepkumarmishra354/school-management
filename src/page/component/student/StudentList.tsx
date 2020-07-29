import React, { Component, CSSProperties } from 'react';
import { Table, IconButton, Icon, Whisper, Tooltip, Avatar, Input, InputGroup, Divider } from 'rsuite';
import { notificationHelper } from '../../../utils/NotificationHelper';
import './styles/students.css';

const image = 'https://www.nme.com/wp-content/uploads/2019/11/Patman-2-696x442.png'

const headerCellStyle: CSSProperties = {
  color: 'blue',
  fontWeight: 'bold',
}
const flexCellStyle: CSSProperties = {
  width: '100%', height: '100%',
  display: 'flex', flexDirection: 'row',
  justifyContent: 'center', alignItems: 'center'
}

const listData = [
  { id: '12345', name: 'Sandeep Mishra', class: '12', section: 'B', photo: image },
  { id: '35434', name: 'Sachin Mishra', class: '12', section: 'A', photo: image },
  { id: 'AS23R', name: 'Nitin Mishra', class: '10', section: 'B', photo: image },
  { id: 'ZX56U', name: 'Vipin Mishra', class: '11', section: 'C', photo: image },
  { id: '1287H', name: 'Niraj Mishra', class: '6', section: 'D', photo: image },
  { id: 'DF45I', name: 'Sudhir Mishra', class: '9', section: 'A', photo: image },
  { id: 'AS46G', name: 'Govind Mishra', class: '11', section: 'C', photo: image },
  { id: 'AKHT7', name: 'Manoj Mishra', class: '10', section: 'D', photo: image },
  { id: 'FML8P', name: 'Gopal Mishra', class: '8', section: 'B', photo: image },
  { id: 'BG45L', name: 'Adarsh Mishra', class: '8', section: 'E', photo: image },
  { id: 'XZ126', name: 'durgesh Mishra', class: '10', section: 'G', photo: image },
  { id: '975GH', name: 'Yougesh Mishra', class: '11', section: 'B', photo: image },
  { id: '905KM', name: 'Abhishek Mishra', class: '9', section: 'D', photo: image },
];

export default class StudentList extends Component {

  private _infoClicked = () => {
    notificationHelper.showInfo('Info button clicked');
  }

  private _editClicked = () => {
    notificationHelper.showInfo('Edit button clicked');
  }

  private _notifyClicked = () => {
    notificationHelper.showInfo('Notification button clicked');
  }

  render() {
    return (
      <div className="student-table" style={{ width: '100%', marginTop: 25 }}>
        <InputGroup className="search-grp" style={{marginBottom: 20,minHeight: 40,maxWidth:300}}>
          <InputGroup.Addon>
            <Icon icon="search" />
          </InputGroup.Addon>
          <Input placeholder="search..." />
          <InputGroup.Addon>
            <IconButton size='xs' icon={<Icon icon="close" />}/>
          </InputGroup.Addon>
        </InputGroup>
        <Table
        cellBordered bordered
          data={listData} autoHeight
          hover={true} loading={false}>
          <Table.Column flexGrow={1} align='center'>
            <Table.HeaderCell style={headerCellStyle}>ID</Table.HeaderCell>
            <Table.Cell className="table-cell" dataKey='id'>
              {(rowData: any) => (
                <div style={{ ...flexCellStyle }}>
                  <Avatar style={{ marginRight: 10 }} src={rowData.photo} alt='photo' circle size='sm' />
                  <h6 style={{ fontWeight: 300, fontSize: 15 }}>{rowData.id}</h6>
                </div>
              )}
            </Table.Cell>
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
            <Table.HeaderCell style={headerCellStyle}>ACTION</Table.HeaderCell>
            <Table.Cell className="table-cell">
              {(rowData: any) => (
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
      </div>
    )
  }
}
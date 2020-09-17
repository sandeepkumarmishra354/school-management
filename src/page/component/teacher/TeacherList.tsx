import React, { Component, CSSProperties } from 'react';
import { Table, Panel, Whisper, IconButton, Popover, Dropdown, Icon } from 'rsuite';
import { metaDataStore } from '../../../mobx/store/store.meta';
import ListHeader from '../common/ListHeader';
import { WhisperInstance } from 'rsuite/lib/Whisper';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import TeacherFilter from './TeacherFilter';
import { storeTeacher, TeacherListType } from '../../../mobx/store/teacher/store.teacher';
import { observer } from 'mobx-react';

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
    color: '#000',
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
    color: '#535C68',
    cursor: 'pointer'
    //fontWeight: 'bold'
}

interface Props extends RouteComponentProps {
    store: typeof storeTeacher,
    onRowClicked: (rowData: TeacherListType) => void
}

const MenuOptions = (props: any) => {
    let { onSelect, ...rest } = props;
    return (
        <Popover {...rest} full>
            <Dropdown.Menu onSelect={onSelect}>
                <Dropdown.Item eventKey={1} icon={<Icon icon='file-upload' />}>
                    Upload bulk student
                    </Dropdown.Item>
                <Dropdown.Item eventKey={2} icon={<Icon icon='file-excel-o' />}>
                    Import csv
                    </Dropdown.Item>
                <Dropdown.Item eventKey={3} icon={<Icon icon='file-pdf-o' />}>
                    Import pdf
                    </Dropdown.Item>
                <Dropdown.Item eventKey={4} icon={<Icon icon='trash2' />}>
                    Delete record(s)
                    </Dropdown.Item>
            </Dropdown.Menu>
        </Popover>
    );
}

@observer
class TeacherList extends Component<Props, {}> {

    private menuOptionRef = React.createRef<WhisperInstance>();

    componentDidMount = () => {
        this.props.store.fetchList();
    }

    private onOptionSelect = (event: number) => {
        this.menuOptionRef.current?.close();
    }

    render() {
        return (
            <Panel bodyFill shaded style={{ maxHeight: 750, margin: 35 }}>
                <ListHeader
                    heading="Teacher's List"
                    onRefresh={() => { }}>
                    <Whisper
                        placement='auto'
                        trigger='click'
                        triggerRef={this.menuOptionRef}
                        speaker={<MenuOptions onSelect={this.onOptionSelect} />}>
                        <IconButton
                            style={{ backgroundColor: 'transparent' }}
                            icon={<Icon icon='ellipsis-h' style={{ color: '#fff' }} />} />
                    </Whisper>
                </ListHeader>
                <TeacherFilter
                storeTeacher={storeTeacher}
                storeMeta={metaDataStore} />
                <Table
                    rowKey='uid'
                    onRowClick={(row: TeacherListType) => {
                        let url = `${this.props.match.url}/profile/${row.uid}`;
                        this.props.history.push(url);
                    }}
                    data={this.props.store.teacherList}
                    height={750}
                    hover={true}
                    loading={this.props.store.listFetching}
                    bordered cellBordered>
                    <Table.Column flexGrow={1} align='center'>
                        <Table.HeaderCell style={headerCellStyle}>Id</Table.HeaderCell>
                        <Table.Cell style={{ cursor: 'pointer', color: 'red' }} className="table-cell" dataKey='teacherId' />
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
                        <Table.HeaderCell style={headerCellStyle}>Address</Table.HeaderCell>
                        <Table.Cell style={cellStyle} className="table-cell" dataKey='address' />
                    </Table.Column>

                    <Table.Column flexGrow={1} align='center'>
                        <Table.HeaderCell style={headerCellStyle}>Status</Table.HeaderCell>
                        <Table.Cell style={cellStyle} className="table-cell" dataKey='status'>
                            {(rowData: TeacherListType) => (
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
            </Panel>
        )
    }
}

export default withRouter(TeacherList);
import React, { Component, CSSProperties } from 'react';
import { Table, IconButton, Icon, Whisper, Panel, Popover, Dropdown } from 'rsuite';
import { observer } from 'mobx-react';
import { storeFee, FeeListType } from '../../../mobx/store/fee/store.fee';
import ListHeader from '../common/ListHeader';
import FeeFilter from './FeeFilter';
import { WhisperInstance } from 'rsuite/lib/Whisper/Whisper';
import { metaDataStore } from '../../../mobx/store/store.meta';

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

const MenuOptions = (props: any) => {
    let { onSelect, ...rest } = props;
    return (
        <Popover {...rest} full>
            <Dropdown.Menu onSelect={onSelect}>
                <Dropdown.Item eventKey={1} icon={<Icon icon='file-upload' />}>
                    Upload bulk fee entry
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

const headerCellStyle: CSSProperties = {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
}
const flexCellStyle: CSSProperties = {
    width: '100%', height: '100%',
    display: 'flex', flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center'
}
const cellStyle: CSSProperties = {
    color: '#535C68',
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

    private menuOptionRef = React.createRef<WhisperInstance>();

    private onOptionSelect = (event: number) => {
        this.menuOptionRef.current?.close();
    }

    private onCreate = () => {
        storeFee.showCreateModal(true);
    }

    private onRefresh = () => {
        //
    }

    render() {
        return (
            <Panel shaded bodyFill style={{ maxHeight: 750, margin: 35 }}>
                <ListHeader
                    heading="Fee Management"
                    onCreate={this.onCreate}
                    onRefresh={this.onRefresh}>
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
                <FeeFilter storeFee={storeFee} storeMeta={metaDataStore} />
                <Table
                    data={this.props.store.feeList}
                    height={750}
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
                                    <h6 style={{ fontWeight: 400, color: getStatusColor(rowData.status) }}>{rowData.status}</h6>
                                </div>
                            )}
                        </Table.Cell>
                    </Table.Column>
                </Table>
            </Panel>
        )
    }
}
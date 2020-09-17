import React, { Component } from 'react'
import { Panel, Whisper, IconButton, Popover, Dropdown, Icon } from 'rsuite';
import ListHeader from '../common/ListHeader';
import AttendenceFilter from './AttendanceFilter';
import AttendenceTable from './AttendanceTable';
import { attendenceStore } from '../../../mobx/store/attendence/store.attendence';
import { metaDataStore } from '../../../mobx/store/store.meta';

export default class AttendanceList extends Component {

    private onRefresh = () => {
        //
    }

    private MenuOptions = (props: any) => {
        let { onSelect, ...rest } = props;
        return (
            <Popover {...rest} full>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        Export PDF
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Export CSV
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Export HTML
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Export JSON
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Popover>
        );
    }

    render() {
        return (
            <Panel bodyFill shaded style={{ maxHeight: 750, margin: 35 }}>
                <ListHeader
                    heading="Attendence List"
                    onRefresh={this.onRefresh}>
                    <Whisper
                        placement='auto'
                        trigger='click'
                        speaker={<this.MenuOptions />}>
                        <IconButton
                            style={{ backgroundColor: 'transparent' }}
                            icon={<Icon icon='ellipsis-h' style={{ color: '#fff' }} />} />
                    </Whisper>
                </ListHeader>
                <AttendenceFilter attendenceStore={attendenceStore} metaStore={metaDataStore} />
                <AttendenceTable attendenceStore={attendenceStore} />
            </Panel>
        );
    }

}
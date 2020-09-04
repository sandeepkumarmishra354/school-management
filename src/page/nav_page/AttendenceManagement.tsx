import React, { Component } from 'react'
import AttendenceFilter from '../component/attendence/AttendenceFilter'
import AttendenceTable from '../component/attendence/AttendenceTable'
import { attendenceStore } from '../../mobx/store/attendence/store.attendence'
import { metaDataStore } from '../../mobx/store/store.meta'
import { Panel, IconButton,Icon, Popover, Dropdown, Whisper } from 'rsuite'
import ListHeader from '../component/common/ListHeader'

export default class AttendenceManagement extends Component {

    private onRefresh = () => {
        //
    }

    private MenuOptions = (props:any) => {
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
            <Panel shaded bodyFill style={{ maxHeight: 700 }}>
                <ListHeader
                    heading="Attendence List"
                    onRefresh={this.onRefresh}>
                        <Whisper
                        placement='auto'
                        trigger='click'
                        speaker={<this.MenuOptions/>}>
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
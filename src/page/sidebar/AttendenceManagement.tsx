import React, { Component } from 'react'
import AttendenceFilter from '../component/attendence/AttendenceFilter'
import AttendenceTable from '../component/attendence/AttendenceTable'
import { attendenceStore } from '../../mobx/store/store.attendence'
import { metaDataStore } from '../../mobx/store/store.meta'
import { Panel } from 'rsuite'
import ListHeader from '../component/common/ListHeader'

export default class AttendenceManagement extends Component {

    private onRefresh = () => {
        //
    }

    render() {
        return (
            <Panel shaded bodyFill style={{ maxHeight: 700 }}>
                <ListHeader
                    heading="Attendence List"
                    onRefresh={this.onRefresh} />
                <AttendenceFilter attendenceStore={attendenceStore} metaStore={metaDataStore} />
                <AttendenceTable attendenceStore={attendenceStore} />
            </Panel>
        );
    }
}
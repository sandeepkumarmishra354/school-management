import React, { Component } from 'react'
import { Divider } from 'rsuite'
import AttendenceFilter from '../component/attendence/AttendenceFilter'
import AttendenceTable from '../component/attendence/AttendenceTable'
import { storeAttendenceTable } from '../../mobx/store/store.attendence.table'
import { storeClassSection } from '../../mobx/store/store.class_sec'

export default class AttendenceManagement extends Component {

    render() {
        return (
            <div style={{ width: '100%' }}>
                <h4 style={{marginLeft:25}}>Attendence management</h4>
                <Divider />
                <AttendenceFilter storeClassSection={storeClassSection}/>
                <AttendenceTable tableStore={storeAttendenceTable}/>
            </div>
        )
    }
}
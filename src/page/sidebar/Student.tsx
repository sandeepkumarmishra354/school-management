import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Divider } from 'rsuite';
import StudentFilter from '../component/student/StudentFilter';
import StudentList from '../component/student/StudentList';
import { storeClassSection } from '../../mobx/store/store.class_sec';
@observer
export default class Student extends Component {
    render() {
        return (
            <div style={{ width: '100%' }}>
                <h4 style={{ marginLeft: 25 }}>Student Management</h4>
                <Divider />
                <StudentFilter storeClassSection={storeClassSection} />
                <StudentList />
            </div>
        )
    }
}
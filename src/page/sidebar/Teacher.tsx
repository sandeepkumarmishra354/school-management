import React, { Component } from 'react'
import { Panel } from 'rsuite'
import ListHeader from '../component/common/ListHeader'
import TeacherFilter from '../component/teacher/TeacherFilter'
import { metaDataStore } from '../../mobx/store/store.meta'
import TeacherList from '../component/teacher/TeacherList'
import { storeTeacher } from '../../mobx/store/teacher/store.teacher'

export default class Teacher extends Component {

    private onRefresh = () => {
        //
    }
    private onCreate = () => {
        //
    }

    render() {
        return (
            <Panel shaded bodyFill style={{ maxHeight: 700 }}>
                <ListHeader
                    heading="Teacher's List"
                    onCreate={this.onCreate}
                    onRefresh={this.onRefresh} />
                <TeacherFilter storeMeta={metaDataStore} storeTeacher={storeTeacher} />
                <TeacherList store={storeTeacher} />
            </Panel>
        )
    }
}
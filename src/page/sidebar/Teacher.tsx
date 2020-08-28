import React, { Component } from 'react'
import { Panel } from 'rsuite'
import ListHeader from '../component/common/ListHeader'
import TeacherFilter from '../component/teacher/TeacherFilter'
import { metaDataStore } from '../../mobx/store/store.meta'
import TeacherList from '../component/teacher/TeacherList'
import { storeTeacher } from '../../mobx/store/teacher/store.teacher'
import CreateNewTeacherModel from '../component/teacher/CreateNewTeacherModal'
import { observer } from 'mobx-react'
import { TeacherCreateModel } from '../../model/model.teacher'
import { TeacherFormModel } from '../component/form-model/create.teacher'

interface Props {
    store: typeof storeTeacher
}

@observer
export default class Teacher extends Component<Props,{}> {

    private onRefresh = () => {
        //
    }
    private onCreate = () => {
        this.props.store.showCreateModal(true);
    }
    private closeModal = () => {
        this.props.store.showCreateModal(false);
    }
    private onSubmitModal = (formData:TeacherCreateModel) => {
        this.props.store.createNewRecord(formData);
    }
    private onCancelModal = () => {
        this.props.store.showCreateModal(false);
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
                <CreateNewTeacherModel
                    isCreating={this.props.store.isCreating}
                    formModel={TeacherFormModel.createTeacher}
                    show={this.props.store.isCreateModalVisible}
                    onClose={this.closeModal}
                    onCancel={this.onCancelModal}
                    onSubmit={this.onSubmitModal} />
            </Panel>
        )
    }
}
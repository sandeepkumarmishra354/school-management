import React, { Component } from 'react';
import { Panel } from 'rsuite';
import StudentFilter from '../component/student/StudentFilter';
import StudentList from '../component/student/StudentList';
import { storeStudent } from '../../mobx/store/student/store.student';
import { metaDataStore } from '../../mobx/store/store.meta';
import ListHeader from '../component/common/ListHeader';
import CreateNewStudentModel from '../component/student/CreateNewStudentModel';
import { StudentFormModel } from '../component/form-model/create.student';
import { StudentCreateModel } from '../../model/model.student';
import { observer } from 'mobx-react';

interface Props {
    store: typeof storeStudent
}

@observer
export default class Student extends Component<Props,{}> {

    constructor(props:any) {
        super(props);
    }

    private onRefresh = () => {
        //
    }
    private onCreate = () => {
        this.props.store.showCreateModal(true);
    }
    private closeModal = () => {
        this.props.store.showCreateModal(false);
    }
    private onSubmitModal = (formData:StudentCreateModel) => {
        this.props.store.createNewRecord(formData);
    }
    private onCancelModal = () => {
        this.props.store.showCreateModal(false);
    }

    render() {
        return (
            <Panel shaded bodyFill style={{ maxHeight: 700 }}>
                <ListHeader
                    heading="Student's List"
                    onCreate={this.onCreate}
                    onRefresh={this.onRefresh} />
                <StudentFilter storeStudent={storeStudent} storeMeta={metaDataStore} />
                <StudentList store={storeStudent} />
                <CreateNewStudentModel
                isCreating={this.props.store.isCreating}
                formModel={StudentFormModel.createStudent}
                show={this.props.store.isCreateModalVisible}
                onClose={this.closeModal}
                onCancel={this.onCancelModal}
                onSubmit={this.onSubmitModal}/>
            </Panel>
        );
    }
}
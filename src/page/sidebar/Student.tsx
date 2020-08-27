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

export default class Student extends Component<{},{showModal:boolean}> {

    constructor(props:any) {
        super(props);
        this.state = {
            showModal:false
        };
    }

    private onRefresh = () => {
        //
    }
    private onCreate = () => {
        this.setState({ showModal: true });
    }
    private closeModal = () => {
        this.setState({showModal:false});
    }
    private onSubmitModal = (formData:StudentCreateModel) => {
        this.closeModal();
    }
    private onCancelModal = () => {
        this.closeModal();
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
                formModel={StudentFormModel.createStudent}
                show={this.state.showModal}
                onClose={this.closeModal}
                onCancel={this.onCancelModal}
                onSubmit={this.onSubmitModal}/>
            </Panel>
        );
    }
}
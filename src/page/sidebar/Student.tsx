import React, { Component } from 'react';
import { Panel, Icon, Popover, Dropdown, Whisper, IconButton } from 'rsuite';
import StudentFilter from '../component/student/StudentFilter';
import StudentList from '../component/student/StudentList';
import { storeStudent, StudentListType } from '../../mobx/store/student/store.student';
import { metaDataStore } from '../../mobx/store/store.meta';
import ListHeader from '../component/common/ListHeader';
import CreateNewStudentModel from '../component/student/CreateNewStudentModel';
import { StudentFormModel } from '../component/form-model/create.student';
import { StudentCreateModel } from '../../model/model.student';
import { observer } from 'mobx-react';
import StudentProfileModal from '../component/student/StudentProfileModal';
import { WhisperInstance } from 'rsuite/lib/Whisper';

interface Props {
    store: typeof storeStudent
}

const MenuOptions = (props: any) => {
    let { onSelect, ...rest } = props;
    return (
        <Popover {...rest} full>
            <Dropdown.Menu onSelect={onSelect}>
                <Dropdown.Item eventKey={1} icon={<Icon icon='file-upload' />}>
                    Upload bulk student
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

@observer
export default class Student extends Component<Props, { showProfile: boolean, data?: StudentListType }> {

    private menuOptionRef = React.createRef<WhisperInstance>();

    constructor(props: any) {
        super(props);
        this.state = { showProfile: false };
    }

    private onOptionSelect = (event: number) => {
        this.menuOptionRef.current?.close();
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
    private onSubmitModal = (formData: StudentCreateModel) => {
        this.props.store.createNewRecord(formData);
    }
    private onCancelModal = () => {
        this.props.store.showCreateModal(false);
    }
    private onRowClicked = (rowData: StudentListType) => {
        this.setState({ showProfile: true, data: rowData });
    }

    render() {
        return (
            <Panel shaded bodyFill style={{ maxHeight: 700 }}>
                <ListHeader
                    heading="Student's List"
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

                <StudentFilter storeStudent={storeStudent} storeMeta={metaDataStore} />

                <StudentList
                    store={storeStudent}
                    onRowClicked={this.onRowClicked} />

                <CreateNewStudentModel
                    isCreating={this.props.store.isCreating}
                    formModel={StudentFormModel.createStudent}
                    show={this.props.store.isCreateModalVisible}
                    onClose={this.closeModal}
                    onCancel={this.onCancelModal}
                    onSubmit={this.onSubmitModal} />

                <StudentProfileModal
                    isFetching={false}
                    onCancel={() => {
                        this.setState({ showProfile: false, data: undefined });
                    }}
                    show={this.state.showProfile} />
            </Panel>
        );
    }
}
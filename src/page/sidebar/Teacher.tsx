import React, { Component } from 'react'
import { Panel, Icon, Popover, Dropdown, IconButton } from 'rsuite'
import ListHeader from '../component/common/ListHeader'
import TeacherFilter from '../component/teacher/TeacherFilter'
import { metaDataStore } from '../../mobx/store/store.meta'
import TeacherList from '../component/teacher/TeacherList'
import { storeTeacher } from '../../mobx/store/teacher/store.teacher'
import CreateNewTeacherModel from '../component/teacher/CreateNewTeacherModal'
import { observer } from 'mobx-react'
import { TeacherCreateModel } from '../../model/model.teacher'
import { TeacherFormModel } from '../component/form-model/create.teacher'
import Whisper, { WhisperInstance } from 'rsuite/lib/Whisper'

interface Props {
    store: typeof storeTeacher
}

const MenuOptions = (props: any) => {
    let { onSelect, ...rest } = props;
    return (
        <Popover {...rest} full>
            <Dropdown.Menu onSelect={onSelect}>
                <Dropdown.Item eventKey={1} icon={<Icon icon='file-upload' />}>
                    Upload bulk teacher
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
export default class Teacher extends Component<Props, {}> {

    private menuOptionRef = React.createRef<WhisperInstance>();

    private onRefresh = () => {
        //
    }
    private onCreate = () => {
        this.props.store.showCreateModal(true);
    }
    private closeModal = () => {
        this.props.store.showCreateModal(false);
    }
    private onSubmitModal = (formData: TeacherCreateModel) => {
        this.props.store.createNewRecord(formData);
    }
    private onCancelModal = () => {
        this.props.store.showCreateModal(false);
    }

    private onOptionSelect = (event: number) => {
        this.menuOptionRef.current?.close();
    }

    render() {
        return (
            <Panel shaded bodyFill style={{ maxHeight: 700 }}>
                <ListHeader
                    heading="Teacher's List"
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
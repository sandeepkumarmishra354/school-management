import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Panel, Whisper, IconButton, Popover, Dropdown, Icon } from 'rsuite'
import ListHeader from '../component/common/ListHeader'
import FeeFilter from '../component/fee-management/FeeFilter'
import { storeFee, FeeNewEntryData } from '../../mobx/store/fee/store.fee'
import { metaDataStore } from '../../mobx/store/store.meta'
import FeeList from '../component/fee-management/FeeList'
import FeeNewEntryModal from '../component/fee-management/FeeNewEntryModal'
import { WhisperInstance } from 'rsuite/lib/Whisper'
import { FeeFormModel } from '../component/form-model/form.model.fee'
import { notificationHelper } from '../../utils/NotificationHelper'

const MenuOptions = (props: any) => {
    let { onSelect, ...rest } = props;
    return (
        <Popover {...rest} full>
            <Dropdown.Menu onSelect={onSelect}>
                <Dropdown.Item eventKey={1} icon={<Icon icon='file-upload' />}>
                    Upload bulk fee entry
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
export default class FeeCollection extends Component {

    private menuOptionRef = React.createRef<WhisperInstance>();

    private onOptionSelect = (event: number) => {
        this.menuOptionRef.current?.close();
    }

    private onCreate = () => {
        storeFee.showCreateModal(true);
    }

    private onRefresh = () => {
        //
    }

    private onModalCancelClick = () => {
        storeFee.showCreateModal(false);
    }
    private onModalSubmitClick = async (data:FeeNewEntryData) => {
        await storeFee.createNewEntry(data);
        storeFee.showCreateModal(false);
    }
    private onModalClose = () => {
        //
    }

    render() {
        return (
            <Panel shaded bodyFill style={{ maxHeight: 700 }}>
                <ListHeader
                    heading="Fee Management"
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
                <FeeFilter storeFee={storeFee} storeMeta={metaDataStore} />
                <FeeList store={storeFee} />
                <FeeNewEntryModal
                formModel={FeeFormModel.newEntry}
                store={storeFee}
                onCancelClicked={this.onModalCancelClick}
                onSubmitClicked={this.onModalSubmitClick}
                onClose={this.onModalClose}/>
            </Panel>
        )
    }
}
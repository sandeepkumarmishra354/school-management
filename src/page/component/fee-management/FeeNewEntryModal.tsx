import React, { Component } from 'react'
import { Modal, Divider, Button, Panel, InputPicker, Input, Form, FormGroup, ControlLabel, FormControl, DatePicker } from 'rsuite'
import { notificationHelper } from '../../../utils/NotificationHelper';
import { storeFee, FeeNewEntryData } from '../../../mobx/store/fee/store.fee';
import { observer } from 'mobx-react';
import { metaDataStore } from '../../../mobx/store/store.meta';
import { FormTextField } from '../common/form/common';
import { Schema } from 'schema-typed';

interface Props {
    store: typeof storeFee,
    onClose: () => void,
    formModel: Schema
    onSubmitClicked: (data: FeeNewEntryData) => void,
    onCancelClicked: () => void,
    onError?: () => void,
}
interface State {
    studentList: Array<{ name: string, value: string }>,
    fetching: boolean
}

@observer
export default class FeeNewEntryModal extends Component<Props, State> {

    private formRef: any;
    private _class = -1;
    private section = '';
    private rollNo = '';
    private classData = metaDataStore.classData.filter(value => value.value !== -1);
    private sectionData = metaDataStore.sectionData.filter(value => value.value !== 'ALL');

    constructor(props: Props) {
        super(props);
        this.state = {
            studentList: [],
            fetching: false
        }
    }

    private filterList = () => {
        if (this._class === -1) {
            notificationHelper.showError('please select class');
            return;
        }
        if (this.section === '') {
            notificationHelper.showError('please select section');
            return;
        }
        this.setState({
            ...this.state,
            fetching: true
        });
        this.props.store.getStudentList({ class: this._class, section: this.section, rollNo: this.rollNo })
            .then(data => {
                this.setState({
                    studentList: data,
                    fetching: false
                });
            })
            .catch(err => {
                this.setState({
                    studentList: [],
                    fetching: false
                });
            });
    }

    private onCreateClicked = () => {
        if (this.formRef.check())
            this.props.onSubmitClicked(this.formRef.getFormValue());
        else if (this.props.onError)
            this.props.onError();
    }

    private onExited = () => {
        this._class = -1;
        this.section = '';
        this.rollNo = '';
        this.setState({
            fetching: false,
            studentList: []
        });
    }

    private FindOption = () => {
        return (
            <Panel bordered header='Find Student(s)' style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <InputPicker
                        className="form-input"
                        style={{ flex: 1, maxWidth: 200 }}
                        labelKey="name"
                        placeholder='select class'
                        cleanable={false}
                        data={this.classData}
                        onChange={value => (this._class = value)} />
                    <InputPicker
                        className="form-input"
                        style={{ flex: 1, maxWidth: 200 }}
                        labelKey="name"
                        placeholder='select section'
                        cleanable={false}
                        data={this.sectionData}
                        onChange={value => (this.section = value)} />
                    <Input
                        className="form-input"
                        style={{ flex: 1, maxWidth: 200 }}
                        placeholder="enter roll no. (optional)"
                        onChange={value => (this.rollNo = value)} />
                    <Button
                        loading={this.state.fetching}
                        appearance='primary'
                        style={{ flex: 1, maxWidth: 200 }}
                        onClick={this.filterList}>find</Button>
                </div>
            </Panel>
        );
    }

    render() {
        return (
            <Modal
                onExited={this.onExited}
                size='lg'
                backdrop='static'
                show={this.props.store.showNewEntryModal}
                onHide={this.props.onClose}
                overflow>
                <Modal.Header closeButton={false}>
                    <Modal.Title style={{ width: '100%', textAlign: 'center' }}>
                        <span style={{ color: '#2F363F', fontWeight: 'bold', fontSize: 20 }}>Create New Entry</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <this.FindOption />
                        <Panel bordered header='Fee Entry Details'>
                            <Form fluid model={this.props.formModel}
                                ref={(ref: any) => (this.formRef = ref)}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FormGroup style={{ flex: 1 }}>
                                        <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>
                                            Select Student* &nbsp;&nbsp;&nbsp;<span style={{ color: 'blue', fontWeight: 400 }}>found {this.state.studentList.length}</span>
                                        </ControlLabel>
                                        <FormControl
                                            style={{ width: '90%' }}
                                            className="form-input"
                                            name="studentId"
                                            labelKey="name"
                                            accepter={InputPicker}
                                            placeholder='select student'
                                            cleanable={false}
                                            data={this.state.studentList} />
                                    </FormGroup>

                                    <FormGroup style={{ flex: 1 }}>
                                        <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Select Month*</ControlLabel>
                                        <FormControl
                                            style={{ width: '90%' }}
                                            className="form-input"
                                            name="month"
                                            labelKey="name"
                                            accepter={DatePicker}
                                            placeholder='select month'
                                            cleanable={false}
                                            data={this.state.studentList} />
                                    </FormGroup>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <FormTextField
                                        style={{ flex: 1, width: '90%' }}
                                        type="number"
                                        label="Due Amount*"
                                        name='dueAmount'
                                        placeholder="enter due amount" />
                                    <FormTextField
                                        style={{ flex: 1, width: '90%' }}
                                        type="number"
                                        label="Paid Amount*"
                                        name='paidAmount'
                                        placeholder="enter paid amount" />
                                </div>
                                <FormGroup style={{ width: '100%' }}>
                                    <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Message (optional)</ControlLabel>
                                    <FormControl
                                        row={5}
                                        className="form-input"
                                        name="message"
                                        placeholder='enter custom message here...'
                                        componentClass="textarea" />
                                </FormGroup>
                            </Form>
                        </Panel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Divider />
                    <Button
                        onClick={this.onCreateClicked}
                        appearance="primary"
                        disabled={this.state.fetching}
                        loading={this.props.store.isCreatingNewEntry}>
                        Create Entry
                    </Button>
                    <Button
                        onClick={this.props.onCancelClicked}
                        appearance="ghost"
                        color='red'
                        disabled={this.props.store.isCreatingNewEntry || this.state.fetching}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
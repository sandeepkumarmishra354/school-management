import React, { Component } from 'react'
import {  Button, Panel, InputPicker, Input, Form, FormGroup, ControlLabel, FormControl, DatePicker, Icon } from 'rsuite'
import { notificationHelper } from '../../../utils/NotificationHelper';
import { storeFee, } from '../../../mobx/store/fee/store.fee';
import { observer } from 'mobx-react';
import { metaDataStore } from '../../../mobx/store/store.meta';
import { FormTextField } from '../common/form/common';
import { FeeFormModel } from '../form-model/form.model.fee';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { alertHelper } from '../../../utils/Alerthelper';

interface Props extends RouteComponentProps {
    store: typeof storeFee,
}
interface State {
    studentList: Array<{ name: string, value: string }>,
    fetching: boolean
}

@observer
class CreateNewFeeEntry extends Component<Props, State> {

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
            alertHelper.showError('please select class');
            return;
        }
        if (this.section === '') {
            alertHelper.showError('please select section');
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
        if (this.formRef.check()) {
            this.props.store.createNewEntry(this.formRef.getFormValue());
        }
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
                        style={{ flex: 1, backgroundColor:'#3498FF',color:'#fff', maxWidth: 200 }}
                        onClick={this.filterList}>find</Button>
                </div>
            </Panel>
        );
    }

    render() {
        return (
            <div
            style={{margin:25}}>
                <Button
                    onClick={this.props.history.goBack}
                    style={{ backgroundColor: '#DAE0E2',marginBottom:45 }}>
                    <Icon icon='arrow-left' style={{ marginRight: 10 }} />
                    Go Back
                </Button>
                <Panel
                    bordered
                    header='Create New Fee Entry'
                    style={{backgroundColor: '#fff' }}>
                    <this.FindOption />
                    <Form style={{ marginTop: 50 }} fluid model={FeeFormModel.newEntry}
                        ref={(ref: any) => (this.formRef = ref)}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <FormGroup style={{ flex: 1 }}>
                                <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>
                                    Select Student* &nbsp;&nbsp;&nbsp;<span style={{ color: '#3498FF', fontWeight: 400 }}>found {this.state.studentList.length}</span>
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
                    <div
                        style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 25 }}>
                        <Button
                            onClick={this.onCreateClicked}
                            style={{ backgroundColor:'#3498FF',color:'#fff'}}
                            disabled={this.state.fetching}
                            loading={this.props.store.isCreatingNewEntry}>
                            CREATE FEE ENTRY
                    </Button>
                    </div>
                </Panel>
            </div>
        )
    }
}

export default withRouter(CreateNewFeeEntry);
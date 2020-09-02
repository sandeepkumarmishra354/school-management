import React, { Component } from 'react'
import { Modal, Button, Form, Divider, Panel } from 'rsuite'
import BasicInfoForm from '../common/form/BasicInfoForm';
import { FormTextField, FormHeader } from '../common/form/common';
import ContactInfoForm from '../common/form/ContactInfoForm';
import OfficialInfoForm from '../common/form/OfficialInfoForm';
import { metaDataStore } from '../../../mobx/store/store.meta';
import { Schema } from 'schema-typed';
import { StudentCreateModel } from '../../../model/model.student';
import { notificationHelper } from '../../../utils/NotificationHelper';

interface Props {
  show: boolean,
  formModel: Schema,
  isCreating: boolean,
  onClose: () => void,
  onSubmit: (formData: StudentCreateModel) => void,
  onCancel: () => void,
  onError?: () => void
}

export default class CreateNewStudentModel extends Component<Props, {}> {

  private formRef: any;

  constructor(props: Props) {
    super(props);
  }

  private onSubmit = () => {
    if (this.formRef.check())
      this.props.onSubmit(this.formRef.getFormValue());
    else if (this.props.onError)
      this.props.onError();
  }

  private onModalOpened = () => {
    notificationHelper.showInfo('opened');
  }
  private onModalClosed = () => {
    notificationHelper.showInfo('closed');
  }

  render() {
    return (
      <Modal
        size='lg'
        backdrop='static'
        show={this.props.show}
        onHide={this.props.onClose}
        overflow
        onEntered={this.onModalOpened}
        onExited={this.onModalClosed}>
        <Modal.Header closeButton={false}>
          <Modal.Title style={{ width: '100%', textAlign: 'center' }}>
            <span style={{ color: '#2F363F', fontWeight: 'bold', fontSize: 20 }}>Student Registration Form</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            fluid model={this.props.formModel}
            ref={(ref: any) => (this.formRef = ref)}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <BasicInfoForm
                style={{ flex: 1, margin: 8 }}
                religion={metaDataStore.religionData}
                gender={metaDataStore.genderData}
                category={metaDataStore.categoryData}>
              </BasicInfoForm>
              <ContactInfoForm style={{ flex: 1, margin: 8 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Panel style={{ margin: 8, flex: 1 }} bodyFill bordered>
                <FormHeader icon='shield' heading="Parent Information" />
                <div style={{ padding: 25 }}>
                  <FormTextField name='fatherName' label="Father Name*" placeholder="enter father name" />
                  <FormTextField name='motherName' label="Mother Name*" placeholder="enter mother name" />
                  <FormTextField name='parentPhone' label="Parent phone*"
                    placeholder="enter parent's phone" />
                  <FormTextField name='parentEmail' label="Parent email*"
                    placeholder="enter parent's email" />
                </div>
              </Panel>
              <OfficialInfoForm
                style={{ margin: 8, flex: 1 }}
                status={metaDataStore.statusData.filter(value => value.name !== 'ALL')}
                section={metaDataStore.sectionData.filter(value => value.name !== 'ALL')}
                class={metaDataStore.classData.filter(value => value.name !== 'ALL')} />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Divider />
          <Button
            onClick={this.onSubmit}
            appearance="primary"
            loading={this.props.isCreating}>
            Submit Record
            </Button>
          <Button
            onClick={this.props.onCancel}
            appearance="ghost"
            color='red'
            disabled={this.props.isCreating}>
            Cancel
            </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
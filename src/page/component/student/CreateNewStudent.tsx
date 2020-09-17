import React, { Component } from 'react'
import { Form, Panel, Button, Breadcrumb, Icon } from 'rsuite'
import BasicInfoForm from '../common/form/BasicInfoForm';
import { FormTextField, FormHeader } from '../common/form/common';
import ContactInfoForm from '../common/form/ContactInfoForm';
import OfficialInfoForm from '../common/form/OfficialInfoForm';
import { metaDataStore } from '../../../mobx/store/store.meta';
import { Schema } from 'schema-typed';
import { storeStudent } from '../../../mobx/store/student/store.student';
import { observer } from 'mobx-react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {
  formModel: Schema,
  store: typeof storeStudent
}

const NavLink = (props: any) => (
  <Breadcrumb.Item
    componentClass={Link} {...props}
    style={{ fontSize: 15 }} />
);

@observer
class CreateNewStudent extends Component<Props, {}> {

  private formRef:any;

  constructor(props: Props) {
    super(props);
  }

  private onSubmit = async () => {
    if (this.formRef.check()) {
      let data = this.formRef.getFormValue();
      this.props.store.createNewRecord(data);
    }
  }

  render() {
    return (
      <Panel style={{marginTop:-25}}>
        <Button
          onClick={this.props.history.goBack}
          style={{ backgroundColor: '#DAE0E2', marginBottom: 45 }}>
          <Icon icon='arrow-left' style={{ marginRight: 10 }} />
                    Go Back
                    </Button>
        <Form
          style={{ marginTop: -15 }}
          fluid model={this.props.formModel}
          ref={(ref: any) => (this.formRef = ref)}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <BasicInfoForm
              style={{ flex: 1, margin: 8, backgroundColor: '#fff' }}
              religion={metaDataStore.religionData}
              gender={metaDataStore.genderData}
              category={metaDataStore.categoryData}>
            </BasicInfoForm>
            <ContactInfoForm style={{ flex: 1, margin: 8, backgroundColor: '#fff' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Panel style={{ margin: 8, flex: 1, backgroundColor: '#fff', border: '0.5px solid #EAF0F1', borderRadius: 8 }} bodyFill>
              <FormHeader icon='shield' heading="Parent Information" />
              <div style={{ paddingLeft: 25, paddingRight: 25,paddingBottom:20 }}>
                <FormTextField name='fatherName' label="Father Name*" placeholder="enter father name" />
                <FormTextField name='motherName' label="Mother Name*" placeholder="enter mother name" />
                <FormTextField name='parentPhone' label="Parent phone*"
                  placeholder="enter parent's phone" />
                <FormTextField name='parentEmail' label="Parent email*"
                  placeholder="enter parent's email" />
              </div>
            </Panel>
            <OfficialInfoForm
              style={{ margin: 8, flex: 1, backgroundColor: '#fff' }}
              status={metaDataStore.statusData.filter(value => value.name !== 'ALL')}
              section={metaDataStore.sectionData.filter(value => value.name !== 'ALL')}
              class={metaDataStore.classData.filter(value => value.name !== 'ALL')} />
          </div>
        </Form>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
          <Button
            loading={this.props.store.isCreating}
            color='blue' style={{ minWidth: 200 }}
            onClick={this.onSubmit}>CREATE RECORD</Button>
        </div>
      </Panel>
    )
  }
}

export default withRouter(CreateNewStudent);
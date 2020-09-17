import React, { Component } from 'react'
import { Button, Form, Panel, Breadcrumb, Icon } from 'rsuite'
import BasicInfoForm from '../common/form/BasicInfoForm';
import ContactInfoForm from '../common/form/ContactInfoForm';
import OfficialInfoForm from '../common/form/OfficialInfoForm';
import { metaDataStore } from '../../../mobx/store/store.meta';
import { Schema } from 'schema-typed';
import { storeTeacher } from '../../../mobx/store/teacher/store.teacher';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {
    formModel: Schema,
    store: typeof storeTeacher
}

class CreateNewTeacher extends Component<Props> {

    private formRef: any;

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
            <Panel style={{ marginTop: -25 }}>
                <Button
                    onClick={this.props.history.goBack}
                    style={{ backgroundColor: '#DAE0E2',marginBottom:25 }}>
                    <Icon icon='arrow-left' style={{ marginRight: 10 }} />
                    Go Back
                    </Button>
                <Form
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
                    <OfficialInfoForm
                        style={{ margin: 8, backgroundColor: '#fff' }}
                        maritalStatus={metaDataStore.mariedStatusData}
                        status={metaDataStore.statusData.filter(value => value.name !== 'ALL')}
                        section={metaDataStore.sectionData.filter(value => value.name !== 'ALL')}
                        class={metaDataStore.classData.filter(value => value.name !== 'ALL')} />
                </Form>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                    <Button
                        onClick={this.onSubmit}
                        color='blue'
                        loading={this.props.store.isCreating}>
                        CREATE RECORD
            </Button>
                </div>
            </Panel>
        )
    }
}

export default withRouter(CreateNewTeacher);
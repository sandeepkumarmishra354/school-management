import React, { Component } from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { Panel, Breadcrumb, Loader, Message, Button, Icon, ButtonToolbar, ButtonGroup } from 'rsuite';
import { storeStudent } from '../../../mobx/store/student/store.student';
import { observer } from 'mobx-react';
import ProfilePhotoInfo from '../common/profile/ProfilePhotoInfo';
import ProfilePersonalInfo from '../common/profile/ProfilePersonalInfo';
import ProfileContactInfo from '../common/profile/ProfileContactInfo';
import ProfileOfficialInfo from '../common/profile/ProfileOfficialInfo';
import ProfileParentInfo from './ProfileParentInfo';
import EmailSmsSendDialog from '../common/EmailSmsSendDialog';
import AlertDeleteDialog from '../common/AlertDeleteDialog';
import ProfileDocsList from '../common/profile/ProfileDocsList';
import FileUploadDialog from '../common/FileUploadDialog';
import { storeManagement } from '../../../mobx/store/management/store.management';
import ProfileMedicalInfo from '../common/profile/ProfileMedicalInfo';

const NavLink = (props: any) => (
  <Breadcrumb.Item
    componentClass={Link} {...props}
    style={{ fontSize: 15 }} />
);

interface Props extends RouteComponentProps {
  store: typeof storeStudent
}
interface State {
  showSmsDialog: boolean,
  showDeleteDialog: boolean,
  showUploadDialog: boolean,
}

@observer
class StudentProfile extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      showSmsDialog: false,
      showDeleteDialog: false,
      showUploadDialog: false,
    };
  }

  componentDidMount = () => {
    let { params } = this.props.match as any;
    let uuid = params.uid;
    this.props.store.fetchProfile(uuid);
    this.props.store.fetchMedicalInfo(uuid);
  }

  componentWillUnmount = () => {
    //reset
    this.props.store.profileData = undefined;
    this.props.store.profileStatus = 'FETCHING';
  }

  private getLoader = () => {
    return (
      <div style={{ display: 'flex', height: 500 }}>
        <Loader size='md' vertical center content='Please wait...' />
      </div>
    );
  }

  private getError = () => {
    return (
      <div style={{ display: 'flex', height: 500, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Message
          showIcon
          type="error"
          title="Error"
          description="Something went wrong, please try again." />
      </div>
    );
  }

  private getButtonToolbar = () => (
    <ButtonToolbar>
      <ButtonGroup>
        <Button color='orange' size='sm'>
          <Icon icon='pencil' style={{ marginRight: 5 }} />
            EDIT
          </Button>
        <Button
          color='green'
          size='sm'
          onClick={() => {
            this.setState({ showUploadDialog: true });
          }}>
          <Icon icon='file-upload' style={{ marginRight: 5 }} />
            UPLOAD
          </Button>
        <Button
          color='blue' size='sm'
          onClick={() => {
            this.setState({ showSmsDialog: true });
          }}>
          <Icon icon='reply' style={{ marginRight: 5 }} />
            EMAIL / SMS
          </Button>
        <Button color='violet' size='sm'>
          <Icon icon='file-excel-o' style={{ marginRight: 5 }} />
            REPORT
          </Button>
        <Button
          color='red' size='sm'
          onClick={() => {
            this.setState({ showDeleteDialog: true });
          }}>
          <Icon icon='trash' style={{ marginRight: 5 }} />
            DELETE
          </Button>
      </ButtonGroup>
    </ButtonToolbar>
  );

  private getContent = () => {
    let status = this.props.store.profileStatus;
    if (status === 'ERROR')
      return <this.getError />;
    if (status === 'FETCHING')
      return <this.getLoader />;

    let data = this.props.store.profileData;

    if (!data)
      return <this.getError />;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', marginBottom: 15, display: 'flex', justifyContent: 'flex-end' }}>
          {this.getButtonToolbar()}
        </div>
        <ProfilePhotoInfo
          photo='https://upload.wikimedia.org/wikipedia/en/b/b9/Ootp076.jpg'
          status={data.status}
          firstName={data.name.firstName}
          lastName={data.name.lastName}
          email={data.contact.email}
          createdAt={data.createdAt}
          updatedAt={data.updatedAt} />
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <ProfilePersonalInfo
            style={{ flex: 1, marginRight: 20, }}
            adharNo={data.adharNo}
            birthday={data.birthDate}
            category={data.category}
            gender={data.gender}
            religion={data.religion} />
          <ProfileContactInfo
            style={{ flex: 1 }}
            address={data.address}
            phone={data.contact.phone} />
        </div>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <ProfileParentInfo
            style={{ flex: 1, marginRight: 20, }}
            parent={data.parent} />
          <ProfileOfficialInfo
            style={{ flex: 1 }}
            class={data.class}
            section={data.section}
            rollNo={data.rollNo}
            date={data.admissionDate} />
        </div>
        <ProfileDocsList
          style={{ width: '100%' }}
          store={storeManagement}
          userId={(this.props.match.params as any).uid}
          userType='STUDENT' />
          <ProfileMedicalInfo
          style={{width:'100%',marginBottom:50}}
          userId={(this.props.match.params as any).uid}
          userType='STUDENT'
          status={this.props.store.medicalStatus}
          data={this.props.store.medicalInfoData}/>
      </div>
    );
  }

  render() {
    return (
      <Panel style={{ marginTop: -25 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
          onClick={this.props.history.goBack}
            style={{ backgroundColor: '#DAE0E2', marginBottom: 40}}>
            <Icon icon='left' style={{marginRight:10}}/>
            Go Back
          </Button>
        </div>
        {this.getContent()}
        <EmailSmsSendDialog
          show={this.state.showSmsDialog}
          onHide={() => {
            this.setState({ showSmsDialog: false });
          }}
          onSend={(message) => { }} />
        <AlertDeleteDialog
          show={this.state.showDeleteDialog}
          onHide={() => {
            this.setState({ showDeleteDialog: false });
          }}
          onDelete={() => { }} />
        <FileUploadDialog
          show={this.state.showUploadDialog}
          userId={(this.props.match.params as any).uid}
          userType='STUDENT'
          onHide={() => {
            this.setState({ showUploadDialog: false });
          }}
          onSuccess={(doc) => {
            this.setState({ showUploadDialog: false });
          }} />
      </Panel>
    )
  }
}

export default withRouter(StudentProfile);
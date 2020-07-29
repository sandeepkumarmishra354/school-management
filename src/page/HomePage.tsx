import React, { ReactNode } from 'react';
import './styles/home_page.css';
import { Container, Sidebar, Sidenav, Icon, IconButton } from 'rsuite'
import { homeStore } from '../mobx/store/store.home';
import { observer } from 'mobx-react';
import Dashboard from './sidebar/Dashboard';
import { authStore } from '../mobx/store/store.auth';
import SideNav from './component/SideNav';
import { sidenavStore, NavOption } from '../mobx/store/store.sidenav';
import FeeCollection from './sidebar/FeeCollection';
import Help from './sidebar/Help';
import Settings from './sidebar/Settings';
import Stats from './sidebar/Stats';
import Student from './sidebar/Student';
import Teacher from './sidebar/Teacher';
import AttendenceManagement from './sidebar/AttendenceManagement';
import Guardin from './sidebar/Guardian';
import ClassManagement from './sidebar/ClassManagement';
import SaleryManagement from './sidebar/SaleryManagement';

interface Props {
    homeStore: typeof homeStore,
    navStore: typeof sidenavStore,
    authStore: typeof authStore
}

@observer
export default class HomePage extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    private _getContent = (nav: NavOption): ReactNode => {
        switch (nav) {
            case NavOption.DASHBOARD:
                return <Dashboard authStore={this.props.authStore} />
            case NavOption.FEE_COLLECTION:
                return <FeeCollection />
            case NavOption.HELP:
                return <Help />
            case NavOption.SETTING:
                return <Settings />
            case NavOption.STATS:
                return <Stats />
            case NavOption.STUDENT:
                return <Student />
            case NavOption.TEACHER:
                return <Teacher />
            case NavOption.ATTENDENCE_MANAGEMENT:
                return <AttendenceManagement />
            case NavOption.GUARDIAN:
                return <Guardin />
            case NavOption.CLASS_MANAGEMENT:
                return <ClassManagement />
            case NavOption.SALERY_MANAGEMENT:
                return <SaleryManagement />
            case NavOption.LOGOUT:
                this.props.authStore.logout();
                break;
            default:
                return <h3>something went wrong, try again</h3>
        }
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Sidebar
                        className="sidebar"
                        style={{ display: 'flex', flexDirection: 'column' }}
                        width={this.props.navStore.sideNavCurrentWidth}
                        collapsible>
                        <Sidenav.Header>
                            <div className="brand-name">
                                <h4
                                    className="brand-text">
                                    {this.props.navStore.schoolName}
                                </h4>
                                <IconButton
                                    style={{ marginLeft: 5, position: 'absolute', right: -12, marginTop: 2, boxShadow:"5px 0 5px 0 rgba(0, 0, 0, .5)"}}
                                circle size='xs'
                                icon={<Icon icon='arrow-left-line' rotate={this.props.navStore.expanded ? 0 : 180}/>}
                                onClick={this.props.navStore.toggleExpand}
                                />
                            </div>
                        </Sidenav.Header>
                        <SideNav navStore={this.props.navStore} authStore={this.props.authStore} />
                    </Sidebar>
                    <div style={{ left: this.props.navStore.sideNavCurrentWidth }} className="content-holder">
                        {this._getContent(this.props.navStore.currentNav)}
                    </div>
                </Container>
            </div>
        );
    }
}

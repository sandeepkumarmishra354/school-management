import React, { ReactNode } from 'react';
import { Container, Sidebar, Sidenav, Icon, IconButton } from 'rsuite'
import { observer } from 'mobx-react';
import Dashboard from './sidebar/Dashboard';
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
import { dashboardStore } from '../mobx/store/store.dashboard';
import AppHeader from './component/common/AppHeader';
import { storeStudent } from '../mobx/store/student/store.student';
import { storeTeacher } from '../mobx/store/teacher/store.teacher';

interface Props {
    navStore: typeof sidenavStore
}

@observer
export default class HomePage extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    private _getContent = (nav: NavOption): ReactNode => {
        switch (nav) {
            case NavOption.DASHBOARD:
                return <Dashboard dashboard={dashboardStore} />
            case NavOption.FEE_COLLECTION:
                return <FeeCollection />
            case NavOption.HELP:
                return <Help />
            case NavOption.SETTING:
                return <Settings />
            case NavOption.STATS:
                return <Stats />
            case NavOption.STUDENT:
                return <Student store={storeStudent} />
            case NavOption.TEACHER:
                return <Teacher store={storeTeacher}/>
            case NavOption.ATTENDENCE_MANAGEMENT:
                return <AttendenceManagement />
            case NavOption.GUARDIAN:
                return <Guardin />
            case NavOption.CLASS_MANAGEMENT:
                return <ClassManagement />
            case NavOption.SALERY_MANAGEMENT:
                return <SaleryManagement />
            default:
                return null;
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
                        {<Sidenav.Header>
                            <div className="brand-name">
                                <h4
                                    className="brand-text">
                                    {this.props.navStore.schoolName}
                                </h4>
                                <IconButton
                                    style={{ marginLeft: 5, position: 'absolute', right: -12, marginTop: 2, boxShadow: "5px 0 5px 0 rgba(0, 0, 0, .5)" }}
                                    circle size='xs'
                                    icon={<Icon icon='arrow-left-line' rotate={this.props.navStore.expanded ? 0 : 180} />}
                                    onClick={this.props.navStore.toggleExpand}
                                />
                            </div>
                        </Sidenav.Header>}
                        <SideNav
                            nav={sidenavStore.currentNav}
                            expand={sidenavStore.expanded}
                            setNav={sidenavStore.setCurrentNav} />
                    </Sidebar>
                    <div style={{ left: this.props.navStore.sideNavCurrentWidth }} className="content-holder-main">
                        <AppHeader
                            schoolName="Standard Academy"
                            photo="https://webcomicms.net/sites/default/files/clipart/157441/image-school-157441-6977901.jpg" />
                        <div className="content-holder">
                            {this._getContent(this.props.navStore.currentNav)}
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

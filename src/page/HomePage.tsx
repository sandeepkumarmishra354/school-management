import React from 'react';
import { Container } from 'rsuite'
import { observer } from 'mobx-react';
import { sidenavStore } from '../mobx/store/store.sidenav';
import AppHeader from './component/common/AppHeader';
import { withRouter, RouteComponentProps } from 'react-router';
import { routeHandler } from '../utils/route_handler';
import AppSidebar from './component/sidenav/AppSidebar';
import MainRoute from './component/routes/route.main';
import { storeSchoolProfile } from '../mobx/store/management/store.schoolprofile';

interface Props extends RouteComponentProps {
    navStore: typeof sidenavStore
}

@observer
class HomePage extends React.Component<Props, {}> {

    componentDidMount = () => {
        routeHandler.setHistory(this.props.history);
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <AppSidebar navStore={sidenavStore} />
                    <div style={{ left: this.props.navStore.sideNavCurrentWidth, backgroundColor: '#f8f8ff' }} className="content-holder-main">
                        <AppHeader
                            style={{ right: 0, left: this.props.navStore.sideNavCurrentWidth }}
                            store={storeSchoolProfile} />
                        <div className="content-holder">
                            <MainRoute />
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withRouter(HomePage);

import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import { RouteUrlMap } from '../../../config/sidenav_config';
import HostelDelete from './component/HostelDelete';
import HostelIssued from './component/HostelIssued';
import HostelList from './component/HostelList';
import HostelReport from './component/HostelReport';

class _RouteHostel extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.hostel["hostel-delete"]}>
                    <HostelDelete />
                </Route>
                <Route exact path={RouteUrlMap.hostel["hostel-issued"]}>
                    <HostelIssued />
                </Route>
                <Route exact path={RouteUrlMap.hostel["hostel-list"]}>
                    <HostelList />
                </Route>
                <Route exact path={RouteUrlMap.hostel["hostel-report"]}>
                    <HostelReport />
                </Route>
            </Switch>
        );
    }

}

export const RouteHostel = withRouter(_RouteHostel);
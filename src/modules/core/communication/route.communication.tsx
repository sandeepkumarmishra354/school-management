import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import CommunicationStudent from './component/CommunicationStudent';
import CommunicationTeacher from './component/CommunicationTeacher';
import CommunicationGuardian from './component/CommunicationGuardian';
import { RouteUrlMap } from '../../../config/sidenav_config';

class _RouteCommunication extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.communication["communication-student"]}>
                    <CommunicationStudent />
                </Route>
                <Route exact path={RouteUrlMap.communication["communication-teacher"]}>
                    <CommunicationTeacher />
                </Route>
                <Route exact path={RouteUrlMap.communication["communication-guardian"]}>
                    <CommunicationGuardian />
                </Route>
            </Switch>
        );
    }

}

export const RouteCommunication = withRouter(_RouteCommunication);
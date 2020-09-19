import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import CommunicationStudent from './component/CommunicationStudent';
import CommunicationTeacher from './component/CommunicationTeacher';
import CommunicationGuardian from './component/CommunicationGuardian';

class _RouteCommunication extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/student`}>
                    <CommunicationStudent />
                </Route>
                <Route exact path={`${path}/teacher`}>
                    <CommunicationTeacher />
                </Route>
                <Route exact path={`${path}/guardian`}>
                    <CommunicationGuardian />
                </Route>
            </Switch>
        );
    }

}

export const RouteCommunication = withRouter(_RouteCommunication);
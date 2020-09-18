import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import CommunicationStudent from './component/CommunicationStudent';
import CommunicationTeacher from './component/CommunicationTeacher';
import CommunicationGuardian from './component/CommunicationGuardian';

class _RouteCommunication extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/student'>
                    <CommunicationStudent />
                </Route>
                <Route path='/teacher'>
                    <CommunicationTeacher />
                </Route>
                <Route path='/guardian'>
                    <CommunicationGuardian />
                </Route>
            </Router>
        );
    }

}

export const RouteCommunication = withRouter(_RouteCommunication);
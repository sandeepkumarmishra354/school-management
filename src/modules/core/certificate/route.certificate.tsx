import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import CertificateStudent from './component/CertificateStudent';
import CertificateTeacher from './component/CertificateTeacher';
import IdCardStudent from './component/IdCardStudent';
import IdCardTeacher from './component/IdCardTeacher';

class _RouteCertificate extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/student`}>
                    <CertificateStudent />
                </Route>
                <Route exact path={`${path}/teacher`}>
                    <CertificateTeacher />
                </Route>
                <Route exact path={`${path}/id-student`}>
                    <IdCardStudent />
                </Route>
                <Route exact path={`${path}/id-teacher`}>
                    <IdCardTeacher />
                </Route>
            </Switch>
        );
    }

}

export const RouteCertificate = withRouter(_RouteCertificate);
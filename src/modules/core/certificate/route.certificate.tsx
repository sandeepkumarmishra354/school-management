import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import CertificateStudent from './component/CertificateStudent';
import CertificateTeacher from './component/CertificateTeacher';
import IdCardStudent from './component/IdCardStudent';
import IdCardTeacher from './component/IdCardTeacher';

class _RouteCertificate extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/student'>
                    <CertificateStudent />
                </Route>
                <Route path='/teacher'>
                    <CertificateTeacher />
                </Route>
                <Route path='/id-student'>
                    <IdCardStudent />
                </Route>
                <Route path='/id-teacher'>
                    <IdCardTeacher />
                </Route>
            </Router>
        );
    }

}

export const RouteCertificate = withRouter(_RouteCertificate);
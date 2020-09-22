import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import { RouteUrlMap } from '../../../config/sidenav_config';
import CertificateStudent from './component/CertificateStudent';
import CertificateTeacher from './component/CertificateTeacher';
import IdCardStudent from './component/IdCardStudent';
import IdCardTeacher from './component/IdCardTeacher';

class _RouteCertificate extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.certificate_id["certificate-student"]}>
                    <CertificateStudent />
                </Route>
                <Route exact path={RouteUrlMap.certificate_id["certificate-teacher"]}>
                    <CertificateTeacher />
                </Route>
                <Route exact path={RouteUrlMap.certificate_id["certificate-id-student"]}>
                    <IdCardStudent />
                </Route>
                <Route exact path={RouteUrlMap.certificate_id["certificate-id-teacher"]}>
                    <IdCardTeacher />
                </Route>
            </Switch>
        );
    }

}

export const RouteCertificate = withRouter(_RouteCertificate);
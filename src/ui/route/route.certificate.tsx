import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import MySuspense from '../components/MySuspense';

const PageCertificate = React.lazy(() => import('../page/certificate/PageIssueCertificate'));

export default class RouteCertificate extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/'>
                    <MySuspense>
                        <PageCertificate />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}
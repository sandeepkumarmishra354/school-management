import { Provider } from 'mobx-react';
import React, { PureComponent } from 'react'
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { AppAuthStore } from '../../mobx/store.app.auth';
import MySuspense from '../components/MySuspense';

const PageLogin = React.lazy(() => import('../page/PageLogin'));
const PageRegister = React.lazy(() => import('../page/PageRegister'));
const Page404 = React.lazy(() => import('../page/Page404'));

class _SchoolAuthRoute extends PureComponent<RouteComponentProps> {

    render() {
        let {path} = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/login`}>
                    <MySuspense>
                        <PageLogin />
                    </MySuspense>
                </Route>
                <Route exact path={`${path}/register`}>
                    <MySuspense>
                        <PageRegister />
                    </MySuspense>
                </Route>
                <Route>
                    <MySuspense>
                        <Page404 />
                    </MySuspense>
                </Route>
            </Switch>
        );
    }

}

const Routes = withRouter(_SchoolAuthRoute);

export default class SchoolAuth extends PureComponent {

    render() {
        return (
            <Provider {...AppAuthStore}>
                <Routes/>
            </Provider>
        );
    }

}
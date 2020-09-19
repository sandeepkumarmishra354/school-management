import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import TransportRoutes from './component/TransportRoutes';
import TransportVehicles from './component/TransportVehicles';

class _RouteTransport extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/routes`}>
                    <TransportRoutes/>
                </Route>
                <Route exact path={`${path}/vehicles`}>
                    <TransportVehicles/>
                </Route>
            </Switch>
        );
    }

}

export const RouteTransport = withRouter(_RouteTransport);
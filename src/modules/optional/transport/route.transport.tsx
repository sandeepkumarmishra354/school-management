import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import { RouteUrlMap } from '../../../config/sidenav_config';
import TransportRoutes from './component/TransportRoutes';
import TransportVehicles from './component/TransportVehicles';

class _RouteTransport extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.transport["transport-routes"]}>
                    <TransportRoutes/>
                </Route>
                <Route exact path={RouteUrlMap.transport["transport-vehicles"]}>
                    <TransportVehicles/>
                </Route>
            </Switch>
        );
    }

}

export const RouteTransport = withRouter(_RouteTransport);
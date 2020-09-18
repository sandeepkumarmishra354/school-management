import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import TransportRoutes from './component/TransportRoutes';
import TransportVehicles from './component/TransportVehicles';

class _RouteTransport extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/routes'>
                    <TransportRoutes/>
                </Route>
                <Route path='/vehicles'>
                    <TransportVehicles/>
                </Route>
            </Router>
        );
    }

}

export const RouteTransport = withRouter(_RouteTransport);
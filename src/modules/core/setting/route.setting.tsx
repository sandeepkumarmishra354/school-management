import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import SettingGeneral from './component/SettingGeneral';
import SettingPayment from './component/SettingPayment';
import SettingCommunication from './component/SettingsCommunication';

class _RouteSetting extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/general'>
                    <SettingGeneral/>
                </Route>
                <Route path='/payment'>
                    <SettingPayment/>
                </Route>
                <Route path='/communication'>
                    <SettingCommunication/>
                </Route>
            </Router>
        );
    }

}

export const RouteSetting = withRouter(_RouteSetting);
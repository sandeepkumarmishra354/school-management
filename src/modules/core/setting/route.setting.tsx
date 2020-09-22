import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import { RouteUrlMap } from '../../../config/sidenav_config';
import SettingGeneral from './component/SettingGeneral';
import SettingPayment from './component/SettingPayment';
import SettingCommunication from './component/SettingsCommunication';

class _RouteSetting extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.settings["setting-general"]}>
                    <SettingGeneral />
                </Route>
                <Route exact path={RouteUrlMap.settings["setting-payment"]}>
                    <SettingPayment />
                </Route>
                <Route exact path={RouteUrlMap.settings["setting-communication"]}>
                    <SettingCommunication />
                </Route>
            </Switch>
        );
    }

}

export const RouteSetting = withRouter(_RouteSetting);
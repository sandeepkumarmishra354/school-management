import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import SettingGeneral from './component/SettingGeneral';
import SettingPayment from './component/SettingPayment';
import SettingCommunication from './component/SettingsCommunication';

class _RouteSetting extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/general`}>
                    <SettingGeneral/>
                </Route>
                <Route exact path={`${path}/payment`}>
                    <SettingPayment/>
                </Route>
                <Route exact path={`${path}/communication`}>
                    <SettingCommunication/>
                </Route>
            </Switch>
        );
    }

}

export const RouteSetting = withRouter(_RouteSetting);
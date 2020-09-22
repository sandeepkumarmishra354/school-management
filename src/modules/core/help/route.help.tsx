import React, { PureComponent } from 'react'
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { RouteUrlMap } from '../../../config/sidenav_config';
import Help from './component/Help';

class _RouteHelp extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.help} component={Help}/>
            </Switch>
        );
    }

}

export const RouteHelp = withRouter(_RouteHelp);
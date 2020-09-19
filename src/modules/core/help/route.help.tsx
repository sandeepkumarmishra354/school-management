import React, { PureComponent } from 'react'
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import Help from './component/Help';

class _RouteHelp extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path='/help' component={Help}/>
            </Switch>
        );
    }

}

export const RouteHelp = withRouter(_RouteHelp);
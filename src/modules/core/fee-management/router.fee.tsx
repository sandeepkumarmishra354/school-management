import React, { PureComponent } from 'react'
import { withRouter, Route, RouteComponentProps, Switch } from 'react-router-dom';
import FeeCollect from './component/FeeCollect';
import FeeReminder from './component/FeeReminder';
import FeeDiscount from './component/FeeDiscount';
import FeeType from './component/FeeType';

class _RouterFee extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/collect`}>
                    <FeeCollect />
                </Route>
                <Route exact path={`${path}/reminder`}>
                    <FeeReminder />
                </Route>
                <Route exact path={`${path}/discount`}>
                    <FeeDiscount />
                </Route>
                <Route exact path={`${path}/type`}>
                    <FeeType />
                </Route>
            </Switch>
        );
    }

}

export const RouterFee = withRouter(_RouterFee);
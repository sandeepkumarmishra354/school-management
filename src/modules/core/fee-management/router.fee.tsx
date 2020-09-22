import React, { PureComponent } from 'react'
import { withRouter, Route, RouteComponentProps, Switch } from 'react-router-dom';
import FeeCollect from './component/FeeCollect';
import FeeReminder from './component/FeeReminder';
import FeeDiscount from './component/FeeDiscount';
import FeeType from './component/FeeType';
import { RouteUrlMap } from '../../../config/sidenav_config';

class _RouterFee extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.fee_management["fee-collect"]}>
                    <FeeCollect />
                </Route>
                <Route exact path={RouteUrlMap.fee_management["fee-reminder"]}>
                    <FeeReminder />
                </Route>
                <Route exact path={RouteUrlMap.fee_management["fee-discount"]}>
                    <FeeDiscount />
                </Route>
                <Route exact path={RouteUrlMap.fee_management["fee-type"]}>
                    <FeeType />
                </Route>
            </Switch>
        );
    }

}

export const RouterFee = withRouter(_RouterFee);
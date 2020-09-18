import React, { PureComponent } from 'react'
import { withRouter, Router, Route, RouteComponentProps } from 'react-router-dom';
import FeeCollect from './component/FeeCollect';
import FeeReminder from './component/FeeReminder';
import FeeDiscount from './component/FeeDiscount';
import FeeType from './component/FeeType';

class _RouterFee extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/collect'>
                    <FeeCollect />
                </Route>
                <Route path='/reminder'>
                    <FeeReminder />
                </Route>
                <Route path='/discount'>
                    <FeeDiscount />
                </Route>
                <Route path='/type'>
                    <FeeType />
                </Route>
            </Router>
        );
    }

}

export const RouterFee = withRouter(_RouterFee);
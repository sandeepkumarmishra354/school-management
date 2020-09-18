import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import PayrollGenerate from './component/PayrollGenerate';
import PayrollReport from './component/PayrollReport';

class _RoutePayroll extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/generate'>
                    <PayrollGenerate/>
                </Route>
                <Route path='/report'>
                    <PayrollReport/>
                </Route>
            </Router>
        );
    }

}

export const RoutePayroll = withRouter(_RoutePayroll);
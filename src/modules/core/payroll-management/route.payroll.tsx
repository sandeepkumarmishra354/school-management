import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import PayrollGenerate from './component/PayrollGenerate';
import PayrollReport from './component/PayrollReport';

class _RoutePayroll extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/generate`}>
                    <PayrollGenerate/>
                </Route>
                <Route exact path={`${path}/report`}>
                    <PayrollReport/>
                </Route>
            </Switch>
        );
    }
}

export const RoutePayroll = withRouter(_RoutePayroll);
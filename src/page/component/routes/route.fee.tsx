import React, { Component } from 'react'
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import FeeList from '../fee-management/FeeList';
import { storeFee } from '../../../mobx/store/fee/store.fee';
import CreateNewFeeEntry from '../fee-management/CreateNewFeeEntry';


class RouteFee extends Component<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={path}>
                    <FeeList
                        store={storeFee} />
                </Route>
                <Route path={`${path}/new`}>
                    <CreateNewFeeEntry
                        store={storeFee} />
                </Route>
                <Route path={`${path}/details/:uid`}>
                    <p>details</p>
                </Route>
            </Switch>
        );
    }

}

export default withRouter(RouteFee);
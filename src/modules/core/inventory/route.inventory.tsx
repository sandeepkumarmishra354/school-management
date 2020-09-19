import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import InventoryAdd from './component/InventoryAdd';
import InventoryList from './component/InventoryList';
import InventoryReport from './component/InventoryReport';

class _RouteInventory extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/add`}>
                    <InventoryAdd />
                </Route>
                <Route exact path={`${path}/list`}>
                    <InventoryList />
                </Route>
                <Route exact path={`${path}/report`}>
                    <InventoryReport />
                </Route>
            </Switch>
        );
    }

}

export const RouteInventory = withRouter(_RouteInventory);
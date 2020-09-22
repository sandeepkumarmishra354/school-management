import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import { RouteUrlMap } from '../../../config/sidenav_config';
import InventoryAdd from './component/InventoryAdd';
import InventoryList from './component/InventoryList';
import InventoryReport from './component/InventoryReport';

class _RouteInventory extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.inventory["inventory-add"]}>
                    <InventoryAdd />
                </Route>
                <Route exact path={RouteUrlMap.inventory["inventory-list"]}>
                    <InventoryList />
                </Route>
                <Route exact path={RouteUrlMap.inventory["inventory-report"]}>
                    <InventoryReport />
                </Route>
            </Switch>
        );
    }

}

export const RouteInventory = withRouter(_RouteInventory);
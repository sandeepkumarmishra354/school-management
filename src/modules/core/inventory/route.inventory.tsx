import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import InventoryAdd from './component/InventoryAdd';
import InventoryList from './component/InventoryList';
import InventoryReport from './component/InventoryReport';

class _RouteInventory extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/add'>
                    <InventoryAdd />
                </Route>
                <Route path='/list'>
                    <InventoryList />
                </Route>
                <Route path='/report'>
                    <InventoryReport />
                </Route>
            </Router>
        );
    }

}

export const RouteInventory = withRouter(_RouteInventory);
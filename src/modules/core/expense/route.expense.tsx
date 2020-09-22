import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import { RouteUrlMap } from '../../../config/sidenav_config';
import ExpenseAdd from './component/ExpenseAdd';
import ExpenseList from './component/ExpenseList';
import ExpenseReport from './component/ExpenseReport';

class _RouteExpense extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.expense["expense-add"]}>
                    <ExpenseAdd/>
                </Route>
                <Route exact path={RouteUrlMap.expense["expense-all"]}>
                    <ExpenseList/>
                </Route>
                <Route exact path={RouteUrlMap.expense["expense-report"]}>
                    <ExpenseReport/>
                </Route>
            </Switch>
        );
    }

}

export const RouteExpense = withRouter(_RouteExpense);
import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import ExpenseAdd from './component/ExpenseAdd';
import ExpenseList from './component/ExpenseList';
import ExpenseReport from './component/ExpenseReport';

class _RouteExpense extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/add`}>
                    <ExpenseAdd/>
                </Route>
                <Route exact path={`${path}/list`}>
                    <ExpenseList/>
                </Route>
                <Route exact path={`${path}/report`}>
                    <ExpenseReport/>
                </Route>
            </Switch>
        );
    }

}

export const RouteExpense = withRouter(_RouteExpense);
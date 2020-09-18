import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import ExpenseAdd from './component/ExpenseAdd';
import ExpenseList from './component/ExpenseList';
import ExpenseReport from './component/ExpenseReport';

class _RouteExpense extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/add'>
                    <ExpenseAdd/>
                </Route>
                <Route path='/list'>
                    <ExpenseList/>
                </Route>
                <Route path='/report'>
                    <ExpenseReport/>
                </Route>
            </Router>
        );
    }

}

export const RouteExpense = withRouter(_RouteExpense);
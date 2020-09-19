import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import LibraryBookList from './component/LibraryBookList';
import LibraryDelete from './component/LibraryDelete';
import LibraryIssuedBook from './component/LibraryIssuedBook';
import LibraryReport from './component/LibraryReport';

class _RouteLibrary extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/book-list`}>
                    <LibraryBookList/>
                </Route>
                <Route exact path={`${path}/delete`}>
                    <LibraryDelete/>
                </Route>
                <Route exact path={`${path}/book-issued`}>
                    <LibraryIssuedBook/>
                </Route>
                <Route exact path={`${path}/report`}>
                    <LibraryReport/>
                </Route>
            </Switch>
        );
    }

}

export const RouteLibrary = withRouter(_RouteLibrary);
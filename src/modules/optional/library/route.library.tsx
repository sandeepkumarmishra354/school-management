import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import LibraryBookList from './component/LibraryBookList';
import LibraryDelete from './component/LibraryDelete';
import LibraryIssuedBook from './component/LibraryIssuedBook';
import LibraryReport from './component/LibraryReport';

class _RouteLibrary extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/book-list'>
                    <LibraryBookList/>
                </Route>
                <Route path='/delete'>
                    <LibraryDelete/>
                </Route>
                <Route path='/book-issued'>
                    <LibraryIssuedBook/>
                </Route>
                <Route path='/report'>
                    <LibraryReport/>
                </Route>
            </Router>
        );
    }

}

export const RouteLibrary = withRouter(_RouteLibrary);
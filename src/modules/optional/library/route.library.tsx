import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import { RouteUrlMap } from '../../../config/sidenav_config';
import LibraryBookList from './component/LibraryBookList';
import LibraryDelete from './component/LibraryDelete';
import LibraryIssuedBook from './component/LibraryIssuedBook';
import LibraryReport from './component/LibraryReport';

class _RouteLibrary extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Switch>
                <Route exact path={RouteUrlMap.library["library-list"]}>
                    <LibraryBookList/>
                </Route>
                <Route exact path={RouteUrlMap.library["library-delete"]}>
                    <LibraryDelete/>
                </Route>
                <Route exact path={RouteUrlMap.library["library-issued"]}>
                    <LibraryIssuedBook/>
                </Route>
                <Route exact path={RouteUrlMap.library["library-report"]}>
                    <LibraryReport/>
                </Route>
            </Switch>
        );
    }

}

export const RouteLibrary = withRouter(_RouteLibrary);
import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Router, Route } from 'react-router-dom';
import HostelDelete from './component/HostelDelete';
import HostelIssued from './component/HostelIssued';
import HostelList from './component/HostelList';
import HostelReport from './component/HostelReport';

class _RouteHostel extends PureComponent<RouteComponentProps> {

    render() {
        return (
            <Router {...this.props}>
                <Route path='/delete'>
                    <HostelDelete />
                </Route>
                <Route path='/issued'>
                    <HostelIssued />
                </Route>
                <Route path='/list'>
                    <HostelList />
                </Route>
                <Route path='/report'>
                    <HostelReport />
                </Route>
            </Router>
        );
    }

}

export const RouteHostel = withRouter(_RouteHostel);
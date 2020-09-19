import React, { PureComponent } from 'react'
import { RouteComponentProps, withRouter, Route, Switch } from 'react-router-dom';
import HostelDelete from './component/HostelDelete';
import HostelIssued from './component/HostelIssued';
import HostelList from './component/HostelList';
import HostelReport from './component/HostelReport';

class _RouteHostel extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}/delete`}>
                    <HostelDelete />
                </Route>
                <Route exact path={`${path}/issued`}>
                    <HostelIssued />
                </Route>
                <Route exact path={`${path}/list`}>
                    <HostelList />
                </Route>
                <Route exact path={`${path}/report`}>
                    <HostelReport />
                </Route>
            </Switch>
        );
    }

}

export const RouteHostel = withRouter(_RouteHostel);
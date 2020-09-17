import React, { Component } from 'react'
import { Sidebar, Sidenav, IconButton, Icon } from 'rsuite';
import SideNav from './SideNav';
import { observer } from 'mobx-react';
import { sidenavStore } from '../../../mobx/store/store.sidenav';

interface Props {
    navStore: typeof sidenavStore
}

@observer
export default class AppSidebar extends Component<Props,{}> {
  render() {
    return (
        <div
        className="sidebar">
            <div
            className='sidebar-container'
                style={{ height: '100%', overflowY: 'auto'}}>
                <Sidebar
                    width={ this.props.navStore.sideNavCurrentWidth }
                    style={{ display: 'flex', flexDirection: 'column' }}
                    collapsible>
                    {<Sidenav.Header>
                        <div className="brand-name">
                            <h4
                                className="brand-text">
                                {this.props.navStore.schoolName}
                            </h4>
                            <IconButton
                                style={{ marginLeft: 5, position: 'absolute', right: -12, marginTop: 2, boxShadow: "5px 0 5px 0 rgba(0, 0, 0, .5)" }}
                                circle size='xs'
                                icon={<Icon icon='arrow-left-line' rotate={this.props.navStore.expanded ? 0 : 180} />}
                                onClick={this.props.navStore.toggleExpand}
                            />
                        </div>
                    </Sidenav.Header>}
                    <SideNav
                        nav={sidenavStore.currentNav}
                        expand={sidenavStore.expanded}
                        setNav={sidenavStore.setCurrentNav} />
                </Sidebar>
            </div>
        </div>
    );
  }
}
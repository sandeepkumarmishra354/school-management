import { inject, observer } from 'mobx-react';
import React, { PureComponent } from 'react'
import { StoreSidebar } from '../../mobx/sidebar/store.sidebar';
import { FaBars } from 'react-icons/fa';

interface Props {
    storeSidebar?: StoreSidebar
}

@inject('storeSidebar')
@observer
export default class SidebarControllButton extends PureComponent<Props> {

    private _onOpenClick = () => {
        this.props.storeSidebar?.setSidebarOpen(true);
    }

    render() {
        let show = this.props.storeSidebar?.sidebarDocked;
        if (!show)
            return (
                <FaBars
                    style={{ marginRight: 8, cursor: 'pointer' }}
                    color='#99AAAB'
                    onClick={this._onOpenClick} />
            );

        return null;
    }

}
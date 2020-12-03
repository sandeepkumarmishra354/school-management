import { inject, observer } from 'mobx-react';
import React, { PureComponent } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { StoreSidebarOption } from '../../mobx/sidebar/store.sidebar_options';
import './styles.css';

interface OptionProps {
    text: string,
    storeSidebarOption?: StoreSidebarOption

}

@inject('storeSidebarOption')
@observer
class Option extends PureComponent<OptionProps> {
    render() {
        let option = this.props.storeSidebarOption?.selectedOption ?? '';
        let curClass = option === this.props.text ? 'sidebar-selected' : 'sidebar-option';
        return (
            <div
            className={curClass}>
                <h6 style={{fontSize:18,marginTop:5}}>
                    {this.props.text}
                </h6>
            </div>
        );
    }
}

class SidebarOptions extends PureComponent<RouteComponentProps> {

    render() {
        let { path } = this.props.match;
        return (
            <div>
                <Link to={`${path}/dashboard`} style={{textDecoration:'none'}}>
                    <Option text='Dashboard' />
                </Link>
                <Link to={`${path}/attendance`} style={{ textDecoration: 'none' }}>
                    <Option text='Attendance' />
                </Link>
                <Link to={`${path}/student`} style={{ textDecoration: 'none' }}>
                    <Option text='Student' />
                </Link>
                <Link to={`${path}/teacher`} style={{ textDecoration: 'none' }}>
                    <Option text='Teacher' />
                </Link>
                <Link to={`${path}/fee-management`} style={{ textDecoration: 'none' }}>
                    <Option text='Fee Management' />
                </Link>
                <Link to={`${path}/payroll-management`} style={{ textDecoration: 'none' }}>
                    <Option text='Payroll Management' />
                </Link>
                <Link to={`${path}/academics`} style={{ textDecoration: 'none' }}>
                    <Option text='Academics' />
                </Link>
                <Link to={`${path}/library`} style={{ textDecoration: 'none' }}>
                    <Option text='Library' />
                </Link>
                <Link to={`${path}/hostel`} style={{ textDecoration: 'none' }}>
                    <Option text='Hostel' />
                </Link>
                <Link to={`${path}/inventory`} style={{ textDecoration: 'none' }}>
                    <Option text='Inventory' />
                </Link>
                <Link to={`${path}/communication`} style={{ textDecoration: 'none' }}>
                    <Option text='Communication' />
                </Link>
                <Link to={`${path}/transport`} style={{ textDecoration: 'none' }}>
                    <Option text='Transport' />
                </Link>
                <Link to={`${path}/certificate`} style={{ textDecoration: 'none' }}>
                    <Option text='Issue Certificate' />
                </Link>
                <Link to={`${path}/settings`} style={{ textDecoration: 'none' }}>
                    <Option text='Settings' />
                </Link>
                <Link to={`${path}/help`} style={{ textDecoration: 'none' }}>
                    <Option text='Help' />
                </Link>
            </div>
        );
    }

}

export default withRouter(SidebarOptions);
import React, { PureComponent } from 'react'
import { observer } from 'mobx-react';
import { Avatar, InputGroup, Icon, Input, IconButton, Dropdown } from 'rsuite';
import { notificationHelper } from '../../../utils/NotificationHelper';
import { authStore } from '../../../mobx/store/store.auth';

interface Props {
    schoolName:string,
    photo:string,
}

@observer
export default class AppHeader extends PureComponent<Props,{}> {

    constructor(props:Props) {
        super(props);
    }

    private onDropdownSelect = (eventKey:number) => {
        switch(eventKey) {
            case 1:
                notificationHelper.showInfo('logout');
                return authStore.logout();
        }
    }

    render() {
        return (
            <div className='app-header'>
                <Avatar circle src={this.props.photo}/>
        <h6 className="header-school-name">{this.props.schoolName}</h6>
                <InputGroup style={{ marginLeft: 25,marginRight:15, maxHeight: 40, maxWidth: 300 }}>
                    <InputGroup.Addon>
                        <Icon icon="search" />
                    </InputGroup.Addon>
                    <Input
                     placeholder="search..." />
                    <InputGroup.Addon>
                        <IconButton
                        size='xs'
                        icon={<Icon icon="plus" rotate={45} />}/>
                    </InputGroup.Addon>
                </InputGroup>

                <Dropdown
                className="app-header-dropdown"
                style={{marginLeft:25}}
                trigger='click'
                    title={<span style={{ color: '#333945', marginLeft: 5, marginRight: 5}}>Sandeep Mishra</span>}
                onSelect={this.onDropdownSelect}
                    icon={<Icon icon="user-circle" style={{ color:'#0A79DF'}} />}>
                    <Dropdown.Item eventKey={2} icon={<Icon icon="building" />}>
                        School Profile
                    </Dropdown.Item>
                    <Dropdown.Item eventKey={1} icon={<Icon icon="exit" style={{color:'red'}} />}>
                        Logout
                    </Dropdown.Item>
                </Dropdown>
            </div>
        )
    }
}
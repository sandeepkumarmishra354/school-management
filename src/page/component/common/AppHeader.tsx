import React, { PureComponent, CSSProperties } from 'react'
import { observer } from 'mobx-react';
import { Avatar, InputGroup, Icon, Input, IconButton, Dropdown, Badge, Whisper, Tooltip, Button, Popover } from 'rsuite';
import { notificationHelper } from '../../../utils/NotificationHelper';
import { authStore } from '../../../mobx/store/auth/store.auth';
import { WhisperInstance } from 'rsuite/lib/Whisper';

interface Props {
    schoolName: string,
    photo: string,
    style?: CSSProperties
}

const headerStyle: CSSProperties = {
    height: 65,
    backgroundColor: '#fff',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.424)',
    paddingLeft: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    zIndex: 500,
    transition: 'all .5s'
}
const headerSchoolStyle: CSSProperties = {
    color: '#000',
    //fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 16,
}

@observer
export default class AppHeader extends PureComponent<Props, {}> {

    private accountMenuRef = React.createRef<WhisperInstance>();

    constructor(props: Props) {
        super(props);
    }

    private onDropdownSelect = (eventKey: number) => {
        this.accountMenuRef.current?.close();
        switch (eventKey) {
            case 1:
                notificationHelper.showInfo('logout');
                return authStore.logout();
        }
    }

    private AccountMenu = (props: any) => {
        let { onSelect, ...rest } = props;
        return (
            <Popover {...rest} full >
                <Dropdown.Menu
                    onSelect={this.onDropdownSelect}>
                    <Dropdown.Item eventKey={2} icon={<Icon icon="building-o" />}>
                        View school Profile
                    </Dropdown.Item>
                    <Dropdown.Item eventKey={1} icon={<Icon icon="exit" style={{ color: 'red' }} />}>
                        Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Popover>
        );
    }

    render() {
        return (
            <div style={{ ...this.props.style, ...headerStyle }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt='photo' circle src={this.props.photo} />
                    <h6 style={headerSchoolStyle}>{this.props.schoolName}</h6>
                    <InputGroup
                        className='form-input'
                        style={{ marginLeft: 45, marginRight: 15, maxHeight: 40, maxWidth: 300 }}>
                        <InputGroup.Addon>
                            <Icon icon="search" />
                        </InputGroup.Addon>
                        <Input
                            placeholder="search..." />
                        <InputGroup.Addon>
                            <IconButton
                                size='xs'
                                icon={<Icon icon="plus" rotate={45} />} />
                        </InputGroup.Addon>
                    </InputGroup>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', paddingRight: 20 }}>
                    <Whisper placement='bottom' trigger='hover' speaker={<Tooltip>Notification</Tooltip>}>
                        <Badge content={6} maxCount={20}>
                            <IconButton color='violet' appearance='ghost' icon={<Icon icon='bell' style={{ color: '#535C68' }} />} />
                        </Badge>
                    </Whisper>
                    <Whisper
                        triggerRef={this.accountMenuRef}
                        placement='bottom'
                        trigger='click'
                        speaker={<this.AccountMenu />}>
                        <Button
                            style={{ marginLeft: 25 }}
                            appearance='ghost'
                            color='violet'>
                            <Icon icon="user-circle" style={{ color: '#535C68', marginRight: 12 }} />
                            <span style={{ color: '#000' }}>Vinod Pandey</span>
                            <Icon icon="arrow-down" style={{ color: '#535C68', marginLeft: 12 }} />
                        </Button>
                    </Whisper>
                </div>
            </div>
        )
    }
}
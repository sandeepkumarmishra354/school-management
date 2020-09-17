import React, { PureComponent, CSSProperties } from 'react'
import { observer } from 'mobx-react';
import { Avatar, InputGroup, Icon, Input, IconButton, Dropdown, Badge, Whisper, Button, Popover } from 'rsuite';
import { notificationHelper } from '../../../utils/NotificationHelper';
import { authStore } from '../../../mobx/store/auth/store.auth';
import { WhisperInstance } from 'rsuite/lib/Whisper';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { StoreSchoolProfile } from '../../../mobx/store/management/store.schoolprofile';

interface Props extends RouteComponentProps<any> {
    style?: CSSProperties,
    store: StoreSchoolProfile
}

const headerStyle: CSSProperties = {
    height: 60,
    backgroundColor: '#fff',
    boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.424)',
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
    fontSize: 17,
    fontWeight:400,
    marginLeft: 16,
}

@observer
class AppHeader extends PureComponent<Props, {searchText:string}> {

    private accountMenuRef = React.createRef<WhisperInstance>();

    constructor(props: Props) {
        super(props);
        this.state = {searchText:''};
    }

    componentDidMount = () => {
        this.props.store.fetch();
    }

    private onDropdownSelect = (eventKey: number) => {
        this.accountMenuRef.current?.close();
        switch (eventKey) {
            case 3:
                notificationHelper.showInfo('logout');
                return authStore.logout();
        }
    }

    private searchTextChanged = (text:string) => {
        if(text.length <= 30)
            this.setState({ searchText: text });
    }
    private onSearchClear = () => {
        if(this.state.searchText.length > 0)
            this.setState({searchText:''});
    }

    private AccountMenu = (props: any) => {
        let { onSelect, ...rest } = props;
        return (
            <Popover {...rest} full >
                <Dropdown.Menu
                    onSelect={this.onDropdownSelect}>
                    <Dropdown.Item eventKey={1} icon={<Icon icon="building-o" />}>
                        View Profile
                    </Dropdown.Item>
                    <Dropdown.Menu title='Change session' icon={<Icon icon="expand-o"/>}>
                        <Dropdown.Item active>2019-2020</Dropdown.Item>
                        <Dropdown.Item>2018-2019</Dropdown.Item>
                        <Dropdown.Item>2017-2018</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Item eventKey={3} icon={<Icon icon="exit" />}>
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
                    <Avatar alt='photo' circle src={this.props.store.schoolProfile.photo} />
                    <h6 style={headerSchoolStyle}>{this.props.store.schoolProfile.schoolName}</h6>
                    <InputGroup
                        style={{ marginLeft: 45, marginRight: 15, maxHeight: 40, maxWidth: 300 }}>
                        <InputGroup.Addon>
                            <Icon icon="search" />
                        </InputGroup.Addon>
                        <Input
                        value={this.state.searchText}
                        onChange={this.searchTextChanged}
                        placeholder="search..." />
                        <InputGroup.Addon>
                            <IconButton
                                size='xs'
                                onClick={this.onSearchClear}
                                icon={<Icon icon="close" />} />
                        </InputGroup.Addon>
                    </InputGroup>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', paddingRight: 20 }}>
                    <Badge content={6} maxCount={20}>
                        <IconButton icon={<Icon icon='bell' />} />
                    </Badge>
                    <Whisper
                        triggerRef={this.accountMenuRef}
                        placement='bottom'
                        trigger='click'
                        speaker={<this.AccountMenu />}>
                        <Button
                            style={{ marginLeft: 25,marginRight:25 }}>
                            <Icon icon="user-circle" style={{ marginRight: 12 }} />
                            Vinod Pandey
                            <Icon icon="arrow-down" style={{ marginLeft: 12 }} />
                        </Button>
                    </Whisper>
                    <div
                    style={{ marginRight: 10,display:'flex',flexDirection:'column',
                    alignItems:'center',fontWeight:300}}>
                        <h6 style={{fontSize:14}}>session</h6>
                        <h6 style={{ fontSize: 14, color:'#333945' }}>2019-2020</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AppHeader);
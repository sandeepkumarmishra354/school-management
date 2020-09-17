import React, { Component, CSSProperties } from 'react'
import { Button, InputGroup, Icon, Input, Header } from 'rsuite';
import LoginFooter from './component/LoginFooter';
import { observer } from 'mobx-react';
import { authStore } from '../mobx/store/auth/store.auth';
import DialogResetPassword from './component/dialog/DialogResetPassword';

const styles:CSSProperties = {
    width: "90%",
    marginBottom: 20,
    minHeight:40,
};

interface Props {
    store: typeof authStore
}

@observer
export default class LoginPage extends Component<Props, {}> {

    private emailRef: any;
    private passwordRef: any;
    private schoolIdRef: any;
    private email = '';
    private password = '';
    private schoolId = '';

    constructor(props: Props) {
        super(props)
    }

    componentDidMount = () => {
        this.emailRef.focus();
    }

    private _loginClicked = () => {
        this.props.store.login(this.email, this.password);
    }

    private _onEmailChanged = (email: string) => {
        this.email = email;
    }

    private _onSchoolIdChanged = (id: string) => {
        this.schoolId = id;
    }

    private _onPasswordChanged = (password: string) => {
        this.password = password;
    }

    render() {
        return (
            <div className="login-div">
                <h5 style={{ color:'#192A56',padding:40,fontSize:25}}>
                    S-TECH <i>SOLUTIONS</i>
                </h5>
                <div className="input-container">
                    <Header style={{ fontSize: 25, position: 'absolute', display: 'flex', top: 0, color: '#FFF', backgroundColor: "#3498FF", width: '100%', padding: 8, justifyContent: 'center' }}>
                        <h6>Sign in to start your session</h6>
                    </Header>
                    <InputGroup className="input-grp" style={{ ...styles, marginTop: 30 }}>
                        <InputGroup.Addon>
                            <Icon icon="envelope" />
                        </InputGroup.Addon>
                        <Input type="email" placeholder="Email address" onChange={this._onEmailChanged} inputRef={(ref: any) => { this.emailRef = ref }} onPressEnter={() => {
                            this.schoolIdRef.focus();
                        }} />
                    </InputGroup>

                    <InputGroup className="input-grp" style={{ ...styles }}>
                        <InputGroup.Addon>
                            <Icon icon="id-card-o"/>
                        </InputGroup.Addon>
                        <Input type="text" placeholder="School id" onChange={this._onSchoolIdChanged} inputRef={(ref: any) => { this.schoolIdRef = ref }} onPressEnter={() => {
                            this.passwordRef.focus();
                        }} />
                    </InputGroup>

                    <InputGroup className="input-grp" style={styles}>
                        <InputGroup.Addon>
                            <Icon icon="shield" />
                        </InputGroup.Addon>
                        <Input type="password" placeholder="Password" onChange={this._onPasswordChanged} inputRef={(ref: any) => { this.passwordRef = ref }} onPressEnter={() => {
                            this.passwordRef.blur();
                            this._loginClicked();
                        }} />
                    </InputGroup>

                    <Button
                        className="signin-btn"
                        style={{ width: "50%", marginBottom: 20, marginTop: 10, color: '#fff', backgroundColor:'#3498FF',borderRadius:30 }}
                        loading={this.props.store.isLogingIn}
                        onClick={this._loginClicked}>SIGN IN</Button>

                    <Button
                    appearance='link'
                    color='red'
                    onClick={() => {
                        this.props.store.showResetDialog(true);
                    }}
                    style={{ padding:5,borderRadius:12,position:'absolute',bottom:10 }}>
                        Forgot password ?
                        </Button>
                </div>
                <DialogResetPassword
                store={this.props.store}/>
            </div>
        );
    }
}
import { inject, observer } from 'mobx-react'
import React, { PureComponent, CSSProperties, ChangeEvent } from 'react'
import { Card, FormControl, InputGroup } from 'react-bootstrap'
import { StoreLogin } from '../../mobx/auth/store.login'
import MyButton from '../components/MyButton'
import MyCard from '../components/MyCard'
import {FaEnvelope,FaIdCard,FaKey} from 'react-icons/fa';
import DialogContactUs from './DialogContactUs'

interface Props {
    storeLogin?: StoreLogin
}
interface State {
    email: string,
    schoolId: string,
    password: string,
}

const styles: CSSProperties = {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#EAF0F1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const inputStyle: CSSProperties = {
    width: 350,
    marginBottom: 15
}

const panelStyle: CSSProperties = {
    //padding: 20,
    backgroundColor: '#fff',
}

const brandStyle: CSSProperties = {
    marginTop: -10,
    marginBottom: 22,
    fontSize: 22,
    fontWeight: 600
}

@inject('storeLogin')
@observer
export default class PageLogin extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            schoolId: ''
        };
    }

    private _onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target.value });
    }
    private _onSchoolIdChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ schoolId: event.target.value });
    }
    private _onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: event.target.value });
    }
    private _loginClicked = () => {
        this.props.storeLogin?.authenticate('', '', '');
    }
    private _onContactUs = () => {
        this.props.storeLogin?.showDialog(true);
    }

    render() {
        return (
            <div style={styles}>
                <MyCard shadow style={panelStyle}>
                    <Card.Body>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <p style={brandStyle}>Web <span style={{ color: '#0A79DF' }}> <i>Solutions</i></span></p>
                            <InputGroup style={inputStyle}>
                            <InputGroup.Prepend>
                                    <InputGroup.Text><FaEnvelope color='#777E8B' /></InputGroup.Text>
                            </InputGroup.Prepend>
                                <FormControl
                                    placeholder='Enter email'
                                    type='email'
                                    value={this.state.email}
                                    onChange={this._onEmailChange} />
                            </InputGroup>
                            
                            <InputGroup style={inputStyle}>
                                <InputGroup.Prepend>
                                    <InputGroup.Text><FaIdCard color='#777E8B' /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder='Enter school id'
                                    value={this.state.schoolId}
                                    onChange={this._onSchoolIdChange} />
                            </InputGroup>
                            
                            <InputGroup style={inputStyle}>
                                <InputGroup.Prepend>
                                    <InputGroup.Text><FaKey color='#777E8B' /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder='password'
                                    type='password'
                                    value={this.state.password}
                                    onChange={this._onPasswordChange} />
                            </InputGroup>

                            <MyButton
                                variant='primary'
                                label='Login'
                                size='sm'
                                onClick={this._loginClicked}
                                loading={this.props.storeLogin?.loggingIn}
                                style={{ marginTop: 15, width: '50%' }} />

                            <p style={{ marginTop: 22 }}>If you are facing any kind of problem.</p>
                            <MyButton
                                label='Contact us'
                                variant='danger' size='sm'
                                onClick={this._onContactUs}/>
                        </div>
                    </Card.Body>
                </MyCard>
                <DialogContactUs/>
            </div>
        );
    }

}
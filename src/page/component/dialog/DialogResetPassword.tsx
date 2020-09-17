import React, { Component, CSSProperties } from 'react'
import { Modal, Button, InputGroup, Input, Icon } from 'rsuite';
import { AuthStore } from '../../../mobx/store/auth/store.auth';
import { observer } from 'mobx-react';

interface Props {
    style?:CSSProperties,
    store: AuthStore
}

const styles: CSSProperties = {
    //width: "80%",
    marginBottom: 20,
    minHeight: 40,
};

@observer
export default class DialogResetPassword extends Component<Props> {

    private email = '';
    private schoolId = '';

    private handleClose = () => {
        this.props.store.showResetDialog(false);
    }

    private _onEmailChanged = (email: string) => {
        this.email = email;
    }

    private _onSchoolIdChanged = (id: string) => {
        this.schoolId = id;
    }

    render() {
        return (
            <Modal
            show={this.props.store.showingResetDialog}
            onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>Reset Password</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <p>Enter your email address and school id to reset your password.&nbsp;
                        you will receive an email containing a link to reset your password.</p>
                    <InputGroup className="input-grp" style={{ ...styles, marginTop: 30 }}>
                        <InputGroup.Addon>
                            <Icon icon="envelope" />
                        </InputGroup.Addon>
                        <Input
                        type="email"
                        placeholder="Email address"
                        onChange={this._onEmailChanged}/>
                    </InputGroup>

                    <InputGroup className="input-grp" style={{ ...styles }}>
                        <InputGroup.Addon>
                            <Icon icon="id-card-o" />
                        </InputGroup.Addon>
                        <Input
                        type="text"
                        placeholder="School id"
                        onChange={this._onSchoolIdChanged} />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                    color='cyan'
                        onClick={this.handleClose}>
                        <Icon icon='close' style={{marginRight:10}}/>
                        Cancel
                    </Button>
                    <Button appearance='primary'>
                        <Icon icon='refresh' style={{ marginRight: 10 }} />
                        Reset
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

}
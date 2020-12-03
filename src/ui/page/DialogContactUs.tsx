import { inject, observer } from 'mobx-react';
import React, { Component } from 'react'
import { Form, Modal } from 'react-bootstrap';
import { StoreLogin } from '../../mobx/auth/store.login';
import MyButton from '../components/MyButton';

interface Props {
    storeLogin?: StoreLogin
}

@inject('storeLogin')
@observer
export default class DialogContactUs extends Component<Props> {

    private _close = () => {
        this.props.storeLogin?.showDialog(false);
    }

    render() {
        return (
            <Modal
                show={this.props.storeLogin?.isDialogShowing}
                backdrop='static'
                centered
                aria-labelledby="contained-modal-title-vcenter"
                keyboard={false}
                onHide={this._close}>

                <Modal.Header>
                    <Modal.Title>Contact us !</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <Form.Group>
                            <Form.Label>Registered email</Form.Label>
                            <Form.Control type='email' placeholder='Enter email'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Your school id</Form.Label>
                            <Form.Control type='email' placeholder='Enter id' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Describe your problem</Form.Label>
                            <Form.Control as='textarea' placeholder='Enter problem' rows={3} />
                        </Form.Group>
                        <p>We'll try to resolve your problem or we'll contact you as soon as possible.</p>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <MyButton
                        onClick={this._close}
                        variant='secondary'
                        label='close'
                        size='sm'/>
                    <MyButton
                        onClick={this._close}
                        variant='primary'
                        label='submit'
                        size='sm'/>
                </Modal.Footer>

            </Modal>
        );
    }

}
import React, { Component, CSSProperties } from 'react'
import { Modal, Button, Input, Icon, RadioGroup, Radio, Divider } from 'rsuite';
import { alertHelper } from '../../../utils/Alerthelper';

interface Props {
    style?: CSSProperties,
    show: boolean,
    onHide: () => void,
    onSend: (message: string) => void
}

export default class EmailSmsSendDialog extends Component<Props, { count: number, message: string }> {

    constructor(props: Props) {
        super(props);
        this.state = { count: 0, message: '' };
    }

    private sendClicked = () => {
        if (this.state.message !== '')
            this.props.onSend(this.state.message);
        else {
            alertHelper.showError('Please enter your message');
        }
    }

    private onMessageChange = (text: string) => {
        if (text.length <= 160)
            this.setState({ count: text.length, message: text });
    }

    render() {
        return (
            <Modal
                backdrop='static'
                show={this.props.show}
                onHide={this.props.onHide}>
                <Modal.Header>
                    <Modal.Title>Send SMS / Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ ...this.props.style }}>
                        <Input
                            className='form-input'
                            componentClass='textarea'
                            rows={4}
                            value={this.state.message}
                            placeholder="Enter your message here..."
                            onChange={this.onMessageChange} />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: 5 }}>
                            <p style={{ color: (this.state.count <= 160) ? 'gray' : 'red' }}>{this.state.count} / 160</p>
                        </div>
                        <RadioGroup inline appearance='picker' defaultValue='SMS'>
                            <Radio value='SMS'>SMS</Radio>
                            <Radio value='EMAIL'>EMAIL</Radio>
                        </RadioGroup>
                        <Divider vertical />
                        <RadioGroup inline appearance='picker' defaultValue='PARENT'>
                            <Radio value='STUDENT'>STUDENT</Radio>
                            <Radio value='PARENT'>PARENT</Radio>
                        </RadioGroup>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ marginTop: -15 }}>
                    <Button
                        color='blue'
                        onClick={this.sendClicked}>
                        <Icon icon="send" style={{ color: '#fff', marginRight: 10 }} />
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
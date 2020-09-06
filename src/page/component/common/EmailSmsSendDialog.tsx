import React, { Component, CSSProperties } from 'react'
import { Modal, Button, Input, Icon,Animation } from 'rsuite';

interface Props {
    style?: CSSProperties,
    show: boolean,
    onHide: () => void,
    onSend: (message: string) => void
}
interface State {
    error: boolean
}

export default class EmailSmsSendDialog extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { error: false };
    }

    private message = '';
    private timeout?: NodeJS.Timeout;

    private onExit = () => {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.setState({ error: false });
        }
    }

    private sendClicked = () => {
        if (this.message !== '')
            this.props.onSend(this.message);
        else {
            this.setState({ error: true });
            this.timeout = setTimeout(() => {
                this.setState({ error: false });
                this.timeout = undefined;
            }, 4000);
        }
    }

    render() {
        return (
            <Modal
                backdrop='static'
                show={this.props.show}
                onHide={this.props.onHide}
                onExit={this.onExit}>
                <Modal.Header>
                    <h6 style={{ textAlign: 'center' }}>Send SMS / Email</h6>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ ...this.props.style }}>
                        <Input
                            className='form-input'
                            componentClass='textarea'
                            rows={5}
                            placeholder="Enter your message here..."
                            onChange={text => (this.message = text)} />
                        <Animation.Fade in={this.state.error}>
                            <p style={{ marginTop: 5, color: 'red' }}>please enter your message</p>
                        </Animation.Fade>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{marginTop:-15}}>
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
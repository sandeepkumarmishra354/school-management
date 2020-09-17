import React, { Component, CSSProperties } from 'react'
import { Modal, Button, Icon } from 'rsuite';

interface Props {
    style?:CSSProperties,
    show: boolean,
    onHide: () => void,
    onDelete: (message: string) => void
}
interface State {
    //
}

export default class AlertDeleteDialog extends Component<Props,State> {

    private onDeleteClicked = () => {
        //
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}>
                <Modal.Header>
                    <Modal.Title>
                        <span style={{color: 'red' }}>Are you sure ?</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ ...this.props.style }}>
                        <p style={{fontSize:15,marginBottom:20}}>
                            Data will be deleted from your school record. In future if you want to recover your deleted data kindly contact us.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                    color='cyan'
                        onClick={this.props.onHide}>
                        <Icon icon="close" style={{ color: '#fff', marginRight: 10 }} />
                        Cancel
                    </Button>
                    <Button
                        color='red'
                        onClick={this.onDeleteClicked}>
                        <Icon icon="trash2" style={{ color: '#fff', marginRight: 10 }} />
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

}
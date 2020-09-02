import React, { Component } from 'react'
import { Modal, Divider, Button } from 'rsuite'
import { notificationHelper } from '../../../utils/NotificationHelper';

interface Props {
  show:boolean,
  onCancel:() => void,
  isFetching:boolean
}

export default class StudentProfileModal extends Component<Props,{}> {

  private onEdit = () => {
    //
  }

  private onModalOpened = () => {
    notificationHelper.showInfo('opened');
  }
  private onModalClosed = () => {
    notificationHelper.showInfo('closed');
  }

  render() {
    return (
      <Modal
        size='lg'
        backdrop='static'
        show={this.props.show}
        overflow
        onEntered={this.onModalOpened}
        onExited={this.onModalClosed}>
        <Modal.Header closeButton={false}>
          <Modal.Title style={{ width: '100%', textAlign: 'center' }}>
            <span style={{ color: '#2F363F', fontWeight: 'bold', fontSize: 20 }}>Student Profile</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>body</h6>
        </Modal.Body>
        <Modal.Footer>
          <Divider />
          <Button
            onClick={this.onEdit}
            appearance="primary"
            loading={this.props.isFetching}>
            Edit
            </Button>
          <Button
            onClick={this.props.onCancel}
            appearance="ghost"
            color='red'
            disabled={this.props.isFetching}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>
    )
  }
}
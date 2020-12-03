import { inject, observer } from 'mobx-react';
import React, { PureComponent } from 'react'
import { Modal } from 'react-bootstrap';
import { StoreAttendance } from '../../../../mobx/attendance/store.attendance';
import MyButton from '../../../components/MyButton';

interface Props {
    storeAttendance?: StoreAttendance,
}

@inject('storeAttendance')
@observer
export default class DialogAttendanceEdit extends PureComponent<Props> {

    private _close = () => {
        if (this.props.storeAttendance)
            this.props.storeAttendance.editItem = undefined;
        this.props.storeAttendance?.setShowEditDialog(false);
    }

    render() {
        return (
            <Modal
                show={this.props.storeAttendance?.showEditDialog}
                backdrop='static'
                centered
                aria-labelledby="contained-modal-title-vcenter"
                keyboard={false}
                onHide={this._close}>

                <Modal.Header>
                    <Modal.Title>Change status</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>
                        {JSON.stringify(this.props.storeAttendance?.editItem)}
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <MyButton
                        onClick={this._close}
                        variant='secondary'
                        label='close'
                        size='sm' />
                    <MyButton
                        onClick={this._close}
                        variant='primary'
                        label='submit'
                        size='sm' />
                </Modal.Footer>

            </Modal>
        );
    }

}
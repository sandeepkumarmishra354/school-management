import React, { Component, CSSProperties } from 'react'
import { Modal, Button, Icon, IconButton, Progress, Input } from 'rsuite';
import { UploadedDocs } from '../../../mobx/types/common';
import { alertHelper } from '../../../utils/Alerthelper';
import fs from 'fs';
import { remote } from 'electron';
import { storeManagement } from '../../../mobx/store/management/store.management';

interface Props {
    style?: CSSProperties,
    show: boolean,
    userType: 'TEACHER' | 'STUDENT',
    userId: string,
    onHide: () => void,
    onSuccess: (doc: UploadedDocs) => void
}
interface State {
    uploading: boolean,
    progress: number,
    selectedFile: string
}

export default class FileUploadDialog extends Component<Props, State> {

    private dialogOptions: Electron.OpenDialogOptions = {
        title: 'Choose document',
        message: 'Select a document to upload',
        properties: ['openFile'],
        filters: [{ name: 'images', extensions: ['jpg', 'jpeg', 'png'] },
        { name: 'documents', extensions: ['pdf', 'doc', 'docx', 'csv', 'xls', 'txt'] },
        { name: 'all', extensions: ['*'] }]
    };
    private MAX_FILE_SIZE = 2 * 1024 * 1024;
    private docTitle = '';
    private docNote = '';

    constructor(props: Props) {
        super(props);
        this.state = {
            uploading: false,
            progress: 0,
            selectedFile: ''
        };
    }

    private openFileDialog = () => {
        remote.dialog.showOpenDialog(remote.getCurrentWindow(), this.dialogOptions)
            .then(result => {
                if (!result.canceled) {
                    this.setState({ selectedFile: result.filePaths[0] });
                }
            })
            .catch(err => {
                alertHelper.showError(err.message);
            });
    }

    private onExit = () => {
        this.setState({
            uploading: false,
            progress: 0,
            selectedFile: ''
        });
    }

    private uploadClicked = () => {
        if (this.state.selectedFile !== '') {
            if (this.docTitle !== '') {
                fs.stat(this.state.selectedFile, (err, stat) => {
                    if (!err) {
                        if (stat.size < this.MAX_FILE_SIZE) {
                            this.startUpload();
                        } else {
                            alertHelper.showError('File size must be less than 2 MB');
                        }
                    } else {
                        alertHelper.showError(err.message);
                    }
                });
            } else {
                alertHelper.showInfo('Please specify the document title');
            }
        } else {
            alertHelper.showInfo('Choose a file');
        }
    }

    private startUpload = () => {
        this.setState({ uploading: true });
        storeManagement.uploadDoc({
            title: this.docTitle,
            note: this.docNote,
            file: this.state.selectedFile,
            userId: this.props.userId,
            userType: this.props.userType,
            onProgress: this.onProgress,
            onSuccess: this.onUploadSuccess,
            onError: this.onUploadError
        });
    }

    private onProgress = (progress: any) => {
        let { loaded, total } = progress;
        let per = (loaded * 100) / total;
        this.setState({ progress: Math.round(per) });
    }

    private onUploadSuccess = (data: UploadedDocs) => {
        this.setState({ uploading: false });
        alertHelper.showSuccess('file successfully uploaded.');
        this.props.onSuccess(data);
    }

    private onUploadError = (message: string) => {
        alertHelper.showError(message);
        this.setState({ uploading: false });
    }

    render() {
        return (
            <Modal
                backdrop='static'
                show={this.props.show}
                onHide={this.props.onHide}
                onExit={this.onExit}>
                <Modal.Header closeButton={!this.state.uploading}>
                    <h6 style={{ textAlign: 'center' }}>Upload Document</h6>
                </Modal.Header>
                <Modal.Body>
                    <div style={{
                        ...this.props.style, display: 'flex',
                        flexDirection: 'column', alignItems: 'center'
                    }}>
                        <IconButton
                            size='lg'
                            disabled={this.state.uploading}
                            onClick={this.openFileDialog}
                            icon={<Icon icon='file' size='lg' />} />
                        <p style={{ marginTop: 10 }}>{this.state.selectedFile}</p>
                        {this.state.selectedFile && !this.state.uploading && <IconButton
                            style={{ marginTop: 8 }}
                            size='xs'
                            icon={<Icon rotate={45} icon='plus' />}
                            onClick={() => { this.setState({ selectedFile: '' }); }} />}
                        <Input
                            style={{ marginTop: 10 }}
                            disabled={this.state.uploading}
                            placeholder='Enter title ex- TC, Birth Certificate etc...'
                            onChange={text => (this.docTitle = text)} />
                        <Input
                            style={{ marginTop: 10 }}
                            disabled={this.state.uploading}
                            componentClass='textarea'
                            rows={3}
                            placeholder='Enter custom note (optional)'
                            onChange={text => (this.docNote = text)} />
                        {this.state.uploading && <Progress.Line
                            percent={this.state.progress}
                            status='active' />}
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ marginTop: -15 }}>
                    <Button
                        color='blue'
                        disabled={this.state.uploading}
                        onClick={this.uploadClicked}>
                        <Icon icon="file-upload" style={{ color: '#fff', marginRight: 10 }} />
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

}
import React, { Component, CSSProperties } from 'react'
import { Icon, Loader, List } from 'rsuite';
import { observer } from 'mobx-react';
import { storeManagement } from '../../../../mobx/store/management/store.management';
import { UploadedDocs } from '../../../../mobx/types/common';

interface Props {
    style?: CSSProperties,
    store: typeof storeManagement,
    userId: string,
    userType: 'TEACHER' | 'STUDENT',
}

const styles: CSSProperties = {
    marginTop: 20, backgroundColor: '#fff',
    padding: 15, border: '0.5px solid #EAF0F1',
    borderRadius: 8
}

@observer
export default class ProfileDocsList extends Component<Props, {}> {

    constructor(props: Props) {
        super(props);
        this.state = {
            docs: [],
            fetching: true
        };
    }

    componentDidMount = () => {
        this.props.store.fetchDocs(this.props.userId, this.props.userType);
    }

    componentWillUnmount = () => {
        this.props.store.doFullCleanup();
    }

    private onRowClicked = (doc: UploadedDocs) => {
        //
    }

    private getLoader = () => (<Loader
        style={{ marginTop: 10, marginBottom: 10 }}
        content="Please wait..."
        vertical />);

    private getEmpty = () => (<h6
        style={{
            fontWeight: 400,
            marginTop: 20, marginBottom: 20
        }}>
        No documents uploaded
    </h6>);

    private getDocList = () => (<List
        style={{ width: '100%' }}
        hover bordered>
        {this.props.store.studentTeacherDocs.map(doc => (
            <List.Item
                key={doc.id}
                style={{ cursor: 'pointer' }}
                onClick={() => { this.onRowClicked(doc); }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon icon='file' size='2x' style={{ marginRight: 30, color: '#535C68' }} />
                    <div>
                        <h6 style={{ fontWeight: 600, marginBottom: 5 }}>{doc.title}</h6>
                        <h6 style={{ fontWeight: 400 }}>{doc.note}</h6>
                    </div>
                </div>
            </List.Item>
        ))}
    </List>);

    private getContent = () => {
        if (this.props.store.fetching)
            return this.getLoader();
        if (this.props.store.studentTeacherDocs.length === 0)
            return this.getEmpty();
        else
            return this.getDocList();
    }

    render() {
        return (
            <div style={{ ...styles, ...this.props.style }}>
                <h6
                    style={{ color: '#0A79DF' }}>
                    <Icon icon='file' style={{ marginRight: 15 }} />
                    Documents</h6>
                <div style={{ marginTop: 15, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {this.getContent()}
                </div>
            </div>
        );
    }

}
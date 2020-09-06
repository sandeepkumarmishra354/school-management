import React, { Component, CSSProperties } from 'react'
import { Icon, Loader } from 'rsuite';
import { UploadedDocs } from '../../../../mobx/types/common';

interface Props {
    style?: CSSProperties
}
interface State {
    docs: Array<UploadedDocs>,
    fetching: boolean
}

const styles: CSSProperties = {
    marginTop: 20, backgroundColor: '#fff',
    padding: 15, border: '0.5px solid #EAF0F1',
    borderRadius: 8
}

export default class ProfileDocsList extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            docs: [],
            fetching: false
        };
    }

    private getContent = () => {
        if (this.state.fetching)
            return (
                <Loader
                    style={{ marginTop: 10, marginBottom: 10 }}
                    content="Please wait..."
                    vertical />
            );
        if (this.state.docs.length === 0)
            return (
                <h6
                    style={{
                        fontWeight: 400,
                        marginTop: 20, marginBottom: 20
                    }}>
                    No documents uploaded
                </h6>
            );
        else
            return <h6>docs</h6>;
    }

    render() {
        return (
            <div style={{ ...styles, ...this.props.style }}>
                <h6
                    style={{ color: '#0A79DF' }}>
                    <Icon icon='file' style={{ marginRight: 15 }} />
                    Documents</h6>
                <div style={{ marginTop: 15,display:'flex',flexDirection:'column',alignItems:'center' }}>
                    {this.getContent()}
                </div>
            </div>
        );
    }

}
import React, { Component, CSSProperties } from 'react'

interface Props {
    style?: CSSProperties
}
interface State {
    //
}

export default class PageIssueCertificate extends Component<Props, State> {

    render() {
        return (
            <div style={{ ...this.props.style }}>Page certificate</div>
        );
    }

}
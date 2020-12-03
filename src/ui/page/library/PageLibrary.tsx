import React, { Component, CSSProperties } from 'react'

interface Props {
    style?: CSSProperties
}
interface State {
    //
}

export default class PageLibrary extends Component<Props, State> {

    render() {
        return (
            <div style={{ ...this.props.style }}>Page library</div>
        );
    }

}
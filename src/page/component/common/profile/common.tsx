import React, { Component, CSSProperties } from 'react'
import { List } from 'rsuite';

interface Props {
    style?: CSSProperties
    title: string|number,
    subtitle: string|number
}
interface State {
    //
}

export class MyListItem extends Component<Props, State> {

    render() {
        return (
            <List.Item >
                <h6 style={{ marginBottom: 5 }}>{this.props.title}</h6>
                <h6 style={{ fontWeight: 400 }}>{this.props.subtitle}</h6>
            </List.Item>
        );
    }

}
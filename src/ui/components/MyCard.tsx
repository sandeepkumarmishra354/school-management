import React, { Component, CSSProperties } from 'react'
import Card from 'react-bootstrap/Card';

interface Props {
    style?:CSSProperties
    shadow?:boolean
}

export default class MyCard extends Component<Props> {

    render() {
        let shadow = this.props.shadow ?? true;
        let class_name = shadow ? 'shadow-sm' : '';
        return (
            <Card className={class_name} style={this.props.style}>
                {this.props.children}
            </Card>
        );
    }

}
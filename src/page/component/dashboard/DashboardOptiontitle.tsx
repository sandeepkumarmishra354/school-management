import React, { Component, CSSProperties } from 'react'
import Icon, { IconNames } from 'rsuite/lib/Icon'

interface Props {
    style?: CSSProperties,
    title: string,
    postFix?: string,
    icon?: IconNames
}

export default class DashboardOptionTitle extends Component<Props, {}> {
    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {this.props.icon && <Icon icon={this.props.icon} size='2x' style={{ marginRight: 15 }} />}
                <h4 style={{ ...this.props.style }}>
                    {this.props.title} {
                        this.props.postFix && <span style={{ fontSize: 15 }}>{this.props.postFix}</span>
                    }
                </h4>
            </div>
        )
    }
}
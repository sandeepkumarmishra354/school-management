import React, { Component, CSSProperties } from 'react'
import { Icon, List } from 'rsuite'
import { MyListItem } from '../common/profile/common'

interface Props {
    style?: CSSProperties,
    parent: {
        fatherName: string,
        motherName: string,
        phone: string,
        email: string,
    },
}

export default class ProfileParentInfo extends Component<Props, {}> {
    render() {
        return (
            <div
                style={{ ...this.props.style, marginTop: 20, backgroundColor: '#fff', padding: 15, border: '0.5px solid #EAF0F1',borderRadius:8 }}>
                <h6
                    style={{ color: '#0A79DF' }}>
                    <Icon icon='shield' style={{ marginRight: 15 }} />
          Parent Details
        </h6>
                <div style={{ marginTop: 15 }}>
                    <List hover bordered size='sm'>
                        <MyListItem
                            title="Father Name"
                            subtitle={this.props.parent.fatherName} />
                        <MyListItem
                            title="Mother Name"
                            subtitle={this.props.parent.motherName} />
                        <MyListItem
                            title="Phone Number"
                            subtitle={this.props.parent.phone} />
                        <MyListItem
                            title="Email Address"
                            subtitle={this.props.parent.email} />
                    </List>
                </div>
            </div>
        )
    }
}
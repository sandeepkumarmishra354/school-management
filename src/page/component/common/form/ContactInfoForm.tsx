import React, { Component, CSSProperties } from 'react'
import { Panel, Input } from 'rsuite'
import { FormHeader, FormTextField } from './common'

export default class ContactInfoForm extends Component<{ style?: CSSProperties }, {}> {
    render() {
        return (
            <Panel style={{ ...this.props.style }} bodyFill bordered>
                <FormHeader icon='envelope' heading="Contact Information" />
                <div style={{ padding: 25 }}>
                    <FormTextField
                        type='email'
                        name='email' label="Email*"
                        placeholder="student@email.com"/>
                    <FormTextField
                        name='phone' label="Phone*"
                        placeholder="8052XXXXXX"/>
                    <FormTextField name='city' value="PRATAPGARH" label="City*" placeholder="enter city" />
                    <FormTextField name='state' value="UTTAR PRADESH" label="State*" placeholder="enter state" />
                    <FormTextField name='address' label="Address*" placeholder="enter full address" />
                </div>
            </Panel>
        )
    }
}
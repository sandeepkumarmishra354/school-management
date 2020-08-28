import React, { Component, CSSProperties } from 'react'
import { Panel, Input } from 'rsuite'
import { FormHeader, FormTextField } from './common'

export default class ContactInfoForm extends Component<{ style?: CSSProperties }, {}> {
    render() {
        return (
            <Panel style={{ ...this.props.style }} bodyFill shaded>
                <FormHeader icon='envelope' heading="Contact Information" />
                <div style={{ padding: 25 }}>
                    <FormTextField
                        name='email' label="Email*"
                        placeholder="student@email.com"
                        tooltip="if more than one, seperate with comma (,)" />
                    <FormTextField
                        name='phone' label="Phone*"
                        placeholder="+91 8052XXXXXX"
                        tooltip="if more than one, seperate with comma (,)" />
                    <FormTextField name='city' value="PRATAPGARH" label="City*" placeholder="enter city" />
                    <FormTextField name='state' value="UTTAR PRADESH" label="State*" placeholder="enter state" />
                    <FormTextField name='country' value="INDIA" label="Country*" placeholder="enter country" />
                    <FormTextField name='zipCode' value="230001" label="Zip code*" placeholder="enter zip code" />
                    <FormTextField name='area' label="Area*" placeholder="enter locality" />
                    <FormTextField name='landmark' label="Landmark*" placeholder="enter landmark" />
                </div>
            </Panel>
        )
    }
}
import React, { Component, CSSProperties } from 'react'
import { Panel, FormGroup, ControlLabel, FormControl, DatePicker, InputPicker } from 'rsuite';
import { FormHeader, FormTextField } from './common';

interface Props {
    style?: CSSProperties,
    gender: Array<{ name: string, value: string }>,
    category: Array<{ name: string, value: string }>,
    religion: Array<{ name: string, value: string }>,
}

export default class BasicInfoForm extends Component<Props, {}> {
    render() {
        console.log(this.props.category);
        return (
            <Panel style={{ ...this.props.style }} bodyFill shaded>
                <FormHeader icon="user" heading="Personal Information" />
                <div style={{ padding: 25 }}>
                    <FormTextField name='firstName' label="First Name*" placeholder="enter first name" />
                    <FormTextField name='lastName' label="Last Name*" placeholder="enter last name" />
                    <FormTextField name='adharNo' label="Adhar Number*" placeholder="123456789012" />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <FormGroup style={{ flex: 1 }}>
                            <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Gender*</ControlLabel>
                            <FormControl
                                className="form-input"
                                style={{ width: '90%' }}
                                name="gender"
                                labelKey="name"
                                accepter={InputPicker}
                                cleanable={false}
                                data={this.props.gender} />
                        </FormGroup>
                        <FormGroup style={{ flex: 1 }}>
                            <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Category*</ControlLabel>
                            <FormControl
                                className="form-input"
                                style={{ width: '90%' }}
                                name="category"
                                labelKey="name"
                                accepter={InputPicker}
                                cleanable={false}
                                data={this.props.category} />
                        </FormGroup>
                    </div>
                    <FormGroup style={{ flex: 1 }}>
                        <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Religion*</ControlLabel>
                        <FormControl
                            className="form-input"
                            style={{ width: '100%' }}
                            name="religion"
                            labelKey="name"
                            accepter={InputPicker}
                            cleanable={false}
                            data={this.props.religion} />
                    </FormGroup>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <FormGroup style={{ flex:1}}>
                            <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Date of Birth*</ControlLabel>
                            <FormControl
                                className="form-input"
                                style={{ width: '90%' }}
                                name="birthDate"
                                accepter={DatePicker}
                                cleanable={false}/>
                        </FormGroup>
                        <FormGroup style={{ flex: 1 }}>
                            <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Admission/Joining Date*</ControlLabel>
                            <FormControl
                                className="form-input"
                                style={{ width: '90%' }}
                                name="admissionDate"
                                accepter={DatePicker}
                                cleanable={false}/>
                        </FormGroup>
                    </div>

                    {this.props.children}
                </div>
            </Panel>
        )
    }
}
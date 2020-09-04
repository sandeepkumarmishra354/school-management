import React, { Component, CSSProperties } from 'react'
import { Panel, FormGroup, ControlLabel, FormControl, InputPicker } from 'rsuite'
import { FormHeader } from './common'

interface Props {
    style?: CSSProperties,
    status: Array<{ name: string, value: string }>,
    section: Array<{ name: string, value: string }>,
    class: Array<{ name: string, value: number }>,
    maritalStatus?: Array<{ name: string, value: string }>,
}

export default class OfficialInfoForm extends Component<Props, {}> {
  render() {
    return (
        <Panel style={{ ...this.props.style, border: '0.5px solid #EAF0F1', borderRadius: 8 }} bodyFill>
            <FormHeader icon='building2' heading="Official Information" />
            <div style={{ paddingLeft: 25, paddingRight: 25 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <FormGroup style={{ flex: 1 }}>
                        <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Class*</ControlLabel>
                        <FormControl
                            className="form-input"
                            style={{ width: '90%' }}
                            name="class"
                            labelKey="name"
                            accepter={InputPicker}
                            cleanable={false}
                            data={this.props.class} />
                    </FormGroup>
                    <FormGroup style={{ flex: 1 }}>
                        <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Section*</ControlLabel>
                        <FormControl
                            className="form-input"
                            style={{ width: '90%' }}
                            name="section"
                            labelKey="name"
                            accepter={InputPicker}
                            cleanable={false}
                            data={this.props.section} />
                    </FormGroup>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <FormGroup style={{ flex: 1 }}>
                        <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Status*</ControlLabel>
                        <FormControl
                            className="form-input"
                            style={{ width: '90%' }}
                            name="status"
                            labelKey="name"
                            accepter={InputPicker}
                            cleanable={false}
                            defaultValue="ACTIVE"
                            data={this.props.status} />
                    </FormGroup>
                    {this.props.maritalStatus ? <FormGroup style={{ flex: 1 }}>
                        <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Marital Status*</ControlLabel>
                        <FormControl
                            className="form-input"
                            style={{ width: '90%' }}
                            name="maritalStatus"
                            labelKey="name"
                            accepter={InputPicker}
                            cleanable={false}
                            defaultValue="MARRIED"
                            data={this.props.maritalStatus} />
                    </FormGroup> : <FormGroup style={{ flex: 1 }}>
                            <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Roll Number*</ControlLabel>
                            <FormControl
                                className="form-input"
                                style={{ width: '90%' }}
                                name="rollNo"
                                placeholder="enter roll number" />
                        </FormGroup>}
                </div>
            </div>
      </Panel>
    )
  }
}
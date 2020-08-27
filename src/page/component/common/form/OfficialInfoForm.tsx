import React, { Component, CSSProperties } from 'react'
import { Panel, FormGroup, ControlLabel, FormControl, InputPicker } from 'rsuite'
import { FormHeader } from './common'
import { metaDataStore } from '../../../../mobx/store/store.meta'

interface Props {
    style?: CSSProperties,
    status: Array<{ name: string, value: string }>,
    section: Array<{ name: string, value: string }>,
    class: Array<{ name: string, value: number }>,
}

export default class OfficialInfoForm extends Component<Props, {}> {
  render() {
    return (
        <Panel style={{ ...this.props.style }} bodyFill shaded>
            <FormHeader icon='building2' heading="Official Information" />
            <div style={{ padding: 25 }}>
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
                    <FormGroup style={{ flex: 1 }}>
                        <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>Roll Number*</ControlLabel>
                        <FormControl
                            className="form-input"
                            style={{ width: '90%' }}
                            name="rollNo"
                            placeholder="enter roll number"/>
                    </FormGroup>
                </div>
            </div>
      </Panel>
    )
  }
}
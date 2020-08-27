import React, { CSSProperties } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Icon } from "rsuite";
import { IconNames } from 'rsuite/lib/Icon';

interface Props {
    name: string,
    placeholder?: string,
    value?:string,
    accepter?: any,
    rest?: any,
    label: string,
    tooltip?: string,
    style?:CSSProperties,
}

export class FormTextField extends React.PureComponent<Props, {}> {

    render() {
        return (
            <FormGroup style={this.props.style}>
                <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>{this.props.label}</ControlLabel>
                <FormControl className="form-input" defaultValue={this.props.value} style={{ width: this.props.style?.width }} placeholder={this.props.placeholder} name={this.props.name} accepter={this.props.accepter} {...this.props.rest} />
                {this.props.tooltip &&
                    <HelpBlock>{this.props.tooltip}</HelpBlock>}
            </FormGroup>
        );
    }
}

export class FormHeader extends React.PureComponent<{ heading: string, style?: CSSProperties,icon?:IconNames }, {}> {

    render() {
        return (
            <div style={{
                ...this.props.style,
                width: '100%', height: 40, marginBottom: 10,
                backgroundColor: '#EAF0F1', display: 'flex', alignItems: 'center', paddingLeft: 20
            }}>
                {this.props.icon && <Icon style={{ marginRight: 15, color: '#3C40C6'}} icon={this.props.icon}/>}
                <h6 style={{ color: '#3C40C6' }}>{this.props.heading}</h6>
            </div>
        );
    }
}
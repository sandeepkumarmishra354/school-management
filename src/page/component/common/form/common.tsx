import React, { CSSProperties } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Icon, Divider } from "rsuite";
import { IconNames } from 'rsuite/lib/Icon';

interface Props {
    name: string,
    placeholder?: string,
    value?: string,
    accepter?: any,
    rest?: any,
    label: string,
    tooltip?: string,
    style?: CSSProperties,
    type?: string
}

export class FormTextField extends React.PureComponent<Props, {}> {

    render() {
        return (
            <FormGroup style={this.props.style}>
                <ControlLabel style={{ color: '#333945', fontWeight: 'bold' }}>{this.props.label}</ControlLabel>
                <FormControl
                    className="form-input"
                    defaultValue={this.props.value}
                    style={{ width: this.props.style?.width }}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    type={this.props.type}
                    accepter={this.props.accepter}
                    {...this.props.rest} />
                {this.props.tooltip &&
                    <HelpBlock>{this.props.tooltip}</HelpBlock>}
            </FormGroup>
        );
    }
}

export class FormHeader extends React.PureComponent<{ heading: string, style?: CSSProperties, icon?: IconNames }, {}> {

    render() {
        return (
            <div style={{paddingTop:15,marginBottom:20}}>
                <div style={{
                    ...this.props.style,
                    width: '100%', height: 40,
                    display: 'flex', alignItems: 'center', paddingLeft: 20
                }}>
                    {this.props.icon && <Icon style={{ marginRight: 15, color: '#0A79DF' }} icon={this.props.icon} />}
                    <h6 style={{ color: '#0A79DF' }}>{this.props.heading}</h6>
                </div>
                {/*<Divider style={{ marginLeft: 10, marginRight: 10, marginTop: 5, height: 0.5 }} />*/}
            </div>
        );
    }
}
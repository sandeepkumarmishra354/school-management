import React, { PureComponent, CSSProperties } from 'react'
import './styles.css';

interface Props {
    style?: CSSProperties,
    default?: string | number,
    onSelect?: (value: string|number) => void
}

export default class MySelectOption extends PureComponent<Props> {

    private _onSelect = (e: any) => {
        if (this.props.onSelect)
            this.props.onSelect(e.target.value);
    }

    render() {
        return (
            <select
                className='my-select-option'
                onChange={this._onSelect}
                style={this.props.style}
                defaultValue={this.props.default}>
                {this.props.children}
            </select>
        );
    }

}
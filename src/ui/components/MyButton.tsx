import React, { PureComponent, CSSProperties } from 'react'
import { ButtonProps,Button, Spinner } from 'react-bootstrap';

interface Props extends ButtonProps {
    style?:CSSProperties,
    label:string,
    loading?:boolean
}

export default class MyButton extends PureComponent<Props> {

    render() {
        return (
            <Button
            disabled={this.props.loading}
            {...this.props}>
                {this.props.loading && <Spinner style={{marginRight:5}} as='span' animation='border' size='sm' role='status' aria-hidden='true' />} {this.props.label}
            </Button>
        );
    }

}
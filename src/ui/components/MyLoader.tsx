import React, { PureComponent } from 'react'
import { Spinner } from 'react-bootstrap'

interface Props {
    content?: string
}

export default class MyLoader extends PureComponent<Props> {

    render() {
        return (
            <div style={{ width: '100%', height: '100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
                <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
                <p style={{marginTop:8}}>{this.props.content}</p>
            </div>
        );
    }

}
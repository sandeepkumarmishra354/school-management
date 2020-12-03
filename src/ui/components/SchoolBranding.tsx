import React, { PureComponent, CSSProperties } from 'react'

const styles:CSSProperties = { 
    color: '#0A79DF',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 5,
    fontWeight:'bold'
}

export default class SchoolBranding extends PureComponent {

    render() {
        return (
            <div style={styles}>
                <h5>Standard Academy</h5>
            </div>
        );
    }

}
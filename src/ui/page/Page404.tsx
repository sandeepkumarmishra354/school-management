import React, { PureComponent, CSSProperties } from 'react'
import { Link } from 'react-router-dom'

const styles:CSSProperties = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
}

export default class Page404 extends PureComponent {

    render() {
        return (
            <div style={styles}>
                <h1>404 Page not found</h1>
                <Link style={{marginTop:12}} to='/'><span style={{fontSize:17}}>go home</span></Link>
            </div>
        );
    }

}
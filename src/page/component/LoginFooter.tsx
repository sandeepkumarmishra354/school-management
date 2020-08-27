import React, { PureComponent } from 'react'
import { Footer } from 'rsuite'
import './styles/login_footer.css';

export default class LoginFooter extends PureComponent {
    render() {
        return (
            <Footer className="login-footer" style={{ position: 'absolute', bottom: 0, width: "100%", display: 'flex', flexDirection: 'column', color: '#535C68' }}>
                <h6 style={{alignSelf:'center',marginTop:8,fontSize:12,fontWeight:300}}>All rights reserved &copy; {new Date().getFullYear()}</h6>
                <div style={{alignSelf:'center'}}>
                    <a className="link" href="#" style={{marginRight:5}}>contact us</a>
                    <a className="link" href="#" style={{ marginRight: 5 }}>privacy policy</a>
                    <a className="link" href="#">terms of use</a>
                </div>
                <div className="footer-love">
                    <h6 style={{ fontWeight: 350, fontSize: 15 }}>made with &nbsp; ❤️</h6>
                </div>
            </Footer>
        )
    }
}
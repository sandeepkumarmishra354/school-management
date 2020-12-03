import React, { PureComponent } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

export default class ProtectedRoute extends PureComponent<RouteProps> {
    render() {
        let { children, ...rest } = this.props;
        let loggedIn = true;
        return (
            <Route {...rest}
                render={() => {
                    return loggedIn ? children : <Redirect to='/auth/login' />
                }} />
        );
    }
}
import React, { PureComponent } from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRootRoute from './route/routes';

export default class SchoolManagement extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <AppRootRoute />
            </BrowserRouter>
        );
    }

}
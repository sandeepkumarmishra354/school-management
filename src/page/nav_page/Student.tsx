import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import RouteStudent from '../component/routes/route.student';

class Student extends Component<RouteComponentProps, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                <RouteStudent/>
            </div>
        );
    }
}

export default withRouter(Student);
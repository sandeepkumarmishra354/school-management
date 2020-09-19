import React, { Component, CSSProperties } from 'react'

interface Props {
    style?:CSSProperties
}
interface State {
    //
}

export default class MyDashboard extends Component<Props,State> {

    render() {
        return (
            <h4>Dashboard</h4>
        );
    }

}
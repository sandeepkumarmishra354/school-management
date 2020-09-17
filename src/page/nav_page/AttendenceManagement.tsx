import React, { Component } from 'react'
import RouteAttendance from '../component/routes/route.attendance'

export default class AttendenceManagement extends Component {

    render() {
        return (
            <div style={{ width: '100%' }}>
                <RouteAttendance />
            </div>
        );
    }
}
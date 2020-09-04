import React, { Component } from 'react'
import { DateFormatter } from '../../../../utils/date_format'

type StatusType = 'ACTIVE' | 'INACTIVE' | 'DISCONTINUED';

interface Props {
    firstName: string,
    lastName: string,
    email: string,
    photo: string,
    status: StatusType,
    createdAt: Date,
    updatedAt: Date,
}

const getStatusColor = (status: StatusType) => {
    switch (status) {
        case "ACTIVE":
            return '#0A79DF';
        case "INACTIVE":
            return '#EEC213';
        default:
            return '#E71C23';
    }
}

export default class ProfilePhotoInfo extends Component<Props, {}> {
    render() {
        let { firstName, lastName, photo, createdAt, updatedAt, email } = this.props;
        return (
            <div style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: 20, backgroundColor: '#fff', marginBottom: 20, border: '0.5px solid #EAF0F1', borderRadius: 8
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: 100, height: 100 }}>
                        <img
                            style={{ width: '100%', height: '100%', borderRadius: 50, objectFit: 'fill' }}
                            src={photo}
                            alt='profile photo' />
                    </div>
                    <div style={{ marginLeft: 35 }}>
                        <h5 style={{ marginBottom: 8 }}>
                            {`${firstName} ${lastName}`}
                            <span
                                style={{ marginLeft: 15, fontSize: 10, padding: 4,borderRadius:4, backgroundColor: getStatusColor(this.props.status), color: '#fff' }}>{this.props.status}</span>
                        </h5>
                        <code style={{ color: 'blue', textDecoration: 'underline' }}>{email}</code>
                    </div>
                </div>

                <div>
                    <p><span style={{ color: 'blue' }}>CreatedAt:</span> &nbsp;{DateFormatter.mediumDate(createdAt)}</p>
                    <p><span style={{ color: 'red' }}>UpdatedAt:</span> &nbsp;{DateFormatter.mediumDate(updatedAt)}</p>
                </div>
            </div>
        )
    }
}
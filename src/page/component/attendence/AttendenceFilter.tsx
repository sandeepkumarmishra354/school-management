import React, { Component, CSSProperties } from 'react'
import { observer } from 'mobx-react'
import { DatePicker, InputPicker, Button } from 'rsuite'
import { notificationHelper } from '../../../utils/NotificationHelper'
import { attendenceStore } from '../../../mobx/store/store.attendence';
import { metaDataStore } from '../../../mobx/store/store.meta';

const pickerStyle: CSSProperties = {
    minWidth: 250,
    borderRadius:0,
    marginRight:15
}

interface Props {
    attendenceStore: typeof attendenceStore,
    metaStore: typeof metaDataStore
}

const styles: CSSProperties = {
    width: '100%', marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
    flexWrap:'wrap',
    padding: 20
}

@observer
export default class AttendenceFilter extends Component<Props, {}> {

    render() {
        return (
            <div style={styles}>
                <DatePicker
                    className="input-picker"
                    placeholder="Select date"
                    style={{ minWidth: 280, borderRadius: 0,marginRight:15 }}
                    cleanable={false}
                    onChange={(date: Date) => {
                        notificationHelper.showSuccess(date?.toISOString());
                    }} />
                <InputPicker
                    className="input-picker"
                    data={this.props.metaStore.classData}
                    style={pickerStyle}
                    labelKey="name"
                    placeholder='Select class'
                    cleanable={false} />
                <InputPicker
                    className="input-picker"
                    data={this.props.metaStore.sectionData}
                    style={pickerStyle}
                    labelKey="name"
                    placeholder='Select section'
                    cleanable={false} />
                <InputPicker
                    className="input-picker"
                    data={this.props.metaStore.userType}
                    style={pickerStyle}
                    labelKey="name"
                    placeholder='Select type'
                    cleanable={false}
                    defaultValue='student' />
                <Button
                    className='filter-btn'
                    color='blue'
                    disabled={this.props.attendenceStore.fetching}>Apply</Button>
            </div>
        )
    }
}
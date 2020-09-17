import React, { Component, CSSProperties } from 'react'
import { observer } from 'mobx-react'
import { DatePicker, InputPicker, Button } from 'rsuite'
import { notificationHelper } from '../../../utils/NotificationHelper'
import { attendenceStore } from '../../../mobx/store/attendence/store.attendence';
import { metaDataStore } from '../../../mobx/store/store.meta';

const pickerStyle: CSSProperties = {
    maxWidth: 200,
    borderRadius: 0,
    marginRight: 15
}

interface Props {
    attendenceStore: typeof attendenceStore,
    metaStore: typeof metaDataStore
}

const styles: CSSProperties = {
    width: '100%', marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 20
}

@observer
export default class AttendenceFilter extends Component<Props, {}> {

    private _class = -1;
    private skip = 0;
    private date?: Date;
    private section = 'ALL';
    private type = 'ALL';
    private status = 'ALL';

    private filter = () => {
        this.props.attendenceStore.fetch({
            class: this._class,
            section: this.section,
            skip: this.skip,
            type: this.type,
            status: this.status,
            date: this.date
        }, true);
    }

    render() {
        return (
            <div style={styles}>
                <DatePicker
                    className="input-picker"
                    placeholder="Select date"
                    style={{ minWidth: 200, borderRadius: 0, marginRight: 15 }}
                    cleanable={true}
                    defaultValue={new Date()}
                    onClean={() => (this.date = undefined)}
                    onChange={(date: Date) => (this.date = date)} />
                <InputPicker
                    className="input-picker"
                    data={this.props.metaStore.classData}
                    style={pickerStyle}
                    labelKey="name"
                    placeholder='Select class'
                    defaultValue={-1}
                    cleanable={false}
                    onChange={(v: number) => (this._class = v)} />
                <InputPicker
                    className="input-picker"
                    data={this.props.metaStore.sectionData}
                    style={pickerStyle}
                    labelKey="name"
                    placeholder='Select section'
                    defaultValue="ALL"
                    cleanable={false}
                    onChange={(s: string) => (this.section = s)} />
                <InputPicker
                    className="input-picker"
                    data={this.props.metaStore.userType}
                    style={pickerStyle}
                    labelKey="name"
                    placeholder='Select type'
                    cleanable={false}
                    defaultValue='ALL'
                    onChange={(t: string) => (this.type = t)} />
                <InputPicker
                    className="input-picker"
                    data={this.props.metaStore.attendenceStatusData}
                    style={pickerStyle}
                    labelKey="name"
                    placeholder='Select status'
                    cleanable={false}
                    defaultValue='ALL'
                    onChange={(s: string) => (this.status = s)} />
                <Button
                    className='filter-btn'
                    color='blue'
                    onClick={this.filter}
                    disabled={this.props.attendenceStore.fetching}>Apply</Button>
            </div>
        )
    }
}
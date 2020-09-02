import React, { Component, CSSProperties } from 'react';
import { InputPicker, Button } from 'rsuite';
import { metaDataStore } from '../../../mobx/store/store.meta';
import { storeTeacher } from '../../../mobx/store/teacher/store.teacher';

interface Props {
    storeMeta: typeof metaDataStore,
    storeTeacher: typeof storeTeacher
}

const pickerStyle: CSSProperties = {
    maxWidth: 200,
    borderRadius: 0,
    marginRight: 15
}
const styles: CSSProperties = {
    width: '100%', marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 20
}
export default class TeacherFilter extends Component<Props, {}> {

    private _class = -1;
    private section = 'ALL';
    private status = 'ALL';

    render() {
        return (
            <div style={styles}>
                <InputPicker
                    className="input-picker"
                    data={this.props.storeMeta.statusData}
                    style={pickerStyle}
                    labelKey="name"
                    placeholder='Select status'
                    cleanable={false}
                    defaultValue='ALL'
                    onChange={(value) => { this.status = value }} />
                <Button
                    className='filter-btn'
                    color='blue'
                    disabled={this.props.storeTeacher.listFetching}
                    onClick={() => {
                        this.props.storeTeacher.fetchList({
                            class: this._class, section: this.section,
                            skip: 0, status: this.status
                        },true);
                    }}>Apply</Button>
            </div>
        )
    }
}
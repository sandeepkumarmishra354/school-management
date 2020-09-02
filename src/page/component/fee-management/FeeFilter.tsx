import React, { Component, CSSProperties } from 'react';
import { InputPicker, Button, DatePicker } from 'rsuite';
import { metaDataStore } from '../../../mobx/store/store.meta';
import { storeFee } from '../../../mobx/store/fee/store.fee';

interface Props {
    storeMeta: typeof metaDataStore,
    storeFee: typeof storeFee
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
export default class FeeFilter extends Component<Props, {}> {

    private _class = -1;
    private section = 'ALL';
    private status = 'ALL';
    private month?: Date;

    render() {
        return (
            <div style={styles}>
                <DatePicker
                    className="input-picker"
                    placeholder="Select date"
                    style={{ minWidth: 200, borderRadius: 0, marginRight: 15 }}
                    cleanable={true}
                    onClean={() => (this.month = undefined)}
                    onChange={(date: Date) => (this.month = date)} />
                <InputPicker
                    className="input-picker"
                    data={this.props.storeMeta.classData}
                    style={pickerStyle}
                    labelKey="name"
                    placeholder='Select class'
                    cleanable={false}
                    defaultValue={-1}
                    onChange={(value) => { this._class = value }} />
                <InputPicker
                    className="input-picker"
                    data={this.props.storeMeta.sectionData}
                    style={pickerStyle}
                    labelKey="name"
                    placeholder='Select section'
                    cleanable={false}
                    defaultValue='ALL'
                    onChange={(value) => { this.section = value }} />
                <InputPicker
                    className="input-picker"
                    data={this.props.storeMeta.feeStatusData}
                    style={pickerStyle}
                    labelKey="name"
                    placeholder='Select status'
                    cleanable={false}
                    defaultValue='ALL'
                    onChange={(value) => { this.status = value }} />
                <Button
                    className='filter-btn'
                    color='blue'
                    disabled={this.props.storeFee.listFetching}
                    onClick={() => {
                        this.props.storeFee.fetchList({
                            class: this._class, section: this.section,
                            skip: 0, status: this.status, month: this.month
                        },true);
                    }}>Apply</Button>
            </div>
        )
    }
}
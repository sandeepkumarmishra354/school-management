import React, { Component, CSSProperties } from 'react';
import { InputPicker, Button } from 'rsuite';
import { storeStudent } from '../../../mobx/store/student/store.student';
import { metaDataStore } from '../../../mobx/store/store.meta';

interface Props {
  storeMeta: typeof metaDataStore,
  storeStudent: typeof storeStudent
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
export default class StudentFilter extends Component<Props, {}> {

  private _class = -1;
  private section = 'ALL';
  private status = 'ALL';

  render() {
    return (
      <div style={styles}>
        <InputPicker
          className="input-picker"
          data={this.props.storeMeta.classData}
          style={pickerStyle}
          labelKey="name"
          placeholder='Select class'
          cleanable={false}
          onChange={(value) => { this._class = value }} />
        <InputPicker
          className="input-picker"
          data={this.props.storeMeta.sectionData}
          style={pickerStyle}
          labelKey="name"
          placeholder='Select section'
          cleanable={false}
          onChange={(value) => { this.section = value }} />
        <InputPicker
          className="input-picker"
          data={this.props.storeMeta.statusData}
          style={pickerStyle}
          labelKey="name"
          placeholder='Select status'
          cleanable={false}
          onChange={(value) => { this.status = value }} />
        <Button
          className='filter-btn'
          color='blue'
          disabled={this.props.storeStudent.listFetching}
          onClick={() => {
            this.props.storeStudent.fetchList({
              class: this._class, section: this.section,
              skip: 0, status: this.status
            },true);
          }}>FILTER</Button>
      </div>
    )
  }
}
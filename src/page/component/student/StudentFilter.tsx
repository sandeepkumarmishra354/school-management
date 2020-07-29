import React, { Component, CSSProperties } from 'react';
import { FlexboxGrid, InputPicker, Col, Button } from 'rsuite';
import { storeClassSection } from '../../../mobx/store/store.class_sec';
import './styles/students.css';

interface Props {
  storeClassSection: typeof storeClassSection
}
const headingStyle: CSSProperties = {
  marginBottom: 15,
  color: '#535C68',
  fontWeight: 300
}

const pickerStyle: CSSProperties = {
  minWidth: 250,
  borderColor: '#BB2CD9',
}
export default class StudentFilter extends Component<Props, {}> {

  private readonly col = 20;
  private readonly md = 6;

  render() {
    return (
      <div style={{ width: '100%' }} className='filter-div'>
        <FlexboxGrid style={{ marginLeft: 15 }} justify='space-around' align='middle'>
          <FlexboxGrid.Item
            componentClass={Col}
            style={{ marginBottom: 15 }}
            colspan={this.col} md={this.md}>
            <h5 style={headingStyle}>Select Class</h5>
            <InputPicker
              className="input-picker"
              data={this.props.storeClassSection.classData}
              style={pickerStyle}
              labelKey="name"
              placeholder='Select class'
              cleanable={false}
              defaultValue={0} />
          </FlexboxGrid.Item>

          <FlexboxGrid.Item
            componentClass={Col}
            style={{ marginBottom: 15 }}
            colspan={this.col} md={this.md}>
            <h5 style={headingStyle}>Select section</h5>
            <InputPicker
              className="input-picker"
              data={this.props.storeClassSection.sectionData}
              style={pickerStyle}
              labelKey="name"
              placeholder='Select section'
              cleanable={false}
              defaultValue='All' />
          </FlexboxGrid.Item>

          <FlexboxGrid.Item
            componentClass={Col}
            style={{ marginBottom: 15 }}
            colspan={this.col} md={this.md}>
            <Button
              className='filter-btn'
              color='orange'
              style={{marginTop:35,borderRadius:30 }}>
                Click to Filter
                </Button>
                </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    )
  }
}
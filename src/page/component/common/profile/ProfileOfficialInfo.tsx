import React, { Component, CSSProperties } from 'react'
import { Icon, List } from 'rsuite'
import { MyListItem } from './common'
import { DateFormatter } from '../../../../utils/date_format'

interface Props {
  style?: CSSProperties,
  class:number,
  section:string,
  rollNo?:string,
  date:Date
}

export default class ProfileOfficialInfo extends Component<Props,{}> {
  render() {
    return (
      <div style={{ ...this.props.style, marginTop: 20, backgroundColor: '#fff', padding: 15, border: '0.5px solid #EAF0F1', borderRadius: 8 }}>
        <h6 style={{ color: '#0A79DF' }}>
          <Icon icon='building' style={{ marginRight: 15 }} />
          Official Details
        </h6>
        <div style={{ marginTop: 15 }}>
          <List hover bordered size='sm'>
            <MyListItem
              title="Class"
              subtitle={this.props.class} />
            <MyListItem
              title="Section"
              subtitle={this.props.section} />
            {this.props.rollNo && <MyListItem
              title="Roll Number"
              subtitle={this.props.rollNo} />}
            <MyListItem
              title="Admission / Joining Date"
              subtitle={DateFormatter.mediumDate(this.props.date)} />
          </List>
        </div>
        </div>
    )
  }
}
import React, { Component, CSSProperties } from 'react'
import { List, Icon } from 'rsuite'
import { MyListItem } from './common'
import { DateFormatter } from '../../../../utils/date_format'

interface Props {
  style?:CSSProperties,
  gender: string,
  category: string,
  religion: string,
  adharNo: string,
  birthday: Date,
}

export default class ProfilePersonalInfo extends Component<Props,{}> {
  render() {
    return (
      <div style={{ ...this.props.style, backgroundColor: '#fff', padding: 15, border: '0.5px solid #EAF0F1', borderRadius: 8}}>
        <h6 style={{ color: '#0A79DF' }}>
          <Icon icon='user' style={{marginRight:15}}/>
          Personal Details
        </h6>
        <div style={{marginTop:15}}>
          <List hover bordered size='sm'>
            <MyListItem
              title="Gender"
              subtitle={this.props.gender}/>

            <MyListItem
              title="Category"
              subtitle={this.props.category}/>

            <MyListItem
              title="Religion"
              subtitle={this.props.religion}/>

            <MyListItem
              title="Birthday"
              subtitle={DateFormatter.mediumDate(this.props.birthday)}/>

            <MyListItem
              title="Adhar Number"
              subtitle={this.props.adharNo}/>
          </List>
        </div>

      </div>
    )
  }
}
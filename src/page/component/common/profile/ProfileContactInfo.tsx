import React, { Component, CSSProperties } from 'react'
import { Icon, List } from 'rsuite'
import { MyListItem } from './common'
import { AddressOption } from '../../../../mobx/types/common'

interface Props {
  style?: CSSProperties,
  address:AddressOption,
  phone:string
}

export default class ProfileContactInfo extends Component<Props,{}> {
  render() {
    return (
      <div style={{ ...this.props.style, backgroundColor: '#fff', padding: 15, border: '0.5px solid #EAF0F1', borderRadius: 8 }}>
        <h6 style={{ color: '#3498FF' }}>
          <Icon icon='envelope-open' style={{ marginRight: 15 }} />
          Contact Details
        </h6>
        <div style={{ marginTop: 15 }}>
          <List hover bordered size='sm'>
            <MyListItem
              title="Phone Number"
              subtitle={this.props.phone}/>
            <MyListItem
              title="City"
              subtitle={this.props.address.city}/>
            <MyListItem
              title="State"
              subtitle={this.props.address.state}/>
            <MyListItem
              title="Address"
              subtitle={this.props.address.address}/>
          </List>
        </div>
      </div>
    )
  }
}
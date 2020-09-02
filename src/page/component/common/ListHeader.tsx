import React, { Component, CSSProperties } from 'react'
import { IconButton, Icon, Whisper, Tooltip } from 'rsuite'

interface Props {
  heading: string,
  onCreate?:() => void,
  onRefresh:() => void,
}

const containerStyle: CSSProperties = {
  width: '100%', height: 50,
  backgroundColor: '#3C40C6', display: 'flex',
  alignItems: 'center', justifyContent: 'space-between'
}
const headingStyle: CSSProperties = {
  color: '#fff', marginLeft: 25
}
const actionDivStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  paddingRight: 15
}

export default class ListHeader extends Component<Props, {}> {

  constructor(props: Props) {
    super(props);
    this.state = {
      modelShow: false
    };
  }

  render() {
    return (
      <div style={containerStyle}>
        <h5 style={headingStyle}>{this.props.heading}</h5>
        <div style={actionDivStyle}>

          <Whisper
          style={{marginRight:8}}
            placement='top' trigger='hover'
            speaker={<Tooltip>refresh</Tooltip>}>
            <IconButton style={{ backgroundColor: 'transparent' }} icon={<Icon icon='refresh' style={{ color: '#fff' }} />} onClick={this.props.onRefresh} />
          </Whisper>

          {this.props.onCreate && <Whisper
            placement='top' trigger='hover'
            speaker={<Tooltip>create new</Tooltip>}>
            <IconButton style={{ backgroundColor: 'transparent' }} icon={<Icon icon='plus' style={{ color: '#fff' }} />} onClick={this.props.onCreate} />
          </Whisper>}
          {this.props.children}
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface Props extends RouteComponentProps<any> {

}

@observer
class SaleryManagement extends Component<Props,{}> {
  render() {
    return (
      <h1>Salery management</h1>
    )
  }
}

export default withRouter(SaleryManagement);
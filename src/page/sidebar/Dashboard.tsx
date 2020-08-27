import React, { Component } from 'react'
import { Container } from 'rsuite'
import "./styles/dashboard.css";
import AttendenceContainer from '../component/dashboard/AttendenceContainer';
import FeeCollectionGraph from '../component/dashboard/FeeCollectionGraph';
import { storeFeeCollection } from '../../mobx/store/store.fee.collection';
import QuickOptions from '../component/dashboard/QuickOptions';
import { dashboardStore } from '../../mobx/store/store.dashboard';

interface Props {
  dashboard: typeof dashboardStore
}

export default class Dashboard extends Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  componentDidMount = () => {
    dashboardStore.fetchAttendence();
    dashboardStore.fetchFee();
  }

  render() {
    return (
      <Container style={{ width: '100%' }} className="dashboard-container">
        <QuickOptions />
        <AttendenceContainer
          dashboardStore={dashboardStore} />
        <FeeCollectionGraph dashboardStore={dashboardStore} />
      </Container>
    )
  }
}
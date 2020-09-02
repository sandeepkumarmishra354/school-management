import React, { Component } from 'react'
import { Container } from 'rsuite'
import "./styles/dashboard.css";
import AttendenceContainer from '../component/dashboard/AttendenceContainer';
import FeeCollectionGraph from '../component/dashboard/FeeCollectionGraph';
import QuickOptions from '../component/dashboard/QuickOptions';
import { dashboardStore } from '../../mobx/store/dashboard/store.dashboard';
import CounterContainer from '../component/dashboard/CounterContainer';

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
        <CounterContainer/>
        <QuickOptions />
        <AttendenceContainer
          dashboardStore={dashboardStore} />
        <FeeCollectionGraph dashboardStore={dashboardStore} />
      </Container>
    )
  }
}
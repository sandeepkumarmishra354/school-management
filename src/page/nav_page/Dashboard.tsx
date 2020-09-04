import React, { Component } from 'react'
import "./styles/dashboard.css";
import AttendenceContainer from '../component/dashboard/AttendenceContainer';
import FeeCollectionGraph from '../component/dashboard/FeeCollectionGraph';
import QuickOptions from '../component/dashboard/QuickOptions';
import { dashboardStore } from '../../mobx/store/dashboard/store.dashboard';
import CounterContainer from '../component/dashboard/CounterContainer';
import { Panel } from 'rsuite';

export default class Dashboard extends Component {

  render() {
    return (
      <Panel>
        <CounterContainer/>
        <QuickOptions />
        <AttendenceContainer
          dashboardStore={dashboardStore} />
        <FeeCollectionGraph dashboardStore={dashboardStore} />
      </Panel>
    )
  }
}
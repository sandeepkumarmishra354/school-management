import React, { Component } from 'react'
import "./styles/dashboard.css";
import AttendenceContainer from '../component/dashboard/AttendenceContainer';
import FeeCollectionGraph from '../component/dashboard/FeeCollectionGraph';
import QuickOptions from '../component/dashboard/QuickOptions';
import CounterContainer from '../component/dashboard/CounterContainer';
import { Panel } from 'rsuite';
import { storeStaffCount } from '../../mobx/store/dashboard/store.staffcount';
import { storeAttendanceCount } from '../../mobx/store/dashboard/store.attendancecount';
import { storeFeeCollection } from '../../mobx/store/dashboard/store.feecollection';

export default class Dashboard extends Component {

  render() {
    return (
      <Panel>
        <QuickOptions />
        <CounterContainer
          store={storeStaffCount} />
        <AttendenceContainer
          store={storeAttendanceCount} />
        <FeeCollectionGraph
          store={storeFeeCollection} />
      </Panel>
    )
  }
}
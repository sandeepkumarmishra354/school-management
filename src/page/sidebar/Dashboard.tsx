import React, { Component } from 'react'
import { Container } from 'rsuite'
import "./styles/dashboard.css";
import { authStore } from '../../mobx/store/store.auth';
import AttendenceContainer from '../component/dashboard/AttendenceContainer';
import { attendenceStore } from '../../mobx/store/store.attendence';
import FeeCollectionGraph from '../component/dashboard/FeeCollectionGraph';
import { storeFeeCollection } from '../../mobx/store/store.fee.collection';
import QuickOptions from '../component/dashboard/QuickOptions';

interface Props {
  authStore: typeof authStore
}

export default class Dashboard extends Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ width: '100%' }} className="dashboard-container">
        <QuickOptions />
        <AttendenceContainer attendenceStore={attendenceStore} />
        <FeeCollectionGraph feeStore={storeFeeCollection} />
      </Container>
    )
  }
}
import React from 'react';
import { FlexboxGrid, Col, Loader } from 'rsuite';
import AttendenceCard from './AttendenceCard';
import { observer } from 'mobx-react';
import { dashboardStore } from '../../../mobx/store/dashboard/store.dashboard';
import DashboardOptionTitle from './DashboardOptiontitle';

interface Props {
    dashboardStore: typeof dashboardStore
}

@observer
export default class AttendenceContainer extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        let data = this.props.dashboardStore.attendence;
        return (
            <div style={{ width: '100%', transition: 'all 1s', marginBottom: 45 }}>
                <DashboardOptionTitle
                    style={{ marginBottom: 25 }}
                    title="Attendence"
                    postFix="(today)" />
                {data ? <FlexboxGrid justify='space-around'>
                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={6}>
                        <AttendenceCard title="Student" presentPercent={data.student.prePer} absentPercent={data.student.absPer} total={data.student.total} present={data.student.present} absent={data.student.absent} />
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={6}>
                        <AttendenceCard title="Teacher" presentPercent={data.teacher.prePer} absentPercent={data.teacher.absPer} total={data.teacher.total} present={data.teacher.present} absent={data.teacher.absent} />
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={6}>
                        <AttendenceCard title="Overall" presentPercent={data.overall.prePer} absentPercent={data.overall.absPer} total={data.overall.total} present={data.overall.present} absent={data.overall.absent} />
                    </FlexboxGrid.Item>
                </FlexboxGrid> : <Loader content='Please wait...' />}
            </div>
        )
    }
}
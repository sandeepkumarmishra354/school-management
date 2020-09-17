import React from 'react';
import { FlexboxGrid, Col } from 'rsuite';
import AttendenceCard from './AttendenceCard';
import { observer } from 'mobx-react';
import DashboardOptionTitle from './DashboardOptiontitle';
import { StoreAttendanceCount } from '../../../mobx/store/dashboard/store.attendancecount';

interface Props {
    store: StoreAttendanceCount
}

@observer
export default class AttendenceContainer extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.store.fetch();
    }

    render() {
        let fetching = this.props.store.fetching;
        let { student, teacher, overall } = this.props.store.attendanceData;
        return (
            <div style={{ width: '100%', transition: 'all 1s', marginBottom: 45 }}>
                <DashboardOptionTitle
                    style={{ marginBottom: 25 }}
                    title="Attendence"
                    postFix="(today)" />
                <FlexboxGrid justify='space-around'>
                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={6}>
                        <AttendenceCard
                        loading={fetching}
                        title="Student"
                        data={student}/>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={6}>
                        <AttendenceCard
                            loading={fetching}
                        title="Teacher"
                        data={teacher}/>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={6}>
                        <AttendenceCard
                            loading={fetching}
                        title="Overall"
                        data={overall}/>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
        )
    }
}
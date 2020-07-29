import React, { PureComponent } from 'react';
import { FlexboxGrid, Col, Loader } from 'rsuite';
import AttendenceCard from './AttendenceCard';
import { attendenceStore } from '../../../mobx/store/store.attendence';
import { observer } from 'mobx-react';

interface Props {
    attendenceStore: typeof attendenceStore
}

@observer
export default class AttendenceContainer extends PureComponent<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        let { attendenceStore } = this.props;
        return (
            <div style={{ width: '100%', transition: 'all 1s', marginBottom: 45 }}>
                <h4 style={{ marginBottom: 45 }}>Attendence <span style={{ fontSize: 16 }}>(today)</span> </h4>
                {attendenceStore.fetching ? <Loader content='Please wait...' /> : <FlexboxGrid justify='space-around'>
                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={6}>
                        <AttendenceCard title={attendenceStore.studentAttendence.title} presentPercent={attendenceStore.studentPresentPer} absentPercent={attendenceStore.studentAbsentPer} total={attendenceStore.totalStudent} present={attendenceStore.studentAttendence.totalPresent} absent={attendenceStore.studentAttendence.totalAbsent} />
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={6}>
                        <AttendenceCard title={attendenceStore.teacherAttendence.title} presentPercent={attendenceStore.teacherPresentPer} absentPercent={attendenceStore.teacherAbsentPer} total={attendenceStore.totalTeacher} present={attendenceStore.teacherAttendence.totalPresent} absent={attendenceStore.teacherAttendence.totalAbsent} />
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={6}>
                        <AttendenceCard title={attendenceStore.overallAttendence.title} presentPercent={attendenceStore.overallPresentPer} absentPercent={attendenceStore.overallAbsentPer} total={attendenceStore.overall} present={attendenceStore.overallAttendence.totalPresent} absent={attendenceStore.overallAttendence.totalAbsent} />
                    </FlexboxGrid.Item>
                </FlexboxGrid>}
            </div>
        )
    }
}
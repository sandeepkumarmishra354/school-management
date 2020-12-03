import { inject, observer } from 'mobx-react';
import React, { PureComponent, CSSProperties } from 'react'
import { StoreAttendanceCount } from '../../../../mobx/dashboard/store.attendance_count';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ReactResizeDetector from 'react-resize-detector';
import Card from 'react-bootstrap/Card';
import MyCard from '../../../components/MyCard';

interface Props {
    storeAttendanceCount?: StoreAttendanceCount
}

const styles: CSSProperties = {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    flexDirection: 'column',
}

@inject('storeAttendanceCount')
@observer
export default class AttendanceCount extends PureComponent<Props, { width: number, height: number }> {

    private _panelRef = React.createRef<HTMLDivElement>();

    constructor(props: Props) {
        super(props);
        this.state = { width: 0, height: 0 };
    }

    private _onResize = (width: number, height: number) => {
        this.setState({ width, height });
    }

    render() {
        return (
            <div style={{ width: '100%', display: 'flex', flex: 1.5, padding: 5 }}>
                <MyCard
                    style={{ width: '100%', height: 350 }}>
                    <Card.Header>Today's attendance report</Card.Header>
                    <Card.Body ref={this._panelRef}>
                        <BarChart
                            margin={{bottom:55}}
                            height={330}
                            width={this.state.width}
                            data={this.props.storeAttendanceCount?.attendanceData}>
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='class' />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey='present' stackId='a' fill='#1287A5' />
                            <Bar dataKey='absent' stackId='a' fill='#616C6F' />
                        </BarChart>
                        <ReactResizeDetector
                            handleWidth
                            targetRef={this._panelRef}
                            onResize={this._onResize} />
                    </Card.Body>
                </MyCard>
            </div>
        );
    }

}
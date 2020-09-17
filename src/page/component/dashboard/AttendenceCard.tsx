import React, { PureComponent, CSSProperties } from 'react'
import { Panel, Progress, Divider, Loader } from 'rsuite'
import { AttendanceCount } from '../../../mobx/store/dashboard/store.attendancecount'

const panelDivStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}

const circleStyle: CSSProperties = {
    width: 80,
    marginRight: 35
}

const headingStyle: CSSProperties = {
    fontWeight: 300,
    fontSize: 18,
    color: '#535C68'
}

const headingDivStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const infoDivStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: -8,
    justifyContent: 'space-between'
}

interface Props {
    title: string,
    loading: boolean,
    data: AttendanceCount
}

export default class AttendenceCard extends PureComponent<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        let { data, loading } = this.props;
        return (
            <Panel style={{ backgroundColor: '#fff' }} shaded header={<div style={headingDivStyle}>
                <h4 style={headingStyle}>{this.props.title}</h4>
                <h6 style={{ color: '#E74292', fontWeight: 400 }}>{data.total}</h6>
            </div>}>
                <Divider style={{ marginTop: -25, height: 0.5 }} />
                {loading ? <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                    <Loader />
                </div> : <div style={panelDivStyle}>
                    <div style={circleStyle}>
                        <Progress.Circle percent={data.presentPercent} strokeColor="#45CE30" />
                    </div>
                    <div style={{ ...circleStyle, marginRight: 0 }}>
                        <Progress.Circle percent={data.absentPercent} strokeColor='#E71C23' />
                    </div>
                </div>}
                <div style={infoDivStyle}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <div style={{ ...infoDivStyle, marginTop: 0, marginRight: 8 }}>
                            <div style={{ height: 8, width: 8, borderRadius: '50%', backgroundColor: '#45CE30', marginRight: 3 }} />
                            <h6 style={{ color: '#535C68', fontWeight: 350, fontSize: 14 }}>{data.totalPresent}</h6>
                        </div>
                        <div style={{ ...infoDivStyle, marginTop: 0 }}>
                            <div style={{ height: 8, width: 8, borderRadius: '50%', backgroundColor: '#E71C23', marginRight: 3 }} />
                            <h6 style={{ color: '#535C68', fontWeight: 350, fontSize: 14 }}>{data.totalAbsent}</h6>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <div style={{ ...infoDivStyle, marginTop: 0, marginRight: 8 }}>
                            <div style={{ height: 8, width: 8, borderRadius: '50%', backgroundColor: '#45CE30', marginRight: 3 }} />
                            <h6 style={{ color: '#535C68', fontWeight: 350, fontSize: 14 }}>P</h6>
                        </div>
                        <div style={{ ...infoDivStyle, marginTop: 0 }}>
                            <div style={{ height: 8, width: 8, borderRadius: '50%', backgroundColor: '#E71C23', marginRight: 3 }} />
                            <h6 style={{ color: '#535C68', fontWeight: 350, fontSize: 14 }}>A</h6>
                        </div>
                    </div>
                </div>
            </Panel>
        )
    }
}
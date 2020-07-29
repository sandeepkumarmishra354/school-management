import React, { Component, CSSProperties } from 'react'
import { observer } from 'mobx-react'
import { FlexboxGrid, Col, DatePicker, InputPicker, Button } from 'rsuite'
import { notificationHelper } from '../../../utils/NotificationHelper'
import './styles/attendence.css';
import { storeClassSection } from '../../../mobx/store/store.class_sec';

const headingStyle: CSSProperties = {
    marginBottom: 15,
    color: '#535C68',
    fontWeight: 300
}

const pickerStyle: CSSProperties = {
    minWidth: 250,
    borderColor: '#BB2CD9',
}

interface Props {
    storeClassSection: typeof storeClassSection
}

@observer
export default class AttendenceFilter extends Component<Props, {}> {

    private readonly colmd = 6.5;

    render() {
        return (
            <div style={{ width: '100%', }}>
                <FlexboxGrid style={{ marginLeft: 15 }} justify='space-around' align='middle'>
                    <FlexboxGrid.Item
                        componentClass={Col}
                        style={{ marginBottom: 15 }}
                        colspan={this.colmd} md={this.colmd}>
                        <h5 style={headingStyle}>Select date</h5>
                        <DatePicker
                            className="input-picker picker-date"
                            defaultValue={new Date()}
                            style={{ minWidth: 280 }}
                            cleanable={false}
                            onChange={(date: Date) => {
                                notificationHelper.showSuccess(date?.toISOString());
                            }} />
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item
                        componentClass={Col}
                        style={{ marginBottom: 15 }}
                        colspan={this.colmd} md={this.colmd}>
                        <h5 style={headingStyle}>Select Class</h5>
                        <InputPicker
                            className="input-picker"
                            data={this.props.storeClassSection.classData}
                            style={pickerStyle}
                            labelKey="name"
                            placeholder='Select class'
                            cleanable={false}
                            defaultValue={0} />
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item
                        componentClass={Col}
                        style={{ marginBottom: 15 }}
                        colspan={this.colmd} md={this.colmd}>
                        <h5 style={headingStyle}>Select section</h5>
                        <InputPicker
                            className="input-picker"
                            data={this.props.storeClassSection.sectionData}
                            style={pickerStyle}
                            labelKey="name"
                            placeholder='Select section'
                            cleanable={false}
                            defaultValue='All' />
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item
                        componentClass={Col}
                        style={{ marginBottom: 15 }}
                        colspan={this.colmd} md={this.colmd}>
                        <h5 style={headingStyle}>Attendence of</h5>
                        <InputPicker
                            className="input-picker"
                            data={this.props.storeClassSection.studentTeacherData}
                            style={pickerStyle}
                            labelKey="name"
                            placeholder='Select section'
                            cleanable={false}
                            defaultValue='student' />
                    </FlexboxGrid.Item>
                </FlexboxGrid>

                <div style={{ width: '100%', marginTop: 10, marginLeft: 30, marginBottom: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                    className='filter-btn'
                    color='orange'
                    style={{ width: 250 }}
                    disabled={this.props.storeClassSection.isBusy}
                    onClick={this.props.storeClassSection.filter}>Click to Filter</Button>
                </div>
            </div>
        )
    }
}
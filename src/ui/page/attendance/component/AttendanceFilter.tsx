import { inject, observer } from 'mobx-react';
import React, { PureComponent } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { AttendanceListSize, AttendanceStatus, AttendanceType, StoreAttendanceFilter } from '../../../../mobx/attendance/store.attendance_filter';
import MyButton from '../../../components/MyButton';
import MyCard from '../../../components/MyCard';
import MySelectOption from '../../../components/MySelectOption';

interface Props {
    storeAttendanceFilter?: StoreAttendanceFilter
}

@inject('storeAttendanceFilter')
@observer
export default class AttendanceFilter extends PureComponent<Props> {

    private _class = 'all';
    private _section = 'all';
    private _size:AttendanceListSize = 10;
    private _status: AttendanceStatus = 'all';
    private _type: AttendanceType = 'all';

    private _onClassChanged = (_class: string|number) => {
        this._class = _class as string;
    }
    private _onSectionChanged = (_section: string | number) => {
        this._section = _section as string;
    }
    private _onStatusChanged = (_status: string | number) => {
        this._status = _status as AttendanceStatus;
    }
    private _onTypeChanged = (_type: string | number) => {
        this._type = _type as AttendanceType;
    }
    private _onSizeChanged = (_size: number|string) => {
        this._size = _size as AttendanceListSize;
    }

    private _onApplyClick = () => {
        this.props.storeAttendanceFilter?.applyFilter({
            class: this._class,
            section: this._section,
            status: this._status,
            type: this._type,
            size:this._size
        });
    }

    render() {
        return (
            <MyCard shadow={false} style={{ marginBottom: 5 }}>
                <Card.Header>FILTER OPTION</Card.Header>
                <Card.Body>
                    <Row>
                        <Col lg='2' style={{ padding: 3 }}>
                            <MySelectOption
                                style={{ width: '95%' }}
                                onSelect={this._onClassChanged}>
                                {this.props.storeAttendanceFilter?.dataClass.map((v) => {
                                    return (
                                        <option key={v.value} value={v.value}>
                                            {v.label}
                                        </option>
                                    );
                                })}
                            </MySelectOption>
                        </Col>
                        <Col lg='2' style={{ padding: 3 }}>
                            <MySelectOption
                                style={{ width: '95%' }}
                                onSelect={this._onSectionChanged}>
                                {this.props.storeAttendanceFilter?.dataSection.map((v) => {
                                    return (
                                        <option key={v.value} value={v.value}>
                                            {v.label}
                                        </option>
                                    );
                                })}
                            </MySelectOption>
                        </Col>
                        <Col lg='2' style={{ padding: 3 }}>
                            <MySelectOption
                                style={{ width: '95%' }}
                                onSelect={this._onStatusChanged}>
                                {this.props.storeAttendanceFilter?.dataStatus.map((v) => {
                                    return (
                                        <option key={v.value} value={v.value}>
                                            {v.label}
                                        </option>
                                    );
                                })}
                            </MySelectOption>
                        </Col>
                        <Col lg='2' style={{ padding: 3 }}>
                            <MySelectOption
                                style={{ width: '95%' }}
                                default='student'
                                onSelect={this._onTypeChanged}>
                                {this.props.storeAttendanceFilter?.dataAttendanceOf.map((v) => {
                                    return (
                                        <option key={v.value} value={v.value}>
                                            {v.label}
                                        </option>
                                    );
                                })}
                            </MySelectOption>
                        </Col>
                        <Col lg='2' style={{ padding: 3 }}>
                            <MySelectOption
                                style={{ width: '95%' }}
                                default={10}
                                onSelect={this._onSizeChanged}>
                                {this.props.storeAttendanceFilter?.dataTableSize.map((v) => {
                                    return (
                                        <option key={v.value} value={v.value}>
                                            {v.label}
                                        </option>
                                    );
                                })}
                            </MySelectOption>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <MyButton
                        size='sm'
                        style={{ paddingLeft: 10, paddingRight: 10 }}
                        label='APPLY FILTER'
                        loading={this.props.storeAttendanceFilter?.fetching}
                        onClick={this._onApplyClick}>
                    </MyButton>
                </Card.Footer>
            </MyCard>
        );
    }

}
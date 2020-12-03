import { inject, observer } from 'mobx-react';
import React, { PureComponent, CSSProperties, ReactElement } from 'react'
import { Row, Col } from 'react-bootstrap';
import { StoreStaffCount } from '../../../../mobx/dashboard/store.staff_count';
import MyCard from '../../../components/MyCard';
import { FaMale, FaFemale, FaUsers } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

interface Props {
    storeStaffCount?: StoreStaffCount,
    style?: CSSProperties
}

const panelStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    margin: 5
}

const CountIcon = (props: { icon: ReactElement<IconType>, bgColor: string, color?: string }) => {
    let color = props.color ?? '#fff';
    return (<div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 15, backgroundColor: props.bgColor, width: 60, height: 60, borderRadius: 8 }}>
        {props.icon}
    </div>);
}
const CountData = (props: { count: number, title: string }) => {
    let { count, title } = props;
    return (
        <div style={{ marginLeft: 20 }}>
            <h5 style={{ fontWeight: 400 }}>{title}</h5>
            <h5 style={{ marginTop: 6 }}>{count}</h5>
        </div>
    );
}

@inject('storeStaffCount')
@observer
export default class StaffCount extends PureComponent<Props> {
    render() {
        return (
            <Row>
                <Col lg='4'>
                    <MyCard style={panelStyle}>
                        <CountIcon icon={<FaMale color='#fff' size={36}/>} bgColor='#0A79DF' color='#fff' />
                        <CountData count={120} title='Total Boys' />
                    </MyCard>
                </Col>
                <Col lg='4'>
                    <MyCard style={panelStyle}>
                        <CountIcon icon={<FaFemale color='#fff' size={36}/>} bgColor='#E74292' color='#fff' />
                        <CountData count={75} title='Total Girls' />
                    </MyCard>
                </Col>
                <Col lg='4'>
                    <MyCard style={panelStyle}>
                        <CountIcon icon={<FaUsers color='#fff' size={36}/>} bgColor='#BB2CD9' color='#fff' />
                        <CountData count={75} title='Total Staff' />
                    </MyCard>
                </Col>
            </Row>
        );
    }
}
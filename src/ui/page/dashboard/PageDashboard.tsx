import React, { PureComponent, CSSProperties } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import MySuspense from '../../components/MySuspense';

const AttendanceCount = React.lazy(() => import('./component/AttendanceCount'));
const FeeCollection = React.lazy(() => import('./component/FeeCollection'));
const StaffCount = React.lazy(() => import('./component/StaffCount'));
const WhatsToday = React.lazy(() => import('./component/WhatsToday'));

const styles: CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}
const divStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingBottom:8
}

export default class PageDashboard extends PureComponent {

    render() {
        return (
            <div style={styles}>
                <Container fluid style={{ marginBottom: 8 }}>
                    <MySuspense>
                        <StaffCount />
                    </MySuspense>
                </Container>
                <Container fluid style={{ marginBottom: 8}}>
                    <Row>
                        <Col lg='8'>
                            <MySuspense>
                                <AttendanceCount />
                            </MySuspense>
                        </Col>
                        <Col>
                            <MySuspense>
                                <WhatsToday />
                            </MySuspense>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <MySuspense>
                        <FeeCollection />
                    </MySuspense>
                </Container>
            </div>
        );
    }

}
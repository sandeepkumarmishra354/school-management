import React, { PureComponent } from 'react'
import { Container } from 'react-bootstrap';
import MySuspense from '../../components/MySuspense';

const AttendanceFilter = React.lazy(() => import('./component/AttendanceFilter'));
const AttendanceTable = React.lazy(() => import('./component/AttendanceTable'));

export default class PageAttendance extends PureComponent<{}, { height: number }> {

    constructor(props: {}) {
        super(props);
        this.state = { height: 0 };
    }

    componentDidMount = () => {
        let height = this._divRef.current?.clientHeight ?? 0;
        this.setState({ height: height - 100 });
    }

    private _divRef = React.createRef<HTMLDivElement>();

    private _onResize = (width: number, height: number) => {
        console.log({ width, height });
        this.setState({ height });
    }

    render() {
        return (
            <Container fluid>
                <MySuspense>
                    <AttendanceFilter />
                </MySuspense>
                <MySuspense>
                    <AttendanceTable />
                </MySuspense>
            </Container>
        );
    }

}
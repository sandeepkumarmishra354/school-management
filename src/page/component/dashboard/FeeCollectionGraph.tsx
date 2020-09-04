import React, { PureComponent } from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { observer } from 'mobx-react';
import { Loader } from 'rsuite';
import { dashboardStore } from '../../../mobx/store/dashboard/store.dashboard';
import DashboardOptionTitle from './DashboardOptiontitle';

interface Props {
    dashboardStore: typeof dashboardStore
}

@observer
export default class FeeCollectionGraph extends PureComponent<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.dashboardStore.fetchFee();
    }

    private renderCustomBarLabel = (data: any) => {
        let { x, y, width, value } = data;
        return (
            <text
            x={x + width / 2}
                y={y} fill="#8B78E6"
            textAnchor="middle"
            dy={-6}>
                ₹ {value}
            </text>
        );
    };

    render() {
        let data = this.props.dashboardStore.feeData;
        return (
            <div style={{ width: '100%', marginBottom: 15, }}>
                <DashboardOptionTitle
                    style={{ marginBottom: 25 }}
                    title="Fee Collection" />
                {data ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <BarChart
                        compact width={820}
                        height={400} data={data}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Bar
                            dataKey='collection'
                            barSize={25} fill="#BB2CD9"
                            label={this.renderCustomBarLabel} />
                    </BarChart>
                </div> : <Loader content="Please wait..." />}
            </div>
        )
    }
}
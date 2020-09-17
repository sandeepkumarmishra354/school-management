import React, { PureComponent } from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { observer } from 'mobx-react';
import { Loader } from 'rsuite';
import DashboardOptionTitle from './DashboardOptiontitle';
import { StoreFeeCollection } from '../../../mobx/store/dashboard/store.feecollection';

interface Props {
    store: StoreFeeCollection
}

@observer
export default class FeeCollectionGraph extends PureComponent<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.store.fetch();
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

    private getContent = () => {
        let data = this.props.store.feeCollection;
        let fetching = this.props.store.fetching;
        if (fetching)
            return (
                <div
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 50, paddingBottom: 50 }}>
                    <Loader vertical content='Please wait...' />
                </div>
            );
        if (data.length === 0)
            return (
                <div
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 50, paddingBottom: 50 }}>
                    <h6 style={{ fontWeight: 400 }}>No data to display</h6>
                </div>
            );
        return (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
            </div>
        );
    }

    render() {
        return (
            <div style={{ width: '100%', marginBottom: 15, }}>
                <DashboardOptionTitle
                    style={{ marginBottom: 25 }}
                    title="Fee Collection" />
                {this.getContent()}
            </div>
        )
    }
}
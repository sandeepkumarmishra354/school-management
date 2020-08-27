import React, { PureComponent } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { observer } from 'mobx-react';
import { Loader } from 'rsuite';
import { dashboardStore } from '../../../mobx/store/store.dashboard';

interface Props {
    dashboardStore: typeof dashboardStore
}

@observer
export default class FeeCollectionGraph extends PureComponent<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        let data = this.props.dashboardStore.feeData;
        return (
            <div style={{ width: '100%', marginBottom: 15, }}>
                <h4 style={{ marginBottom: 25 }}>Fee collection</h4>
                {data ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <BarChart width={850} height={350} data={data}>
                        <Bar dataKey='collection' barSize={30} fill="#BB2CD9" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                </div> : <Loader content="Please wait..." />}
            </div>
        )
    }
}
import React, { PureComponent } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { storeFeeCollection } from '../../../mobx/store/store.fee.collection';
import { observer } from 'mobx-react';
import { Loader } from 'rsuite';

interface Props {
    feeStore: typeof storeFeeCollection
}

@observer
export default class FeeCollectionGraph extends PureComponent<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div style={{ width: '100%', marginBottom: 15, }}>
                <h4 style={{ marginBottom: 25 }}>Fee collection</h4>
                {this.props.feeStore.fetching ? <Loader content="Please wait..." /> : <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <BarChart width={850} height={350} data={this.props.feeStore.feeGraphData}>
                        <Bar dataKey='amount' barSize={30} fill="#BB2CD9" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                </div>}
            </div>
        )
    }
}
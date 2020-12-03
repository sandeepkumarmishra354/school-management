import { inject, observer } from 'mobx-react';
import React, { PureComponent, CSSProperties } from 'react'
import ReactResizeDetector from 'react-resize-detector';
import { Line, LineChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { StoreFeeCollection } from '../../../../mobx/dashboard/store.fee_collection';
import Card from 'react-bootstrap/Card';
import MyCard from '../../../components/MyCard';

interface Props {
    storeFeeCollection?: StoreFeeCollection
}

const styles: CSSProperties = {
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
}

@inject('storeFeeCollection')
@observer
export default class FeeCollection extends PureComponent<Props, { width: number, height: number }> {

    private _panelRef = React.createRef<HTMLDivElement>();

    constructor(props: Props) {
        super(props);
        this.state = { width: 0, height: 0 };
    }

    private _onResize = (width: number, height: number) => {
        this.setState({ width, height });
    }

    render() {
        return (
            <div style={{width:'100%',padding:5}}>
                <MyCard
                style={{width:'100%',height:415}}>
                    <Card.Header>Fee collection (10-12 days)</Card.Header>
                    <Card.Body
                        ref={this._panelRef}>
                        <LineChart
                            margin={{ bottom: 32 }}
                            height={370}
                            width={this.state.width}
                            data={this.props.storeFeeCollection?.feeCollectionData}>
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='date' />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                dataKey='collection' stroke='#E74292'
                                strokeWidth={4} activeDot={{ r: 8 }} type='monotone' />
                        </LineChart>
                        <ReactResizeDetector
                            handleWidth
                            targetRef={this._panelRef}
                            onResize={this._onResize} />
                    </Card.Body>
                </MyCard>
            </div>
        );
    }

}
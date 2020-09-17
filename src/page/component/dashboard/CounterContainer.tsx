import React, { Component, CSSProperties } from 'react'
import { Panel, Icon, FlexboxGrid, Col, Loader } from 'rsuite'
import { StoreStaffCount } from '../../../mobx/store/dashboard/store.staffcount'
import { IconNames } from 'rsuite/lib/Icon'
import { observer } from 'mobx-react'
import DashboardOptionTitle from './DashboardOptiontitle'

const panelStyles: CSSProperties = {
    minHeight: 100,
    backgroundColor: '#fff',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20
}
const holderStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
}
const iconHolder: CSSProperties = {
    width: 60,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.534)'
}
const countStyle: CSSProperties = {
    fontWeight: 300,
    fontSize: 18,
    color: '#AE1438'
}

interface Props {
    store: StoreStaffCount
}

interface CountProps {
    count: number, title: string,
    loading: boolean,
    icon: IconNames, color: string
}

const CountItem = (props: CountProps) => (
    <Panel
        bodyFill
        shaded
        style={{ ...panelStyles }}>
        <div style={holderStyle}>
            <div style={{ ...iconHolder, backgroundColor: props.color, }}>
                <Icon size='2x' icon={props.icon} style={{ color: '#fff' }} />
            </div>
            {props.loading ? <Loader style={{ marginLeft: 50 }} /> : <div style={{ marginLeft: 20 }}>
                <h6 style={{ fontWeight: 500, fontSize: 18, marginBottom: 8 }}>
                    {props.title}
                </h6>
                <div style={{ height: 1 }}></div>
                <span style={countStyle}>{props.count}</span>
            </div>}
        </div>
    </Panel>
);

@observer
export default class CounterContainer extends Component<Props> {

    componentDidMount = () => {
        this.props.store.fetch();
    }

    render() {
        let fetching = this.props.store.fetching;
        let data = this.props.store.countData;
        return (
            <div style={{ width: '100%', transition: 'all 1s', marginBottom: 40 }}>
                <DashboardOptionTitle
                    style={{ marginBottom: 25 }}
                    title='Staff Count'/>
                <FlexboxGrid justify='space-around'>
                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={7}>
                        <CountItem
                            title='STUDENT (BOY)'
                            count={data.boy}
                            icon='male'
                            color='#45CE30'
                            loading={fetching} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={7}>
                        <CountItem
                            title='STUDENT (GIRL)'
                            count={data.girl}
                            icon='female'
                            color='#BB2CD9'
                            loading={fetching} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={7}>
                        <CountItem
                            title='TOTAL STAFF'
                            count={data.staff}
                            icon='user'
                            color='#3498FF'
                            loading={fetching} />
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
        )
    }
}
import React, { Component, CSSProperties } from 'react'
import { Panel, Icon, FlexboxGrid, Col } from 'rsuite'

const panelStyles: CSSProperties = {
    minHeight: 100,
    backgroundColor: '#fff',
    flex: 1,
    display:'flex',
    alignItems:'center',
    paddingLeft:20
}
const holderStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
}
const iconHolder:CSSProperties = {
    width: 60,
    height: 60,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    boxShadow:'0px 2px 5px 0px rgba(0, 0, 0, 0.534)'
}
const countStyle:CSSProperties = {
    fontWeight: 300,
    fontSize: 18,
    color: '#AE1438'
}

export default class CounterContainer extends Component {
    render() {
        return (
            <div style={{ width: '100%', transition: 'all 1s',marginBottom:40}}>
                <FlexboxGrid justify='space-around'>
                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={7}>
                        <Panel
                            bodyFill
                            shaded
                            style={{ ...panelStyles }}>
                            <div style={holderStyle}>
                                <div style={{ ...iconHolder, backgroundColor: '#45CE30', }}>
                                    <Icon size='2x' icon='male' style={{ color: '#fff' }} />
                                </div>
                                <div style={{ marginLeft: 20 }}>
                                    <h6 style={{ fontWeight: 500, fontSize: 20, marginBottom: 8 }}>Student <span style={{ fontSize: 17 }}>
                                        (boy)</span></h6>
                                    <div style={{ height: 1 }}></div>
                                    <span style={countStyle}>55</span>
                                </div>
                            </div>
                        </Panel>
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={7}>
                        <Panel
                            bodyFill
                            shaded
                            style={{ ...panelStyles }}>
                            <div style={holderStyle}>
                                <div style={{ ...iconHolder, backgroundColor: '#BB2CD9', }}>
                                    <Icon size='2x' icon='female' style={{ color: '#fff' }} />
                                </div>
                                <div style={{ marginLeft: 20 }}>
                                    <h6 style={{ fontWeight: 500, fontSize: 20, marginBottom: 8 }}>Student <span style={{ fontSize: 17 }}>
                                        (girl)</span></h6>
                                    <div style={{ height: 1 }}></div>
                                    <span style={countStyle}>30</span>
                                </div>
                            </div>
                        </Panel>
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={7}>
                        <Panel
                            bodyFill
                            shaded
                            style={{ ...panelStyles, }}>
                            <div style={holderStyle}>
                                <div style={{ ...iconHolder, backgroundColor: '#0A79DF', }}>
                                    <Icon size='2x' icon='user' style={{ color: '#fff' }} />
                                </div>
                                <div style={{ marginLeft: 20 }}>
                                    <h6 style={{ fontWeight: 500, fontSize: 20, marginBottom: 8 }}>Teacher count</h6>
                                    <span style={countStyle}>25</span>
                                </div>
                            </div>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
        )
    }
}
import React, { PureComponent, CSSProperties } from 'react';
import { FlexboxGrid, Button, Col, Panel, Icon, IconButton, Divider } from 'rsuite';
import { sidenavStore, NavOption } from '../../../mobx/store/store.sidenav';

const Heading = (heading: string, icon: JSX.Element) => {
    return <h5 style={{ fontWeight: 400, color: '#EAF0F1' }}>
        {heading}
        {icon}
    </h5>
}

const Description = (desc: string) => {
    return <p style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {desc}
    </p>
}

const QuickButton = (text: string) => {
    return <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', position: 'absolute', bottom: 15, right: 15 }}>
        <Button appearance='default' style={{ marginTop: 10, marginBottom: -8, backgroundColor: '#fff', color: '#535C68' }} size='xs'>
            {text.toUpperCase()}
        </Button>
    </div>
}

const panelStyles: CSSProperties = {
    color: '#fff',
    minHeight: 180,
    position: 'relative'
}

export default class QuickOptions extends PureComponent {
    render() {
        return (
            <div style={{ width: '100%', transition: 'all 1s', marginBottom: 45 }}>
                <h4 style={{ marginBottom: 45 }}>Quick options</h4>
                <FlexboxGrid justify='space-around'>
                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={7}>
                        <Panel shaded header={Heading("Send Notification", <Icon icon="bell" style={{ marginLeft: 10 }} />)} style={{ ...panelStyles, backgroundColor: '#E74292' }}>
                            {Description("Send email or sms to students,teachers or guardians. Notify/Alert them about any information.")}
                            {QuickButton("Notify")}
                        </Panel>
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={7}>
                        <Panel shaded header={Heading("Fee Reminder", <Icon icon="send" style={{ marginLeft: 10 }} />)} style={{ ...panelStyles, backgroundColor: '#1287A5' }}>
                            {Description("Send a custom email or sms to student's guardian regarding their due fee.")}
                            {QuickButton("Remind")}
                        </Panel>
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item style={{ marginBottom: 10 }} componentClass={Col} colspan={20} md={7}>
                        <Panel shaded header={Heading("Create new record", <Icon icon="edit2" style={{ marginLeft: 10 }} />)} style={{ ...panelStyles, backgroundColor: '#BB2CD9' }}>
                            {Description("Add new student, teacher or guardian details in your database")}
                            {QuickButton("Create new")}
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
        )
    }
}
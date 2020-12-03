import { inject, observer } from 'mobx-react';
import React, { PureComponent, CSSProperties } from 'react'
import { StoreWhatsNew } from '../../../../mobx/dashboard/store.whats_today';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import MyCard from '../../../components/MyCard';

interface Props {
    storeWhatsNew?: StoreWhatsNew
}

const styles: CSSProperties = {
    width: '100%',
    height: 300,
    backgroundColor: '#fff',
    flexDirection: 'column',
}

@inject('storeWhatsNew')
@observer
export default class WhatsToday extends PureComponent<Props> {

    render() {
        return (
            <div style={{display: 'flex',flex:1,width:'100%',padding:5}}>
                <MyCard
                    style={{ width: '100%', height: 350 }}>
                    <Card.Header>What's today</Card.Header>
                    <Card.Body style={{overflow:'auto'}}>
                        <ListGroup variant='flush'>
                            {this.props.storeWhatsNew?.whatsNewData.map(value => (
                                <ListGroup.Item action style={{ fontSize: 16, color: '#0ABDE3', cursor: 'pointer' }}>{value.message}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>
                    </MyCard>
            </div>
        );
    }

}
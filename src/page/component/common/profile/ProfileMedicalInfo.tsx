import React, { Component, CSSProperties } from 'react'
import { Icon, List, Message, Loader } from 'rsuite';
import { MyListItem } from './common';
import { MedicalInfoData } from '../../../../mobx/types/common';

interface Props {
    style?:CSSProperties,
    userType: 'TEACHER' | 'STUDENT',
    userId: string,
    status: 'SUCCESS' | 'ERROR' | 'FETCHING',
    data?: MedicalInfoData
}

const styles: CSSProperties = {
    marginTop: 20, backgroundColor: '#fff',
    padding: 15, border: '0.5px solid #EAF0F1',
    borderRadius: 8
}

export default class ProfileMedicalInfo extends Component<Props> {


    private getContent = () => {
        let { status, data } = this.props;
        if (status === 'ERROR' || data === undefined) {
            return (
                <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center', width: '100%', padding: 20 }}>
                    <Message
                        type='error'
                        title='Error'
                        showIcon
                        description='Unable to fetch data, something went wrong.' />
                </div>
            );
        }
        if (status === 'FETCHING') {
            return (
                <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center', width: '100%', padding: 20 }}>
                    <Loader content='Please wait...' />
                </div>
            );
        }
        return (
            <div style={{ marginTop: 15, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                    style={{ flex: 1, marginRight: 10 }}>
                    <List hover bordered size='sm'>
                        <MyListItem
                            title='Asthma'
                            subtitle={data.asthma ? 'YES' : 'NO'}/>
                        <MyListItem
                            title='Diabetes'
                            subtitle={data.diabetes ? 'YES' : 'NO'} />
                        <MyListItem
                            title='Hearing problem'
                            subtitle={data.hearingProblem ? 'YES' : 'NO'}/>
                        <MyListItem
                            title='Speaking problem'
                            subtitle={data.speakingProblem ? 'YES' : 'NO'}/>
                        <MyListItem
                            title='Vision problem'
                            subtitle={data.visionProblem ? 'YES' : 'NO'} />
                    </List>
                </div>
                <div
                    style={{ flex: 1, marginLeft: 10 }}>
                    <List hover bordered size='sm'>
                        <MyListItem
                            title='Blood group'
                            subtitle={data.bloodGroup}/>
                        <MyListItem
                            title='Allergies'
                            subtitle={data.allergies} />
                        <MyListItem
                            title='Heart condition'
                            subtitle={data.heartCondition} />
                        <MyListItem
                            title='Physical disability'
                            subtitle={data.physicalDisability} />
                        <MyListItem
                            title='Skin condition'
                            subtitle={data.skinCondition} />
                        <MyListItem
                            title='Other illness'
                            subtitle={data.otherIllness} />
                    </List>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div style={{ ...styles, ...this.props.style }}>
                <h6
                    style={{ color: '#3498FF' }}>
                    <Icon icon='medkit' style={{ marginRight: 15 }} />
                    Medical info</h6>
                {this.getContent()}
            </div>
        );
    }

}
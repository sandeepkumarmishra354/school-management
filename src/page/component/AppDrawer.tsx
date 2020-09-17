import React, { Component, CSSProperties } from 'react'
import { Drawer, List, Divider } from 'rsuite';

interface Props {
    style?:CSSProperties
}
interface State {
    //
}

export default class AppDrawer extends Component<Props,State> {

    render() {
        return (
            <Drawer
            placement='left'
            size='xs'
            show>
                <Drawer.Header>
                    <Drawer.Title>Web <i>Solution</i></Drawer.Title>
                </Drawer.Header>
                <Divider/>
                <Drawer.Body>
                    <List hover>
                        <List.Item>Home</List.Item>
                        <List.Item>Stat</List.Item>
                        <List.Item>Student</List.Item>
                        <List.Item>Teacher</List.Item>
                        <List.Item>Fee Management</List.Item>
                        <List.Item>Salery Management</List.Item>
                    </List>
                </Drawer.Body>
                <Drawer.Footer>
                    <div style={{width:'100%',display:'flex'}}>
                        <p>All right reserved &copy; 2020</p>
                    </div>
                </Drawer.Footer>
            </Drawer>
        );
    }

}
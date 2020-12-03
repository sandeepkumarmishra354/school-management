import React, { PureComponent, Suspense } from 'react'
import MyLoader from './MyLoader';

export default class MySuspense extends PureComponent {

    render() {
        return (
            <Suspense
            fallback={<MyLoader content='Please wait...'/>}>
                {this.props.children}
            </Suspense>
        );
    }

}
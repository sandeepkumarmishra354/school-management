import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Panel } from 'rsuite'
import ListHeader from '../component/common/ListHeader'
import FeeFilter from '../component/fee-management/FeeFilter'
import { storeFee } from '../../mobx/store/fee/store.fee'
import { metaDataStore } from '../../mobx/store/store.meta'
import FeeList from '../component/fee-management/FeeList'
@observer
export default class FeeCollection extends Component {

    private onCreate = () => {
        //
    }

    private onRefresh = () => {
        //
    }

    render() {
        return (
            <Panel shaded bodyFill style={{ maxHeight: 700 }}>
                <ListHeader
                    heading="Fee Management"
                    onCreate={this.onCreate}
                    onRefresh={this.onRefresh} />
                <FeeFilter storeFee={storeFee} storeMeta={metaDataStore} />
                <FeeList store={storeFee} />
            </Panel>
        )
    }
}
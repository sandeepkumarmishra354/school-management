import { observable, action } from "mobx";

type FeeCollectionData = {
    date: string,
    collection: number
}

export class StoreFeeCollection {
    @observable feeCollection: Array<FeeCollectionData> = [];
    @observable fetching = false;

    @action
    public fetch = async () => {
        this.fetching = true;
        setTimeout(() => {
            this.fetching = false;
        }, 2000);
    }
}

export const storeFeeCollection = new StoreFeeCollection();
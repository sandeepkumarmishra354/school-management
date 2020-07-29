import { observable } from "mobx";

type FeeGraphData = {
    day:string,
    amount:string|number
}

class StoreFeeCollection {
    @observable feeGraphData!: Array<FeeGraphData>;
    @observable fetching:boolean = true;

    constructor() {
        setTimeout(() => {
            this.fetching = false;
            this.feeGraphData = [{ day: 'today', amount: 2000 },
                { day: '16 july', amount: 2300 }, { day: '15 july', amount: 1800 },
                { day: '14 july', amount: 2600 }, { day: '13 july', amount: 1600 },
                { day: '12 july', amount: 2800 }, { day: '11 july', amount: 3100 },
                { day: '10 july', amount: 1400 }, { day: '9 july', amount: 3500 },
                { day: '8 july', amount: 2300 }];
        },2000);
    }
}

export const storeFeeCollection = new StoreFeeCollection();
import { observable } from "mobx";

export class StoreFeeCollection {
    @observable fetching = false;
    @observable feeCollectionData = [
        {date:'today',collection:3200},
        {date:'2 Nov',collection:300},
        {date:'1 Nov',collection:3800},
        {date:'31 Oct',collection:2200},
        {date:'30 Oct',collection:4200},
        {date:'29 Oct',collection:3200},
        {date:'28 Oct',collection:4400},
        {date:'27 Oct',collection:1400},
        {date:'26 Oct',collection:2400},
        {date:'25 Oct',collection:4400},
        {date:'24 Oct',collection:1400},
        {date:'23 Oct',collection:5400},
    ];

    public fetch = async () => {
        //
    }
}
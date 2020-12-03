import { observable } from "mobx";

export class StoreStaffCount {
    @observable fetching = false;
    @observable totalBoys = 0;
    @observable totalGirls = 0;
    @observable totalStaff = 0;

    public fetch = async () => {
        //
    }
}
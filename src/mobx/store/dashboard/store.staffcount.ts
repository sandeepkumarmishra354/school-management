import { observable, action } from "mobx";
import { notificationHelper } from "../../../utils/NotificationHelper";
import { DashboardApi, ApiResponse } from "../../../axios/api";

type CountData = {
    boy:number,
    girl:number,
    staff:number,
}

export class StoreStaffCount {
    @observable countData!: CountData;
    @observable fetching = false;

    constructor() {
        this.countData = {
            boy: 0,
            girl: 0,
            staff: 0
        };
    }

    @action
    public fetch = async () => {
        try {
            this.fetching = true;
            let res = (await DashboardApi.get<ApiResponse>('/staff-count')).data;
            this.fetching = false;
            if(res.status === 200) {
                this.countData = res.payload.data;
            } else {
                notificationHelper.showError(res.message);
            }
        } catch(err) {
            notificationHelper.showError(err.message);
            this.fetching = false;
        }
    }
}

export const storeStaffCount = new StoreStaffCount();
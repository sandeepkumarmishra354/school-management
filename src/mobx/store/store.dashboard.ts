import { observable, action } from "mobx";
import { DashboardApi, ApiResponse } from "../../axios/api";
import { notificationHelper } from "../../utils/NotificationHelper";

type data = { present: number, absent: number, total: number, prePer: number, absPer: number }

export interface DashboardAttendence {
    student: data,
    teacher: data,
    overall: data,
}
export interface DashboardFee {
    date:string,
    collection:number
}

class DashboardStore {
    @observable attendence!: DashboardAttendence
    @observable feeData!: Array<DashboardFee>;

    @action
    public fetchAttendence = (force = false) => {
        if (!force && !this.attendence) {
            DashboardApi.get<ApiResponse>('/attendence')
                .then(res => {
                    if (res.data.status === 200) {
                        this.attendence = res.data.payload.data;
                    } else {
                        notificationHelper.showError(res.data.message);
                    }
                })
                .catch(err => {
                    notificationHelper.showError(err.message);
                });
        }
    }

    @action
    public fetchFee = async (force = false) => {
        if(!force && !this.feeData) {
            DashboardApi.get<ApiResponse>('/fee-collection')
                .then(res => {
                    if (res.data.status === 200) {
                        this.feeData = res.data.payload.data;
                    } else {
                        notificationHelper.showError(res.data.message);
                    }
                })
                .catch(err => {
                    notificationHelper.showError(err.message);
                });
        }
    }
}

export const dashboardStore = new DashboardStore();
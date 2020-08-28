import { observable, action } from "mobx";
import { notificationHelper } from "../../../utils/NotificationHelper";
import { ManagementApi, ApiResponse } from "../../../axios/api";

export interface FeeListType {
    studentId: string,
    fullName: string,
    section: string,
    class: number,
    message: string,
    dueAmount: number,
    paidAmount: number,
    status: string,
    month: string,
    uuid: string,
    createdAt: Date,
    updatedAt: Date,
}

class StoreFee {
    @observable listFetching = false;
    @observable feeList: Array<FeeListType> = [];

    @action
    public fetchList = async (filter = { class: -1, section: 'ALL', skip: 0, status: 'ALL' },
        force = false) => {
        if (force || this.feeList.length === 0) {
            try {
                this.listFetching = true;
                //TODO: implement
                let res = (await ManagementApi.get<ApiResponse>('/fee/list', { params: filter })).data;
                this.listFetching = false;
                if (res.status === 200) {
                    this.feeList = res.payload.data;
                } else {
                    notificationHelper.showError(res.message);
                }
            } catch (err) {
                notificationHelper.showError(err.message);
                this.listFetching = false;
            }
        }
    }

    @action
    public createNewEntry = async () => {
        //
    }
}

export const storeFee = new StoreFee();
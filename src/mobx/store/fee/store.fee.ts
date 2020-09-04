import { observable, action } from "mobx";
import { notificationHelper } from "../../../utils/NotificationHelper";
import { ManagementApi, ApiResponse, StudentApi } from "../../../axios/api";
import { StoreBase } from "../store.base";
import { StudentListType } from "../student/store.student";

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

export type FeeNewEntryData = {
    studentId: string,
    month: Date,
    message?: string,
    dueAmount: number,
    paidAmount: number,
}

type FilterOption = {
    class: number,
    section: string,
    skip: number,
    status: string
    month?: Date
}

class StoreFee extends StoreBase {
    private defaultFilter: FilterOption = { class: -1, section: 'ALL', skip: 0, status: 'ALL' };
    @observable listFetching = false;
    @observable showNewEntryModal = false;
    @observable isCreatingNewEntry = false;
    @observable feeList: Array<FeeListType> = [];

    @action
    public fetchList = async (filter = this.defaultFilter, force = false) => {
        if (force || this.feeList.length === 0) {
            try {
                this.listFetching = true;
                //TODO: implement
                let res = (await ManagementApi.get<ApiResponse>('/list/fee', { params: filter })).data;
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
    public showCreateModal = (status: boolean) => {
        this.showNewEntryModal = status;
    }

    @action
    public createNewEntry = async (data: FeeNewEntryData) => {
        try {
            this.isCreatingNewEntry = true;
            let res = (await ManagementApi.post<ApiResponse>('/fee/new-entry', data)).data;
            this.isCreatingNewEntry = false;
            if (res.status === 200) {
                notificationHelper.showSuccess('entry created');
                this.feeList.push(res.payload.data);
            } else {
                notificationHelper.showError(res.message);
            }
        } catch (err) {
            notificationHelper.showError(err.message);
            this.isCreatingNewEntry = false;
        }
    }

    public getStudentList = async (filter: { class: number, section: string, rollNo?: string }) => {
        try {
            let res = (await StudentApi.get<ApiResponse>('/list', { params: filter })).data;
            if (res.status === 200) {
                let list = res.payload.data as Array<StudentListType>;
                return list.map((value) => {
                    return { name: value.name, value: value.uid };
                });
            } else {
                notificationHelper.showError(res.message);
                return [];
            }
        } catch (err) {
            notificationHelper.showError(err.message);
            return [];
        }
    }

    public doFullCleanup = async () => {
        //
    }
}

export const storeFee = new StoreFee();
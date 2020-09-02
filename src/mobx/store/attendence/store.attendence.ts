import { observable, action } from "mobx";
import { AttendenceApi, ApiResponse } from "../../../axios/api";
import { notificationHelper } from "../../../utils/NotificationHelper";
import { StoreBase } from "../store.base";

export interface AttendenceData {
    uuid: string,
    st_uuid: string,
    status: 'PRESENT' | 'ABSENT',
    type: 'TEACHER' | 'STUDENT',
    fullName: string,
    section: string,
    class: number,
    createdAt: Date,
    updatedAt: Date
}

type filterOption = {
    type: string,
    status: string,
    section: string,
    class: number,
    skip: number,
    date?: Date
}

class AttendenceStore extends StoreBase {
    private defaultFilter: filterOption = {
        type: 'ALL',
        status: 'ALL',
        section: 'ALL',
        skip: 0,
        class: -1
    };
    @observable attendenceList: Array<AttendenceData> = [];
    @observable fetching = false;

    @action
    public fetch = async (filter = this.defaultFilter, force = false) => {
        if (force || this.attendenceList.length === 0) {
            try {
                this.fetching = true;
                let res = await AttendenceApi.get<ApiResponse>('/list', { params: filter });
                this.fetching = false;
                let data = res.data;
                if (data.status === 200) {
                    this.attendenceList = data.payload.data;
                } else {
                    notificationHelper.showError(data.message);
                }
            } catch (err) {
                console.error(err);
                this.fetching = false;
                notificationHelper.showError(err.message);
            }
        }
    }

    public doFullCleanup = async () => {
        //
    }
}

export const attendenceStore = new AttendenceStore();
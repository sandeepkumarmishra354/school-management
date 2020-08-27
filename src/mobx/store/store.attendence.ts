import { observable, action } from "mobx";
import { AttendenceApi, ApiResponse } from "../../axios/api";
import { notificationHelper } from "../../utils/NotificationHelper";

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

class AttendenceStore {
    @observable attendenceList: Array<AttendenceData> = [];
    @observable fetching = false;

    @action
    public fetch = async (type: string = 'TEACHER') => {
        try {
            this.fetching = true;
            let res = await AttendenceApi.get<ApiResponse>('/list', {
                params: { type }
            });
            this.fetching = false;
            let data = res.data;
            if(data.status === 200) {
                this.attendenceList = data.payload.data;
            } else {
                notificationHelper.showError(data.message);
            }
        } catch(err) {
            console.error(err);
            this.fetching = false;
            notificationHelper.showError(err.message);
        }
    }
}

export const attendenceStore = new AttendenceStore();
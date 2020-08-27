import { observable, action } from "mobx";
import { notificationHelper } from "../../../utils/NotificationHelper";
import { StudentApi, ApiResponse } from "../../../axios/api";

export type StudentListType = {
    uid: string,
    studentId: string,
    name: string,
    class: number,
    section: string,
    avatar: string,
    status:string,
    birthDate:string,
}

class StoreStudent {
    @observable studentList: Array<StudentListType> = [];
    @observable listFetching = false;

    public fetchList = async (filter = { skip: 0, class: -1, section: 'ALL', status: 'ALL' },
    force = false) => {
        try {
            this.listFetching = true;
            let res = (await StudentApi.get<ApiResponse>('/list', { params: filter })).data;
            this.listFetching = false;
            if(res.status === 200)
                this.studentList = res.payload.data;
            else
                notificationHelper.showError(res.message);
        } catch (err) {
            notificationHelper.showError(err.message);
            this.listFetching = false;
        }
    }
}

export const storeStudent = new StoreStudent();
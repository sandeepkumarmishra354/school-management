import { observable, action } from "mobx";
import { notificationHelper } from "../../../utils/NotificationHelper";
import { TeacherApi, ApiResponse } from "../../../axios/api";

export type TeacherListType = {
    uid: string,
    teacherId: string,
    name: string,
    class: number,
    section: string,
    avatar: string,
    status: string,
    joiningDate:string
}

class StoreTeacher {
    @observable teacherList: Array<TeacherListType> = [];
    @observable listFetching = false;

    @action
    public fetchList = async (filter = { skip: 0, class: -1, section: 'ALL', status: 'ALL' },
        force = false) => {
        try {
            this.listFetching = true;
            let res = (await TeacherApi.get<ApiResponse>('/list', { params: filter })).data;
            this.listFetching = false;
            if (res.status === 200)
                this.teacherList = res.payload.data;
            else
                notificationHelper.showError(res.message);
        } catch (err) {
            notificationHelper.showError(err.message);
            this.listFetching = false;
        }
    }
}

export const storeTeacher = new StoreTeacher();
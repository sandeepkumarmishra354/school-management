import { observable, action } from "mobx";
import { notificationHelper } from "../../../utils/NotificationHelper";
import { TeacherApi, ApiResponse } from "../../../axios/api";
import { formatCreateData } from "./helper";
import { TeacherCreateModel } from "../../../model/model.teacher";

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
    @observable isCreating = false;
    @observable isCreateModalVisible = false;

    @action
    public showCreateModal = (status: boolean) => {
        this.isCreateModalVisible = status;
    }

    @action
    public fetchList = async (filter = { skip: 0, class: -1, section: 'ALL', status: 'ALL' },
        force = false) => {
        if(force || this.teacherList.length === 0) {
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

    @action
    public createNewRecord = async (data: TeacherCreateModel) => {
        try {
            this.isCreating = true;
            let student = formatCreateData(data);
            let res = (await TeacherApi.post<ApiResponse>('/create', student)).data;
            this.isCreating = false;
            if (res.status === 200) {
                this.isCreateModalVisible = false;
                notificationHelper.showSuccess(`Teacher record created: ${res.payload.data.uuid}`);
            } else {
                notificationHelper.showError(res.message);
            }
        } catch (err) {
            notificationHelper.showError(err.message);
            this.isCreating = false;
        }
    }
}

export const storeTeacher = new StoreTeacher();
import { observable, action } from "mobx";
import { notificationHelper } from "../../../utils/NotificationHelper";
import { StudentApi, ApiResponse } from "../../../axios/api";
import { StudentCreateModel } from "../../../model/model.student";
import { formatCreateData } from "./helper";

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
    @observable isCreating = false;
    @observable isCreateModalVisible = false;

    @action
    public showCreateModal = (status:boolean) => {
        this.isCreateModalVisible = status;
    }

    @action
    public fetchList = async (filter = { skip: 0, class: -1, section: 'ALL', status: 'ALL' },
    force = false) => {
        if(force || this.studentList.length === 0) {
            try {
                this.listFetching = true;
                let res = (await StudentApi.get<ApiResponse>('/list', { params: filter })).data;
                this.listFetching = false;
                if (res.status === 200)
                    this.studentList = res.payload.data;
                else
                    notificationHelper.showError(res.message);
            } catch (err) {
                notificationHelper.showError(err.message);
                this.listFetching = false;
            }
        }
    }

    @action
    public createNewRecord = async (data:StudentCreateModel) => {
        try {
            this.isCreating = true;
            let student = formatCreateData(data);
            let res = (await StudentApi.post<ApiResponse>('/create',student)).data;
            this.isCreating = false;
            if (res.status === 200) {
                this.isCreateModalVisible = false;
                notificationHelper.showSuccess(`Student record created: ${res.payload.data.uuid}`);
            } else {
                notificationHelper.showError(res.message);
            }
        } catch(err) {
            notificationHelper.showError(err.message);
            this.isCreating = false;
        }
    }
}

export const storeStudent = new StoreStudent();
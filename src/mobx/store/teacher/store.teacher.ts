import { observable, action } from "mobx";
import { notificationHelper } from "../../../utils/NotificationHelper";
import { TeacherApi, ApiResponse } from "../../../axios/api";
import { formatCreateData } from "./helper";
import { TeacherCreateModel } from "../../../model/model.teacher";
import { StoreBase } from "../store.base";
import { MedicalInfoData } from "../../types/common";
import { TeacherProfileOption } from "../../types/teacher_profile";

export type TeacherListType = {
    uid: string,
    teacherId: string,
    name: string,
    class: number,
    section: string,
    avatar: string,
    status: string,
    joiningDate: string,
    address: string,
}

class StoreTeacher extends StoreBase {
    @observable teacherList: Array<TeacherListType> = [];
    @observable listFetching = false;
    @observable isCreating = false;
    @observable profileStatus: 'FETCHING' | 'SUCCESS' | 'ERROR' = 'FETCHING';
    @observable medicalStatus: 'FETCHING' | 'SUCCESS' | 'ERROR' = 'FETCHING';
    @observable profileData?: TeacherProfileOption;
    @observable medicalInfoData?: MedicalInfoData;

    @action
    public fetchList = async (filter = { skip: 0, class: -1, section: 'ALL', status: 'ALL' },
        force = false) => {
        if (force || this.teacherList.length === 0) {
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
                notificationHelper.showSuccess(`Teacher record created: ${res.payload.data.uuid}`);
            } else {
                notificationHelper.showError(res.message);
            }
        } catch (err) {
            notificationHelper.showError(err.message);
            this.isCreating = false;
        }
    }

    @action
    public fetchProfile = async (uuid: string) => {
        try {
            if (this.profileStatus !== 'FETCHING')
                this.profileStatus = 'FETCHING';

            let res = (await TeacherApi.get<ApiResponse>(`/profile/${uuid}`)).data;
            if (res.status === 200) {
                this.profileStatus = 'SUCCESS';
                this.profileData = res.payload.data;
            } else {
                notificationHelper.showError(res.message);
                this.profileStatus = 'ERROR';
            }
        } catch (err) {
            notificationHelper.showError(err.message);
            this.profileStatus = 'ERROR';
        }
    }

    @action
    public fetchMedicalInfo = async (uuid: string) => {
        try {
            if (this.medicalStatus !== 'FETCHING')
                this.medicalStatus = 'FETCHING';

            let res = (await TeacherApi.get<ApiResponse>(`/medical-info/${uuid}`)).data;
            if (res.status === 200) {
                this.medicalStatus = 'SUCCESS';
                this.medicalInfoData = res.payload.data;
            } else {
                notificationHelper.showError(res.message);
                this.medicalStatus = 'ERROR';
            }
        } catch (err) {
            notificationHelper.showError(err.message);
            this.medicalStatus = 'ERROR';
        }
    }

    public doFullCleanup = async () => {
        //
    }
}

export const storeTeacher = new StoreTeacher();
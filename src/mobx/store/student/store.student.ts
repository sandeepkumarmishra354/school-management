import { observable, action } from "mobx";
import { notificationHelper } from "../../../utils/NotificationHelper";
import { StudentApi, ApiResponse } from "../../../axios/api";
import { StudentCreateModel } from "../../../model/model.student";
import { formatCreateData } from "./helper";
import { StoreBase } from "../store.base";
import { StudentProfileOption } from "../../types/student_profile";
import { MedicalInfoData } from "../../types/common";

export type StudentListType = {
    uid: string,
    studentId: string,
    name: string,
    class: number,
    section: string,
    avatar: string,
    status: string,
    birthDate: string,
    rollNo: string,
    address: string,
}

export class StoreStudent extends StoreBase {
    @observable studentList: Array<StudentListType> = [];
    @observable listFetching = false;
    @observable profileStatus: 'FETCHING' | 'SUCCESS' | 'ERROR' = 'FETCHING';
    @observable medicalStatus: 'FETCHING' | 'SUCCESS' | 'ERROR' = 'FETCHING';
    @observable profileData?: StudentProfileOption;
    @observable medicalInfoData?: MedicalInfoData;
    @observable isCreating = false;

    @action
    public fetchList = async (filter = { skip: 0, class: -1, section: 'ALL', status: 'ALL' },
        force = false) => {
        if (force || this.studentList.length === 0) {
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
    public createNewRecord = async (data: StudentCreateModel) => {
        try {
            this.isCreating = true;
            let student = formatCreateData(data);
            let res = (await StudentApi.post<ApiResponse>('/create', student)).data;
            this.isCreating = false;
            if (res.status === 200) {
                notificationHelper.showSuccess(`Student record created: ${res.payload.data.uuid}`);
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

            let res = (await StudentApi.get<ApiResponse>(`/profile/${uuid}`)).data;
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

            let res = (await StudentApi.get<ApiResponse>(`/medical-info/${uuid}`)).data;
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

export const storeStudent = new StoreStudent();
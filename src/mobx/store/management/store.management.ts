import { observable, action } from "mobx";
import { UploadedDocs } from "../../types/common";
import { promises as fsp } from "fs";
import { ManagementApi, ApiResponse, axiosConfig } from "../../../axios/api";
import { StoreBase } from "../store.base";
import { alertHelper } from "../../../utils/Alerthelper";

type UploadOption = {
    title: string,
    note: string,
    userType: 'TEACHER' | 'STUDENT',
    userId: string,
    file: string,
    onProgress: (progress: any) => void,
    onSuccess: (data: UploadedDocs) => void,
    onError: (message: string) => void,
}

class StoreManagement extends StoreBase {

    @observable studentTeacherDocs = new Array<UploadedDocs>();
    @observable fetching = false;
    @observable uploading = false;

    private uploadFile = (data: any, onUploadProgress: (progress: any) => void) => {
        return ManagementApi.post<ApiResponse>('/docs/upload', data, {
            ...axiosConfig,
            headers: {
                ...axiosConfig.headers,
                // it's important to set this undefined (so that axios can figure this out)
                'Content-Type': undefined
            },
            onUploadProgress
        });
    }

    @action
    public uploadDoc = async (options: UploadOption) => {
        try {
            this.uploading = true;
            let data = await fsp.readFile(options.file);
            let fileBlob = new Blob([new Uint8Array(data, data.byteOffset, data.length)]);
            let arr = options.file.split('/');
            let filename = arr[arr.length - 1];
            let form = new FormData();
            form.append('title', options.title);
            form.append('note', options.note);
            form.append('userType', options.userType);
            form.append('userId', options.userId);
            form.append('doc', fileBlob, filename);
            let res = (await this.uploadFile(form, options.onProgress)).data;
            this.uploading = false;
            if (res.status === 200) {
                this.studentTeacherDocs = [res.payload.data, ...this.studentTeacherDocs];
                options.onSuccess(res.payload.data);
            } else {
                options.onError(res.message);
            }
        } catch (err) {
            this.uploading = false;
            options.onError(err.message)
        }
    }

    @action
    public fetchDocs = async (userId: string, userType: 'TEACHER' | 'STUDENT') => {
        try {
            this.fetching = true;
            let res = (await ManagementApi.get<ApiResponse>('/docs/list', {
                params: { userId, userType }
            })).data
            this.fetching = false;
            if(res.status === 200) {
                this.studentTeacherDocs = res.payload.data;
            } else {
                alertHelper.showError(`can't fetch docs: ${res.message}`);
            }
        } catch (err) {
            this.fetching = false;
            alertHelper.showError(`can't fetch docs: ${err.message}`);
        }
    }

    @action
    public doFullCleanup = () => {
        this.studentTeacherDocs = [];
    }
}

export const storeManagement = new StoreManagement();
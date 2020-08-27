import axios, { AxiosRequestConfig } from 'axios';
import http from 'http';
import https from 'https';

const BaseUrl = 'http://127.0.0.1:8080/api';
const TimeOut = 10 * 1000;//10 seconds
const config:AxiosRequestConfig = {
    timeout: TimeOut,
    headers: {
        'Authorization': 'auth-token',
    },
    responseType: 'json',
    validateStatus: (status) => true,
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true }),
};

export interface ApiResponse {
    status:number,
    message:string,
    payload: {data:any}
}

export const BaseAPI = axios.create({
    baseURL: BaseUrl,
    ...config
});
export const DashboardApi = axios.create({
    baseURL: `${BaseUrl}/dashboard`,
    ...config
});
export const AttendenceApi = axios.create({
    baseURL: `${BaseUrl}/attendence`,
    ...config
});
export const ManagementApi = axios.create({
    baseURL: `${BaseUrl}/management`,
    ...config
});
export const StudentApi = axios.create({
    baseURL: `${BaseUrl}/student`,
    ...config
});
export const TeacherApi = axios.create({
    baseURL: `${BaseUrl}/teacher`,
    ...config
});
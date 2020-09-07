import axios, { AxiosRequestConfig } from 'axios';
import http from 'http';
import https from 'https';

const BaseUrl = 'http://127.0.0.1:8080/api';
const TimeOut = 10 * 1000;//10 seconds

export const axiosConfig: AxiosRequestConfig = {
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
    status: number,
    message: string,
    payload: { data: any }
}

export const BaseAPI = axios.create({
    baseURL: BaseUrl,
    ...axiosConfig
});
export const DashboardApi = axios.create({
    baseURL: `${BaseUrl}/dashboard`,
    ...axiosConfig
});
export const AttendenceApi = axios.create({
    baseURL: `${BaseUrl}/attendence`,
    ...axiosConfig
});
export const ManagementApi = axios.create({
    baseURL: `${BaseUrl}/management`,
    ...axiosConfig
});
export const StudentApi = axios.create({
    baseURL: `${BaseUrl}/student`,
    ...axiosConfig
});
export const TeacherApi = axios.create({
    baseURL: `${BaseUrl}/teacher`,
    ...axiosConfig
});
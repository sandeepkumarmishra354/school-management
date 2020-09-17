import { observable, action } from "mobx";

export type AttendanceCount = {
    total: number,
    totalPresent: number,
    totalAbsent: number,
    presentPercent: number,
    absentPercent: number,
}
type AttendanceData = {
    student: AttendanceCount,
    teacher: AttendanceCount,
    overall: AttendanceCount,
}

export class StoreAttendanceCount {
    @observable attendanceData: AttendanceData = {
        student: { total: 0, absentPercent: 0, presentPercent: 0, totalAbsent: 0, totalPresent: 0 },
        teacher: { total: 0, absentPercent: 0, presentPercent: 0, totalAbsent: 0, totalPresent: 0 },
        overall: { total: 0, absentPercent: 0, presentPercent: 0, totalAbsent: 0, totalPresent: 0 },
    };
    @observable fetching = false;

    @action
    public fetch = async () => {
        this.fetching = true;
        setTimeout(() => {
            this.fetching = false;
        }, 3000);
    }
}

export const storeAttendanceCount = new StoreAttendanceCount();
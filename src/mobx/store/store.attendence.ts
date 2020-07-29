import { observable, computed } from "mobx";

type AttendenceOptions = {
    title: string,
    totalPresent: number,
    totalAbsent: number,
}

class AttendenceStore {
    @observable studentAttendence: AttendenceOptions;
    @observable teacherAttendence: AttendenceOptions;
    @observable overallAttendence: AttendenceOptions;
    @observable fetching = true;

    constructor() {
        this.studentAttendence = {
            title: 'Students',
            totalAbsent: 12,
            totalPresent: 67
        };
        this.teacherAttendence = {
            title: 'Teachers',
            totalAbsent: 32,
            totalPresent: 67
        };
        this.overallAttendence = {
            title: 'Overall',
            totalAbsent: 44,
            totalPresent: 134
        };
        setTimeout(() => {
            this.fetching = false;
        }, 2000);
    }

    @computed
    public get totalStudent(): number {
        return this.studentAttendence.totalAbsent + this.studentAttendence.totalPresent;
    }

    @computed
    public get totalTeacher(): number {
        return this.teacherAttendence.totalAbsent + this.teacherAttendence.totalPresent;
    }

    @computed
    public get overall(): number {
        return this.overallAttendence.totalAbsent + this.overallAttendence.totalPresent;
    }

    @computed
    public get teacherPresentPer(): number {
        let per = (this.teacherAttendence.totalPresent * 100) / this.totalTeacher;
        return parseInt(per.toString());
    }

    @computed
    public get teacherAbsentPer(): number {
        let per = (this.teacherAttendence.totalAbsent * 100) / this.totalTeacher;
        return parseInt(per.toString());
    }

    @computed
    public get studentAbsentPer(): number {
        let per = (this.studentAttendence.totalAbsent * 100) / this.totalStudent;
        return parseInt(per.toString());
    }

    @computed
    public get studentPresentPer(): number {
        let per = (this.studentAttendence.totalPresent * 100) / this.totalStudent;
        return parseInt(per.toString());
    }

    @computed
    public get overallPresentPer(): number {
        let per = (this.overallAttendence.totalPresent * 100) / this.overall;
        return parseInt(per.toString());
    }

    @computed
    public get overallAbsentPer(): number {
        let per = (this.overallAttendence.totalAbsent * 100) / this.overall;
        return parseInt(per.toString());
    }
}

export const attendenceStore = new AttendenceStore();
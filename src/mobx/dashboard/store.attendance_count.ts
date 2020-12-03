import { observable } from "mobx";

export class StoreAttendanceCount {
    @observable fetching = false;
    @observable attendanceData = [
        { class: '1st', present: 12, absent: 25 },
        { class: '2nd', present: 25, absent: 35 },
        { class: '3rd', present: 32, absent: 21 },
        { class: '4th', present: 45, absent: 65 },
        { class: '5th', present: 65, absent: 34 },
        { class: '6th', present: 45, absent: 63 },
        { class: '7th', present: 74, absent: 121 },
        { class: '8th', present: 25, absent: 15 },
        { class: '9th', present: 64, absent: 83 },
        { class: '10th', present: 43, absent: 83 },
        { class: '11th', present: 21, absent: 23 },
        { class: '12th', present: 46, absent: 53 },
    ]

    public fetch = async () => {
        //
    }
}
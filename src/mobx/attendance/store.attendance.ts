import { action, observable } from "mobx";
import { AttendanceBasicInfo } from "../data_types";
import { StoreAttendanceFilter } from "./store.attendance_filter";

export class StoreAttendance {
    public editItem?: AttendanceBasicInfo;
    @observable fetchingList = false;
    @observable showEditDialog = false;
    @observable attendanceList = new Array<AttendanceBasicInfo>();

    constructor(private storeFilter: StoreAttendanceFilter) {
        for (let i = 0; i < 10; i++) {
            let status: 'PRESENT' | 'ABSENT' = (i % 2 === 0) ? 'PRESENT' : 'ABSENT';
            this.attendanceList.push({
                fullName: 'Sandeep mishra', class: '10th', type: 'STUDENT', uuid: `${i}`,
                id: '547576', avatar: 'https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914',
                section: 'A', status,
                date: '03/11/20', phone: '8052525337', address: 'New colony achalpur, pratapgarh 230001'
            });
        }
    }

    @action
    private _setLoading = (status: boolean) => {
        this.fetchingList = status;
    }
    @action
    private _loadMore = () => {
        this._setLoading(false);
    }

    public loadMore = async () => {
        this._setLoading(true);
        setTimeout(this._loadMore, 3000);
    }
    @action
    public setShowEditDialog = (status: boolean) => {
        this.showEditDialog = status;
    }
}
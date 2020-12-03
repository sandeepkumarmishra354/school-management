import { action, observable } from "mobx";
import { FilterOption } from "../data_types";

export type AttendanceType = 'STUDENT' | 'TEACHER' | 'all';
export type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'all';
export type AttendanceListSize = 10 | 15 | 20 | 25 | 30;

export type FilterOptions = {
    class: string,
    section: string,
    type: AttendanceType,
    status: AttendanceStatus,
    size: AttendanceListSize
};

export class StoreAttendanceFilter {
    @observable fetching = false;
    @observable dataClass = new Array<FilterOption>();
    @observable dataSection = new Array<FilterOption>();
    @observable dataStatus = new Array<FilterOption>();
    @observable dataAttendanceOf = new Array<FilterOption>();
    @observable dataTableSize = new Array<FilterOption>();
    private readonly _defaultFilterOptions:FilterOptions = { class: 'all', section: 'all', status: 'all', type: 'all',size:10 };
    private _appliedFilter: FilterOptions = this._defaultFilterOptions;

    constructor() {
        this.dataAttendanceOf = [
            { label: 'Select type', value: 'all' },
            { label: 'STUDENT', value: 'STUDENT' },
            { label: 'TEACHER', value: 'TEACHER' }
        ];
        this.dataStatus = [
            { label: 'Select status', value: 'all' },
            { label: 'PRESENT', value: 'PRESENT' },
            { label: 'ABSENT', value: 'ABSENT' },
        ];
        this.dataClass = [
            { label: 'Select class', value: 'all' },
            { label: '1st', value: '1' },
            { label: '2nd', value: '2' },
            { label: '3rd', value: '3' },
            { label: '4th', value: '4' },
            { label: '5th', value: '5' },
        ];
        this.dataSection = [
            { label: 'Select section', value: 'all' },
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
            { label: 'C', value: 'c' },
            { label: 'D', value: 'd' },
        ];
        this.dataTableSize = [{ label: 'select table size', value: 10 }, { label: '15', value: 15 },
            { label: '20', value: 20 }, { label: '25', value: 25 }, { label: '30', value: 30 }];
    }

    @action
    private _setFetching = (status:boolean) => {
        this.fetching = status;
    }

    public applyFilter = async (options: FilterOptions = this._defaultFilterOptions) => {
        this._setFetching(true);
        this._appliedFilter = options;
        setTimeout(() => {
            this._setFetching(false);
        }, 3000);
    }
}
import { observable, computed, action } from "mobx";

export interface AttendenceData {
    id: string,
    class: string,
    section: string,
    status: 'PRESENT' | 'ABSENT',
    name: string
}

class StoreAttendenceTable {
    @observable status: 'busy' | 'idle' | 'error' = 'busy';
    @observable tableDate:Array<AttendenceData> = new Array();

    @computed get isBusy() {
        return (this.status !== 'idle' && this.status !== 'error');
    }

    constructor() {
        this.init();
    }

    @action
    public filter = () => {
        this.status = 'busy';
        this.init();
    }

    @action
    private init = () => {
        setTimeout(() => {
            this.status = 'idle';
            this.tableDate.push({ id: '12432', class: '12', section: 'A', name: 'Sandeep', status: 'PRESENT' });
            this.tableDate.push({ id: '1QS45', class: '11', section: 'C', name: 'Gaurav', status: 'ABSENT' });
            this.tableDate.push({ id: '1QS45', class: '10', section: 'D', name: 'Tanny', status: 'ABSENT' });
            this.tableDate.push({ id: 'A23MT', class: '12', section: 'B', name: 'Priyank', status: 'PRESENT' });
        }, 3000);
    }
}

export const storeAttendenceTable = new StoreAttendenceTable();
import { observable } from "mobx";

class MetaDataStore {
    @observable classData: Array<{ name: string, value: number }> = [];
    @observable sectionData: Array<{ name: string, value: string }> = [];
    @observable userType: Array<{ name: string, value: string }> = [];
    @observable statusData: Array<{ name: string, value: string }> = [];
    @observable genderData: Array<{ name: string, value: string }> = [];
    @observable categoryData: Array<{ name: string, value: string }> = [];
    @observable religionData: Array<{ name: string, value: string }> = [];

    constructor() {
        //set class data
        this.classData.push({ name: 'ALL', value: -1 });
        for (let i = 1; i <= 12; i++)
            this.classData.push({ name: `Class ${i}`, value: i });
        //set section data (A to Z)
        this.sectionData.push({ name: 'ALL', value: 'ALL' });
        for (let i = 65; i <= 90; i++) {
            let char = String.fromCharCode(i);
            this.sectionData.push({ name: `Section ${char}`, value: char });
        }
        //set user types
        this.userType.push({ name: 'TEACHER', value: 'TEACHER' }, { name: 'STUDENT', value: 'STUDENT' });
        //gender
        this.genderData.push({ name: 'MALE', value: 'MALE' }, { name: 'FEMALE', value: 'FEMALE' }, { name: 'OTHER', value: 'OTHER' });
        //set status data
        this.statusData.push({ name: 'ALL', value: 'ALL' },{ name: 'ACTIVE', value: 'ACTIVE' },
            { name: 'INACTIVE', value: 'INACTIVE' }, { name: 'DISCONTINUED', value: 'DISCONTINUED' });
        //category
        this.categoryData.push({ name: 'GENERAL', value: 'GENERAL' }, { name: 'OBC', value: 'OBC' },
            { name: 'SC/ST', value: 'SC_ST' }, { name: 'MINORITY', value: 'MINORITY' }, { name: 'OTHER', value: 'OTHER' });
        //religion
        this.religionData.push({ name: 'HINDU', value: 'HINDU' }, { name: 'MUSLIM', value: 'MUSLIM' },
            { name: 'SIKH', value: 'SIKH' }, { name: 'CHRISTIAN', value: 'CHRISTIAN' }, { name: 'OTHER', value: 'OTHER' });
    }
}

export const metaDataStore = new MetaDataStore();
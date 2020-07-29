import { observable, computed, action } from "mobx";
import { storeAttendenceTable } from "./store.attendence.table";

export interface ClassSectionData {
    name: string,
    value: number | string
}

class StoreClassSection {

    private defaultClass: ClassSectionData = { name: 'All', value: 0 };
    private defaultSection: ClassSectionData = { name: 'All', value: 'All' };
    private defaultType: ClassSectionData = { name: 'Student', value: 'student' };

    @observable private selectedClass: ClassSectionData = this.defaultClass;
    @observable private selectedSection: ClassSectionData = this.defaultSection;
    @observable private selectedType: ClassSectionData = this.defaultType;
    @observable private selectedDate: Date = new Date();

    @observable public classData = [
        this.defaultClass,
        { name: 'Class 1', value: 1 },
        { name: 'Class 2', value: 2 },
        { name: 'Class 3', value: 3 },
        { name: 'Class 4', value: 4 },
        { name: 'Class 5', value: 5 },
        { name: 'Class 6', value: 6 },
        { name: 'Class 7', value: 7 },
        { name: 'Class 8', value: 8 },
        { name: 'Class 9', value: 9 },
        { name: 'Class 10', value: 10 },
        { name: 'Class 11', value: 11 },
        { name: 'Class 12', value: 12 },
    ];
    @observable public sectionData = [
        this.defaultSection,
        { name: 'Section A', value: 'A' },
        { name: 'Section B', value: 'B' },
        { name: 'Section C', value: 'C' },
        { name: 'Section D', value: 'D' },
        { name: 'Section E', value: 'E' },
        { name: 'Section F', value: 'F' },
        { name: 'Section G', value: 'G' },
    ];
    @observable studentTeacherData = [
        this.defaultType,
        { name: 'Teacher', value: 'teacher' },
    ]

    @computed
    public get isBusy(): boolean {
        return storeAttendenceTable.isBusy;
    }

    @computed
    public get currentClass(): number {
        return <number>this.selectedClass.value;
    }
    @computed
    public get currentSection(): string {
        return <string>this.selectedSection.value;
    }
    @computed
    public get currentType(): string {
        return <string>this.selectedType.value;
    }
    @computed
    public get currentDate(): Date {
        return this.selectedDate;
    }

    @action
    public setClass = (data: ClassSectionData) => {
        this.selectedClass = data;
    }

    @action
    public setSection = (data: ClassSectionData) => {
        this.selectedSection = data;
    }

    @action
    public setType = (data: ClassSectionData) => {
        this.selectedType = data;
    }

    @action
    public filter = () => {
        storeAttendenceTable.filter();
    }

    public getData = () => {
        return {
            date: this.selectedDate,
            class: this.selectedClass.value,
            section: this.selectedSection.value,
        };
    }
}

export const storeClassSection = new StoreClassSection();
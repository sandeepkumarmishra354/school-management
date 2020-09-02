import { ContactInfoModel, OfficialInfoModel, PersonalInfoModel } from './common';

export interface StudentCreateModel extends ContactInfoModel, OfficialInfoModel, PersonalInfoModel {
    fatherName: string,
    motherName: string,
    parentPhone: string,
    parentEmail: string,
    rollNo: string,
}
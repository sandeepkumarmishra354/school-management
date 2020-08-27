import { Schema } from "rsuite";
import { PersonalInfoModel, ContactInfoModel, OfficialInfoModel } from './common';

export const StudentFormModel = {
    createStudent: Schema.Model({
        ...PersonalInfoModel,
        ...ContactInfoModel,
        ...OfficialInfoModel,
        fatherName: Schema.Types.StringType().isRequired("father name is required"),
        motherName: Schema.Types.StringType().isRequired("mother name is required"),
        rollNo: Schema.Types.StringType().isRequired("roll no. is required"),
    })
}
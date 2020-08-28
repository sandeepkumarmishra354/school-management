import { Schema } from "rsuite";
import { PersonalInfoModel, ContactInfoModel, OfficialInfoModel } from './common';

export const TeacherFormModel = {
    createTeacher: Schema.Model({
        ...PersonalInfoModel,
        ...ContactInfoModel,
        ...OfficialInfoModel,
        maritalStatus: Schema.Types.StringType().isOneOf(['MARRIED','UNMARRIED','OTHER']).isRequired("marital status is required")
    })
}
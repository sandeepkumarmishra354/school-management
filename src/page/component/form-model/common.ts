import { Schema } from "rsuite";

export const PersonalInfoModel = {
    firstName: Schema.Types.StringType().isRequired("first name is required"),
    lastName: Schema.Types.StringType().isRequired("last name is required"),
    gender: Schema.Types.StringType().isOneOf(['MALE', 'FEMALE', 'OTHER']).isRequired("gender is required"),
    birthDate: Schema.Types.DateType().isRequired("birth date is required"),
    adharNo: Schema.Types.StringType().isRequired("adhar number is required"),
    category: Schema.Types.StringType().isOneOf(['GENERAL', 'OBC', 'SC_ST', 'MINORITY', 'OTHER']).isRequired("category is required"),
    religion: Schema.Types.StringType().isOneOf(['HINDU', 'MUSLIM', 'SIKH', 'CHRISTIAN', 'OTHER']).isRequired("religion is required"),
}

export const ContactInfoModel = {
    email: Schema.Types.StringType().isRequired("email address is required"),
    phone: Schema.Types.StringType().isRequired("phone number is required"),
    city: Schema.Types.StringType().isRequired("city is required"),
    state: Schema.Types.StringType().isRequired("state is required"),
    country: Schema.Types.StringType().isRequired("country is required"),
    zipCode: Schema.Types.StringType().isRequired("zip code is required"),
    area: Schema.Types.StringType().isRequired("area is required"),
    landmark: Schema.Types.StringType().isRequired("landmark is required"),
}

export const OfficialInfoModel = {
    status: Schema.Types.StringType().isOneOf(['ACTIVE', 'INACTIVE', 'DISCONTINUED']).isRequired("status is required"),
    class: Schema.Types.NumberType().isRequired("class is required"),
    section: Schema.Types.StringType().isRequired("section is required"),
    admissionDate: Schema.Types.DateType().isRequired("Admission/Joining date is required"),
}
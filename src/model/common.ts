export interface PersonalInfoModel {
    firstName: string,
    lastName: string,
    gender: string,
    birthDate: Date,
    adharNo: string,
    category: string,
    religion: string,
}

export interface ContactInfoModel {
    email: string,
    phone: string,
    city: string,
    state: string,
    country: string,
    zipCode: string,
    area: string,
    landmark: string,
}

export interface OfficialInfoModel {
    status: string,
    class: number,
    section: string,
    admissionDate: Date,
}
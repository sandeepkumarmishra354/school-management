export enum BloodGroup {
    A_POSITIVE = 'A-POSITIVE',
    B_POSITIVE = 'B-POSITIVE',
    O_POSITIVE = 'O-POSITIVE',
    AB_POSITIVE = 'AB-POSITIVE',
    // status
    A_NEGATIVE = 'A-NEGATIVE',
    B_NEGATIVE = 'B-NEGATIVE',
    O_NEGATIVE = 'O-NEGATIVE',
    AB_NEGATIVE = 'AB-NEGATIVE',
    NONE = 'NONE'
}

export interface AddressOption {
    city: string,
    state: string,
    address: string,
}

export interface ContactOption {
    email: string,
    phone: string,
}

export interface BasicProfileOption {
    name: {
        firstName: string,
        lastName: string,
    },
    gender: 'MALE' | 'FEMALE' | 'OTHER',
    birthDate: Date,
    class: number,
    section: string,
    adharNo: string,
    category: 'GENERAL' | 'OBC' | 'SC_ST' | 'MINORITY' | 'OTHER',
    religion: 'HINDU' | 'MUSLIM' | 'SIKH' | 'CHRISTIAN' | 'OTHER',
    status: 'ACTIVE' | 'INACTIVE' | 'DISCONTINUED',
    address: AddressOption,
    contact: ContactOption,
    id: number,
    uuid: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface UploadedDocs {
    id: string,
    createdAt: Date,
    name: string,
    mimetype: string,
    note: string,
    title: string,
}

export interface MedicalInfoData {
    createdAt: Date,
    updatedAt: Date,
    schoolId: string,
    uuid: string,
    userId: string,
    userType: 'TEACHER' | 'STUDENT',
    bloodGroup: BloodGroup,
    allergies: string,
    asthma: boolean,
    diabetes: boolean,
    hearingProblem: boolean,
    speakingProblem: boolean,
    visionProblem: boolean,
    heartCondition: string,
    physicalDisability: string,
    skinCondition: string,
    otherIllness: string,
}
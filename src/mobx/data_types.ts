export interface AttendanceBasicInfo {
    uuid:string
    fullName:string,
    class: string,
    section: string,
    id: string,
    avatar: string,
    status: 'PRESENT'|'ABSENT',
    type: 'STUDENT'|'TEACHER',
    date: string,
    phone: string,
    address: string
}

export type FilterOption = {
    label: string,
    value: string | number
}
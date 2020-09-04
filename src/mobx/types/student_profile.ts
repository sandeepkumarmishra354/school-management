import { BasicProfileOption } from "./common";

export interface StudentProfileOption extends BasicProfileOption {
    admissionDate: Date,
    parent: {
        fatherName: string,
        motherName: string,
        phone:string,
        email:string,
    },
    rollNo: string
}
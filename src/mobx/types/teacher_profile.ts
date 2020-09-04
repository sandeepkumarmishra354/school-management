import { BasicProfileOption } from "./common";

export interface TeacherProfileOption extends BasicProfileOption {
    joiningDate: Date,
    maritalStatus: 'MARRIED' | 'UNMARRIED' | 'OTHER'
}
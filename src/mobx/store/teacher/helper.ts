import { TeacherCreateModel } from "../../../model/model.teacher";

export const formatCreateData = (data: TeacherCreateModel) => {
    return {
        ...data,
        address: {
            city: data.city,
            state: data.state,
            address: data.address,
        },
        contact: {
            email: data.email,
            phone: data.phone,
        },
        joiningDate: data.admissionDate
    };
}
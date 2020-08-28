import { TeacherCreateModel } from "../../../model/model.teacher";

export const formatCreateData = (data: TeacherCreateModel) => {
    return {
        ...data,
        address: {
            city: data.city,
            country: data.country,
            state: data.state,
            area: data.area,
            zipCode: data.zipCode,
            landmark: data.landmark,
        },
        contact: {
            email: data.email.split(','),
            phone: data.phone.split(','),
        },
        joiningDate: data.admissionDate
    };
}
import { StudentCreateModel } from "../../../model/model.student";

export const formatCreateData = (data:StudentCreateModel) => {
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
        parent: {
            motherName: data.motherName,
            fatherName: data.fatherName,
            phone: data.parentPhone,
            email: data.parentEmail,
        }
    };
}
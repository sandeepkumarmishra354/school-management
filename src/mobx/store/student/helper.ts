import { StudentCreateModel } from "../../../model/model.student";

export const formatCreateData = (data:StudentCreateModel) => {
    return {
        ...data,
        address: {
            city:data.city,
            country:data.country,
            state:data.state,
            area:data.area,
            zipCode:data.zipCode,
            landmark:data.landmark ?? '',
        },
        contact: {
            email: data.email.split(','),
            phone: data.phone.split(','),
        },
        parent: {
            motherName: data.motherName,
            fatherName: data.fatherName,
        }
    };
}
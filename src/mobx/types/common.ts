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
import { observable, action } from "mobx";

export type ProfileData = {
    schoolName: string,
    photo: string,
    logo: string,
    address: string,
    principalName: string
}

export class StoreSchoolProfile {
    @observable schoolProfile: ProfileData;
    @observable fetching = false;

    constructor() {
        this.schoolProfile = {
            schoolName: 'Standard Academy',
            photo: 'https://webcomicms.net/sites/default/files/clipart/157441/image-school-157441-6977901.jpg',
            logo: '',
            address: 'Behind GGIC, 52 ward kamlakant pandey marg.',
            principalName: 'Vinod Pandey'
        }
    }

    @action
    public fetch = async () => {
        //
    }
}

export const storeSchoolProfile = new StoreSchoolProfile();
import { observable, action, when } from 'mobx';
import { notificationHelper } from '../../../utils/NotificationHelper';
import { BaseAPI } from '../../../axios/api';
import { StoreBase } from '../store.base';

export class AuthStore extends StoreBase {
    @observable isLogingIn = false;
    @observable loggedIn = true;
    @observable showingResetDialog = false;
    @observable schoolName = 'Standard Academy';

    constructor() {
        super();
        when(() => !this.loggedIn, this.doFullCleanup);
    }

    @action
    public login = (email: string, password: string) => {
        this.isLogingIn = true;
        BaseAPI.post('/auth/login', { email, password })
            .then(resp => {
                notificationHelper.showSuccess(`Login success, Token: ${resp.data.payload.data.token}`);
                this.isLogingIn = false;
                this.loggedIn = true;
            })
            .catch(err => {
                this.isLogingIn = false;
                console.error(err);
                notificationHelper.showError(err.message);
            })
    }

    @action
    public showResetDialog = (show:boolean) => {
        this.showingResetDialog = show;
    }

    @action
    public setLoggedIn = (status: boolean) => {
        this.loggedIn = status;
    }

    @action
    public logout = () => {
        this.loggedIn = false;
    }

    public doFullCleanup = () => {
        //this function automatically runs after successfull logout
        //TODO clear all states here
    }
}

export const authStore = new AuthStore();
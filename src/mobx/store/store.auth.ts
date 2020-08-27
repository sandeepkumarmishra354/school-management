import {observable, action} from 'mobx';
import { notificationHelper } from '../../utils/NotificationHelper';
import { BaseAPI } from '../../axios/api';

class AuthStore {
    @observable isLogingIn = false;
    @observable loggedIn = true;
    @observable schoolName = 'Standard Academy';

    @action
    public login = (email:string,password:string) => {
        this.isLogingIn = true;
        BaseAPI.post('/auth/login',{email,password})
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
    public setLoggedIn = (status:boolean) => {
        this.loggedIn = status;
    }

    @action
    public logout = () => {
        this.loggedIn = false;
    }
}

export const authStore = new AuthStore();
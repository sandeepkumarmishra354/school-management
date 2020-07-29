import {observable, action} from 'mobx';
import { notificationHelper } from '../../utils/NotificationHelper';

class AuthStore {
    @observable isLogingIn = false;
    @observable loggedIn = true;
    @observable schoolName = 'STANDARD ACADEMY';

    public login = (email:string,password:string) => {
        this.isLogingIn = true;
        setTimeout(() => {
            this.isLogingIn = false;
            this.loggedIn = true;
            notificationHelper.showSuccess('you are logged in !');
        }, 3000);
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
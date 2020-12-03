import { action, observable } from "mobx";

export class StoreLogin {
    @observable loggingIn = false;
    @observable isDialogShowing = false;

    @action
    public authenticate = (email:string,schoolId:string,password:string) => {
        this.loggingIn = true;
    }

    @action
    public showDialog = (show:boolean) => {
        this.isDialogShowing = show;
    }
}
import { observable, action } from "mobx";
import { alertHelper } from "../../utils/Alerthelper";

export enum InternetStatus {
    CONNECTED,
    NOT_CONNECTED,
    UNKNOWN
}

class UtilsStore {

    @observable internetStatus: InternetStatus;

    constructor() {
        this.internetStatus = window.navigator.onLine ? InternetStatus.CONNECTED : InternetStatus.NOT_CONNECTED;
        window.addEventListener('online', () => {
            this.internetStatus = window.navigator.onLine ? InternetStatus.CONNECTED : InternetStatus.NOT_CONNECTED;
            this.alertUser();
        });
        window.addEventListener('offline', () => {
            this.internetStatus = window.navigator.onLine ? InternetStatus.CONNECTED : InternetStatus.NOT_CONNECTED;
            this.alertUser();
        });
        this.alertUser();
    }

    private alertUser = () => {
        if (this.internetStatus === InternetStatus.CONNECTED)
            alertHelper.showSuccess('Connection available');
        else
            alertHelper.showError('Connection not available');
    }

    @action
    public setInternetStatus = (status: InternetStatus) => {
        this.internetStatus = status;
    }
}

export const utilsStore = new UtilsStore();
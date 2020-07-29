import { Notification } from "rsuite";

class NotificationHelper {
    public showError = (message: string, title: string = 'Error', duration: number = 3000) => {
        Notification.error({
            title,
            description: message,
            duration,
        });
    }

    public showSuccess = (message: string, title: string = 'Success', duration: number = 3000) => {
        Notification.success({
            title,
            description: message,
            duration,
        });
    }

    public showInfo = (message: string, title: string = 'Info', duration: number = 3000) => {
        Notification.info({
            title,
            description: message,
            duration,
        });
    }

    public showWarning = (message: string, title: string = 'Warning', duration: number = 3000) => {
        Notification.warning({
            title,
            description: message,
            duration,
        });
    }

    public closeAll = () => {
        Notification.closeAll();
    }

    public close = () => {
        Notification.close();
    }
}

export const notificationHelper = new NotificationHelper();
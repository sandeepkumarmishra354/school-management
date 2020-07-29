import { Alert } from "rsuite";

class AlertHelper {
    public showInfo = (message: string) => {
        Alert.info(message);
    }

    public showError = (message: string) => {
        Alert.error(message);
    }

    public showWarning = (message: string) => {
        Alert.warning(message);
    }

    public showSuccess = (message: string) => {
        Alert.success(message);
    }

    public close = () => { Alert.close() }

    public closeAll = () => { Alert.closeAll() }
}

export const alertHelper = new AlertHelper();
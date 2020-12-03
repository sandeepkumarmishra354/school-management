import { action, observable } from "mobx";

export class StoreSidebarOption {
    @observable selectedOption = 'Dashboard';

    @action
    public setOption = (option:string) => {
        this.selectedOption = option;
    }
}
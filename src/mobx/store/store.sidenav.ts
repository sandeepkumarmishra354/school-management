import { observable, computed, action } from "mobx";

export enum NavOption {
    DASHBOARD, STUDENT, TEACHER,
    GUARDIAN, STATS, FEE_COLLECTION,
    ATTENDENCE_MANAGEMENT, SETTING,
    HELP, CLASS_MANAGEMENT,SALERY_MANAGEMENT
};

class SidenavStore {
    @observable expanded: boolean = true;
    @observable currentNav: NavOption = NavOption.DASHBOARD;

    private readonly expandedWidth = 220;
    private readonly collapsedWidth = 56;
    private readonly collageName = 'Web Solutions';

    @computed
    public get sideNavCurrentWidth(): number {
        return this.expanded ? this.expandedWidth : this.collapsedWidth;
    }

    @computed
    public get schoolName():string {
        return this.expanded ? this.collageName : this.collageName[0].toUpperCase();
    }

    @action
    public toggleExpand = () => {
        this.expanded = !this.expanded;
    }

    @action
    public setCurrentNav = (nav: NavOption) => {
        if (nav !== this.currentNav)
            this.currentNav = nav;
    }
}

export const sidenavStore = new SidenavStore();
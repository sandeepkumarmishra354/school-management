import { observable, computed, action } from "mobx";
import { ConfigSideNav } from "../../config/sidenav_config";
import { StoreBase } from "./store.base";

class SidenavStore extends StoreBase {
    @observable expanded: boolean = true;
    @observable currentNav: string = ConfigSideNav.dashboard;

    private readonly expandedWidth = 230;
    private readonly collapsedWidth = 56;
    private readonly collageName = 'S-Tech Solutions';

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
    public setCurrentNav = (nav:string) => {
        if (nav !== this.currentNav)
            this.currentNav = nav;
    }

    public doFullCleanup = async () => {
        //
    }
}

export const sidenavStore = new SidenavStore();
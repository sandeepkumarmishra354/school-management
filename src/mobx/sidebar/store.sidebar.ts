import { action, computed, observable } from "mobx";

export class StoreSidebar {

    private readonly _mediaQueryListener = window.matchMedia(`(min-width: 800px)`);
    private registered = false;
    @observable sidebarOpen = false;
    @observable sidebarDocked = this._mediaQueryListener.matches;

    @action
    private _onMediaQueryChanged = () => {
        this.sidebarOpen = false;
        this.sidebarDocked = this._mediaQueryListener.matches
    }

    @computed
    public get isSmallScreen() {
        return !this.sidebarDocked;
    }

    public registerListener = () => {
        if (!this.registered) {
            this._mediaQueryListener.addListener(this._onMediaQueryChanged);
            this.registered = true;
        }
    }

    public removeListener = () => {
        if (this.registered) {
            this._mediaQueryListener.removeListener(this._onMediaQueryChanged);
            this.registered = false;
        }
    }

    @action
    public setSidebarOpen = (open: boolean) => {
        this.sidebarOpen = open;
    }
}
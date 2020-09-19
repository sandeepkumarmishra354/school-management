import { History } from 'history';
import { RouteUrlMap } from '../config/sidenav_config';
import { sidenavStore } from '../mobx/store/store.sidenav';

class RouteHandler {
    private _history!: History;
    private routeMapUrl: any = {
        ...RouteUrlMap.academics,
        ...RouteUrlMap.attendance,
        ...RouteUrlMap.certificate_id,
        ...RouteUrlMap.communication,
        ...RouteUrlMap.expense,
        ...RouteUrlMap.fee_management,
        ...RouteUrlMap.hostel,
        ...RouteUrlMap.inventory,
        ...RouteUrlMap.library,
        ...RouteUrlMap.master,
        ...RouteUrlMap.payroll_management,
        ...RouteUrlMap.settings,
        ...RouteUrlMap.student,
        ...RouteUrlMap.teacher,
        ...RouteUrlMap.transport,
        'dashboard': RouteUrlMap.dashboard,
        'help': RouteUrlMap.help,
    };

    public setHistory = (history: History) => {
        this._history = history;
    }

    public get history() { return this._history; }

    public handleSideNavOptions = (nav: string) => {
        sidenavStore.setCurrentNav(nav);
        let path = this.routeMapUrl[nav];
        this.history.replace(path);
    }
}

export const routeHandler = new RouteHandler();
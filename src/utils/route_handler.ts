import { History } from 'history';
import { NavOption, sidenavStore } from '../mobx/store/store.sidenav';

class RouteHandler {
    private _history!: History;

    private routeMap:any = {
        'dashboard': NavOption.DASHBOARD,
        'student': NavOption.STUDENT,
        'teacher': NavOption.TEACHER,
        'attendance': NavOption.ATTENDENCE_MANAGEMENT,
        'fee': NavOption.FEE_COLLECTION,
        'help': NavOption.HELP,
        'salery': NavOption.SALERY_MANAGEMENT,
        'setting': NavOption.SETTING,
        'stats': NavOption.STATS
    };

    private initNav = async (path:string) => {
        let paths = path.split('/').filter((value) => value !== '');
        let currentNav = paths[0];
        sidenavStore.setCurrentNav(this.routeMap[currentNav]);
    }

    public setHistory = (history: History) => {
        this._history = history;
        this.initNav(history.location.pathname);
        history.listen((location) => {
            this.initNav(location.pathname);
        });
    }

    public get history() { return this._history; }

    public handleSideNavOptions = (nav:NavOption) => {
        let path = '/';
        switch (nav) {
            case NavOption.DASHBOARD:
                path = '/dashboard';
                break;
            case NavOption.ATTENDENCE_MANAGEMENT:
                path = '/attendance';
                break;
            case NavOption.DASHBOARD:
                path = '/';
                break;
            case NavOption.FEE_COLLECTION:
                path = '/fee';
                break;
            case NavOption.HELP:
                path = '/help';
                break;
            case NavOption.SALERY_MANAGEMENT:
                path = '/salery';
                break;
            case NavOption.SETTING:
                path = '/setting';
                break;
            case NavOption.STATS:
                path = '/stats';
                break;
            case NavOption.STUDENT:
                path = '/student';
                break;
            case NavOption.TEACHER:
                path = '/teacher';
                break;
        }
        this.history.replace(path);
    }
}

export const routeHandler = new RouteHandler();
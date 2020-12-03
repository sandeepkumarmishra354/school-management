import { StoreAttendance } from "./attendance/store.attendance";
import { StoreAttendanceFilter } from "./attendance/store.attendance_filter";
import { StoreAttendanceCount } from "./dashboard/store.attendance_count";
import { StoreFeeCollection } from "./dashboard/store.fee_collection";
import { StoreStaffCount } from "./dashboard/store.staff_count";
import { StoreWhatsNew } from "./dashboard/store.whats_today";
import { StoreSidebar } from "./sidebar/store.sidebar";
import { StoreSidebarOption } from "./sidebar/store.sidebar_options";

const storeAttendanceCount = new StoreAttendanceCount();
const storeFeeCollection = new StoreFeeCollection();
const storeStaffCount = new StoreStaffCount();
const storeWhatsNew = new StoreWhatsNew();
const storeSidebar = new StoreSidebar();
const storeSidebarOption = new StoreSidebarOption();
const storeAttendanceFilter = new StoreAttendanceFilter();
const storeAttendance = new StoreAttendance(storeAttendanceFilter);

export const AppHomeStore = {
    storeAttendanceCount,
    storeFeeCollection,
    storeStaffCount,
    storeWhatsNew,
    storeSidebar,
    storeSidebarOption,
    storeAttendance,
    storeAttendanceFilter,
}
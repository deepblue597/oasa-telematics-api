export interface ILine {
    LineCode: string;
    LineID: string;
    LineDescr: string;
    LineDescrEng: string;
}

export interface IRoute {
    RouteCode: string;
    LineCode: string;
    RouteDescr: string;
    RouteDescrEng: string;
    RouteType: string;
    RouteDistance: string;
}

export interface IStop {
    StopCode: string;
    StopID: string;
    StopDescr: string;
    StopDescrEng: string;
    StopStreet: string | null;
    StopStreetEng: string | null;
    StopHeading: string;
    StopLat: string;
    StopLng: string;
    RouteStopOrder: string;
    StopType: string;
    StopAmea: string;
}

export interface IRouteDetail {
    routed_x: string;
    routed_y: string;
    routed_order: string;
}

export interface IRouteOfStop {
    RouteCode: string;
    LineCode: string;
    hidden: '0' | '1';
    RouteDescr: string;
    RouteDescrEng: string;
    RouteType: string;
    RouteDistance: string;
    LineID: string;
    LineDescr: string;
    LineDescrEng: string;
    MasterLineCode: string;
}

export interface IRouteDetailsAndStops {
    details: IRouteDetail[];
    stops: IStop[];
}

export interface IArrival {
    route_code: string;
    veh_code: string;
    btime2: string;
}

export interface IBusLocation {
    VEH_NO: string;
    CS_DATE: string;
    CS_LAT: string;
    CS_LNG: string;
    ROUTE_CODE: string;
    VEH_HEADING: string;
}

export interface IScheduleDay {
    sdc_descr: string;
    sdc_descr_eng: string;
    sdc_code: string;
    '': string;
}

/**
 * Times are formatted as `1900-01-01 HH:mm:ss` (local Athens time). Trips after midnight use `1900-01-02`.
 * The `*1` fields describe the outbound ("go") trip and the `*2` fields the return ("come") trip;
 * the fields of the other direction are null.
 */
export interface IScheduleEntry {
    line_id: string;
    sde_code: string;
    sdc_code: string;
    sds_code: string;
    sde_aa: string;
    sde_line1: string | null;
    sde_kp1: string;
    sde_start1: string | null;
    sde_end1: string | null;
    sde_line2: string | null;
    sde_kp2: string;
    sde_start2: string | null;
    sde_end2: string | null;
    sde_sort: string;
    sde_descr1?: string | null;
    sde_descr2?: string | null;
    line_circle: string;
    line_descr: string;
    line_descr_eng: string;
}

export interface ISchedule {
    come: IScheduleEntry[];
    go: IScheduleEntry[];
}

/**
 * Same conventions as {@link IScheduleEntry}. `sdd_start1` uses a different format (`Jan  1 1900 05:10:00:000AM`).
 */
export interface IDailyScheduleEntry {
    line_id: string;
    sdd_code: string;
    sdc_code: string;
    sds_code: string;
    sdd_aa: string;
    sdd_line1: string | null;
    sdd_kp1: string;
    sdd_start1: string | null;
    sde_start1: string | null;
    sde_end1: string | null;
    sdd_line2: string | null;
    sdd_kp2: string;
    sde_start2: string | null;
    sde_end2: string | null;
    sdd_sort: string;
    line_circle: string;
    line_descr: string;
    line_descr_eng: string;
    remarks: string | null;
}

export interface IDailySchedule {
    come: IDailyScheduleEntry[];
    go: IDailyScheduleEntry[];
}

export interface IClosestStop {
    StopCode: string;
    StopID: string;
    StopDescr: string;
    StopDescrEng: string;
    StopStreet: string | null;
    StopStreetEng: string | null;
    StopHeading: string;
    StopLat: string;
    StopLng: string;
    /** Distance from the requested point, in degrees */
    distance: string;
}

export interface IDirection {
    from: string;
    to: string;
    direction: string;
    RouteCodes: string[];
}

export interface ILineOfStop {
    RouteCodes: string[];
    LineCode: string;
    LineID: string;
    LineDescr: string;
    LineDescrEng: string;
    MasterLineCode: string;
}

export interface ILineWithMLInfo {
    ml_code: string;
    sdc_code: string;
    line_code: string;
    line_id: string;
    line_descr: string;
    line_descr_eng: string;
    mld_master: string;
}

export interface flightType {
  crew: string | null;
  details: string | null;
  flight_number: number|any;
  is_tentative: boolean;
  launch_date_local: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_site: any;
  launch_success: boolean|number;
  launch_window: number | null;
  launch_year: string | number | null;
  links:  any;
  mission_id: [];
  mission_name: string;
  rocket: any;
  ships: [] | string | null;
  static_fire_date_unix: number | null;
  static_fire_date_utc: string;
  tbd: boolean;
  telemetry: any;
  tentative_max_precision: string | null;
  timeline: string;
  upcoming: boolean | null;
}

export interface IFlightState {
  user: flightType | null | [] | any;
  isLoading: boolean;
  error: any;
}

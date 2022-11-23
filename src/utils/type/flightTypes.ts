export interface flightType {
  crew: String | null;
  details: String | null;
  flight_number: Number;
  is_tentative: Boolean;
  launch_date_local: String;
  launch_date_unix: Number;
  launch_date_utc: String;
  launch_site: {};
  launch_success: Boolean;
  launch_window: Number | null;
  launch_year: String | Number | null;
  links: {};
  mission_id: [];
  mission_name: String;
  rocket: {};
  ships: [] | String | null;
  static_fire_date_unix: Number | null;
  static_fire_date_utc: String;
  tbd: Boolean;
  telemetry: {};
  tentative_max_precision: String | null;
  timeline: {};
  upcoming: Boolean | null;
}

export interface IFlightState {
  user: flightType | null | [] | any;
  isLoading: Boolean;
  error: any;
}

export interface flightType {
  crew: string | null;
  details: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  flight_number: number | any;
  is_tentative: boolean;
  launch_date_local: string;
  launch_date_unix: number;
  launch_date_utc: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  launch_site: any;
  launch_success: boolean | number;
  launch_window: number | null;
  launch_year: string | number | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links: any;
  mission_id: [];
  mission_name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rocket: any;
  ships: [] | string | null;
  static_fire_date_unix: number | null;
  static_fire_date_utc: string;
  tbd: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  telemetry: any;
  tentative_max_precision: string | null;
  timeline: string;
  upcoming: boolean | null;
}

export interface IFlightState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: flightType | null | [] | any;
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}

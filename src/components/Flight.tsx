import { Card } from "antd";
import React from "react";
import { flightType } from "../utils/type/flightTypes";

const Flight = ({ flight }: { flight: flightType }) => {
  // console.log(flight)
  const {
    crew,
    details,
    flight_number,
    is_tentative,
    launch_date_local,
    launch_date_unix,
    launch_date_utc,
    launch_site,
    launch_success,
    launch_window,
    launch_year,
    links,
    mission_id,
    mission_name,
    rocket,
    ships,
    static_fire_date_unix,
    static_fire_date_utc,
    tbd,
    telemetry,
    tentative_max_precision,
    timeline,
    upcoming,
  } = flight;
  return (
    <div>
      <Card style={{ width: 1200, margin:"0 auto" }}>
    <p>{mission_name}</p>
    <p>{launch_date_local}</p>
  </Card>
    </div>
  );
};

export default Flight;

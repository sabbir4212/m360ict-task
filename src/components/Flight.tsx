import { Card, Col } from "antd";
import React from "react";
import { flightType } from "../utils/type/flightTypes";

const Flight = ({ flight }: { flight: flightType }) => {
  console.log(flight);
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
    <Col xs={24} sm={24} md={12} lg={8} xl={8} style={{ padding: "10px 20px" }}>
      {flight ? (
        <Col>
          <Card
            style={{ marginTop: "10px" }}
            hoverable
            cover={<img alt="example" src={links.mission_patch} />}
          >
            <h2 style={{ margin: "0" }}>Mission name: {mission_name}</h2>
            <h3>Rocket name: {rocket.rocket_name}</h3>
            <p style={{ margin: "0" }}>
              Launch local date: {launch_date_local}
            </p>
            <p>Launching: {launch_success ? "Success" : "Failure"}</p>
            <p>Is Upcoming: {upcoming ? "Yeas" : "No"}</p>
          </Card>
        </Col>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          Sorry cannot find Rocket by this name
        </h1>
      )}
    </Col>
  );
};

export default Flight;

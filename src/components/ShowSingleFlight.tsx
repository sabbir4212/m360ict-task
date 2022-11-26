import { Card, Col } from 'antd';
import React from 'react';
import { flightType } from '../utils/type/flightTypes';

const ShowSingleFlight = ({ flight }: { flight: flightType }) => {
    // console.log(flight);
  const {
    details,
    launch_date_local,
    launch_success,
    links,
    mission_name,
    rocket,
    upcoming,
  } = flight;
    return (
      <Col xs={24} sm={24} md={12} lg={8} xl={8} style={{ padding: "10px 20px" }}>
      <Col>
        <Card
          style={{ marginTop: "10px" }}
          hoverable
          cover={<img alt="example" src={links.mission_patch} />}
        >
          <h2 style={{ margin: "0" }}>Mission name: {mission_name}</h2>
          <h3 style={{margin:0}}><strong>Rocket name:</strong> {rocket.rocket_name}</h3>
          <p style={{ margin: "0" }}>
            <strong>Launch date:</strong> {launch_date_local.split("T")[0]}
          </p>
          <p style={{margin:'0'}}><strong>Details:</strong> {details ? details : "Details not available"}</p>
          <p><strong>Launching:</strong> {launch_success ? "Success" : "Failure"}</p>
          <p><strong>Is Upcoming:</strong> {upcoming ? "Yeas" : "No"}</p>
        </Card>
      </Col>
  </Col>
    );
};

export default ShowSingleFlight;
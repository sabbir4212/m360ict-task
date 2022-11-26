import { Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { flightType } from "../utils/type/flightTypes";
import ShowSingleFlight from "./ShowSingleFlight";

const Flights: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filtereds = useSelector((state: any) => state.filteredFlight);
  const { filtered } = filtereds;
  return (
    <Row className="ant-row">
      {filtered.length < 1 ? (
        <h1>No Data Found</h1>
      ) : (
        filtered.map((flight: flightType) => (
          <ShowSingleFlight
            key={flight.launch_date_local}
            flight={flight}
          ></ShowSingleFlight>
        ))
      )}
    </Row>
  );
};

export default Flights;

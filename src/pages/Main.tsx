import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../lib/slice/flightSlice";
import Loading from "../components/Loading";
import Flight from "../components/Flight";
import Search from "antd/es/input/Search";
import { Col, Row, Select, Space } from "antd";
import moment from "moment";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [searched, setSearched] = useState([]);
  const [filterd, setFilterd] = useState([])
  const flights = useSelector((state: any) => state.flights);
  const { flight, isLoading } = flights;

  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);
  useEffect(() => {
    setSearched(flight);
  }, [flight]);
  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSearch = (e: any): void => {
    console.log(e);
    const today = new Date();
    
    const filtered = flight.filter((searchedFlight: any) =>
    searchedFlight.rocket?.rocket_name.includes(e)
    );
    // const dateSorted = flight.filter((dateSort:any) => dateSort.launch_date_local.getTime() <= nowDate.getTime());
    setSearched(filtered);

  };

  return (
    <div>
      <div
        className=""
        style={{ margin: "0 auto", padding: "20px 0", width: 1200 }}
      >
        <Row justify="space-between">
          <Col span={8}>
            <Space direction="vertical">
              <Search
                placeholder="Search by rocket name"
                allowClear
                onSearch={onSearch}
                style={{ width: 300 }}
              />
            </Space>
          </Col>
          <Col span={8}>
            <Select
              defaultValue="All"
              style={{ width: 300 }}
              allowClear
              options={[
                {
                  value: "All",
                  label: "All",
                },
                {
                  value: "Last Week",
                  label: "Last Week",
                },
                {
                  value: "Last Month",
                  label: "Last Month",
                },
                {
                  value: "Last Year",
                  label: "Last Year",
                },
              ]}
            />
          </Col>
          <Col span={8}>
            <Select
              defaultValue="10"
              style={{ width: 200 }}
              allowClear
              options={[
                {
                  value: "10",
                  label: "10",
                },
                {
                  value: "20",
                  label: "20",
                },
                {
                  value: "30",
                  label: "30",
                },
                {
                  value: "Full",
                  label: "Full",
                },
              ]}
            />
          </Col>
        </Row>
      </div>
      <div style={{ display: "grid" }}>
        {searched.map((flight: any) => (
          <Flight key={flight.flight_number} flight={flight}></Flight>
        ))}
      </div>
    </div>
  );
};

export default Main;

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
  const [filterd, setFilterd] = useState([]);
  const [loading, setLoading] = useState(false)
  const flights = useSelector((state: any) => state.flights);
  const { flight, isLoading } = flights;

  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);
  useEffect(() => {
    setSearched(flight);
  }, [flight]);
  if (isLoading|| loading) {
    return <Loading></Loading>;
  }

  // search event
  const onSearch = (e: any): void => {
    setLoading(true)
    const filtered = flight.filter((searchedFlight: any) =>
      searchedFlight.rocket?.rocket_name.includes(e)
    );
    setSearched(filtered);
    setLoading(false)
  };

  // sort by date
  const sortByDate = (e: any) => {
    if (e) {
      if (e === "All") {
        console.log("all");
        const startDate = new Date("2006-03-25");
        const endDate = new Date("2020-12-13");
        const lastYear = flight.filter((flight: any) => flight.launch_date_local === endDate);
        console.log(lastYear);
        // for (const fl of flight) {
        //   const local_date = fl.launch_date_local;
        //   console.log(parseFloat(local_date));
        // }

        setFilterd(flight);
      } else if (e === "lastYear") {
        console.log("last year");
        setFilterd(flight);
      } else if (e === "lastMonth") {
        console.log("last month");
        setFilterd(flight);
      } else if (e === "lastWeek") {
        console.log("last week");
        setFilterd(flight);
      }
    }
  };
  console.log('current mongths', new Date().getMonth())

  return (
    <div>
      <div
        className=""
        style={{ margin: "0 auto", padding: "20px" }}
      >
        <Row justify="space-between">
          <Col >
            <Space direction="vertical">
              <Search
                placeholder="Search by rocket name"
                allowClear
                onSearch={onSearch}
                style={{ width: 300 }}
              />
            </Space>
          </Col>
          <Col >
            <Select
              defaultValue="All"
              style={{ width: 300 }}
              allowClear
              onChange={sortByDate}
              options={[
                {
                  value: "All",
                  label: "All",
                },
                {
                  value: "lastWeek",
                  label: "Last Week",
                },
                {
                  value: "lastMonth",
                  label: "Last Month",
                },
                {
                  value: "lastYear",
                  label: "Last Year",
                },
              ]}
            />
          </Col>
          {/* <Col span={8}>
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
          </Col> */}
        </Row>
      </div>
      <Row className="ant-row" justify={'space-between'}>
        {searched.map((flight: any) => (
          <Flight key={flight.launch_date_local} flight={flight}></Flight>
        ))}
      </Row>
    </div>
  );
};

export default Main;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../lib/slice/flightSlice";
import Loading from "../components/Loading";
import Flight from "../components/Flight";
import Search from "antd/es/input/Search";
import { Col, Row, Select, Space } from "antd";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [searched, setSearched] = useState([]);
  const [filterd, setFilterd] = useState([]);
  const flights = useSelector((state: any) => state.flights);
  const { flight, isLoading } = flights;


  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);
  
  useEffect(() => {
    setSearched(flight);
  }, [flight]);

  useEffect(() => {
    setSearched(filterd);
  }, [filterd]);
  if (isLoading) {
    return <Loading></Loading>;
  }

  // search event
  const onSearch = (e: any): void => {
    const filtered = filterd.filter((searchedFlight: any) =>
      searchedFlight.rocket?.rocket_name.includes(e)
    );
    setSearched([])
    setSearched(filtered);
  };


  // sort by date
  const sortByDate = (e: any) => {
    if (e) {
      if (e === "All") {
        console.log("all");
        setFilterd(flight);
      }
       else if (e === "lastYear") {
        const lastYearDate = flight.slice(-1)[0].launch_year;
        const lastYears = flight.filter(
          (ltyr: any) => parseInt(ltyr.launch_year) === parseInt(lastYearDate)
        );
        console.log("last year", lastYears);
        setFilterd(lastYears);
      }
       else if (e === "lastMonth") {
        for (const unix of flight) {
          const lastLaunchedDate = unix.launch_date_local.split("T")[0];
          const makeDate = new Date(lastLaunchedDate)
          const prev = new Date(makeDate.getFullYear(), makeDate.getMonth()-1, makeDate.getDate());
          const prevDate:any = prev.toLocaleDateString().split("/");
          const filterLastMonths = flight.filter((filterLastMonth: any) => new Date(filterLastMonth.launch_date_local).toLocaleDateString().split("/")[0]+1 === prevDate[0] && new Date(filterLastMonth.launch_date_local).toLocaleDateString().split("/")[2] === prevDate[2])
          

          setFilterd(filterLastMonths)
        }
      }
       else if (e === "lastWeek") {
        console.log("last week");
        setFilterd(flight);
      }
    }
  };

  return (
    <div>
      <div className="" style={{ margin: "0 auto", padding: "20px" }}>
        <Row justify="space-between">
          <Col>
            <Space direction="vertical">
              <Search
                placeholder="Search by rocket name"
                allowClear
                onSearch={onSearch}
                style={{ width: 300 }}
              />
            </Space>
          </Col>
          <Col>
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
        </Row>
      </div>
      <Row className="ant-row" justify={"space-between"}>
        {searched.map((flight: any) => (
          <Flight key={flight.launch_date_local} flight={flight}></Flight>
        ))}
      </Row>
    </div>
  );
};

export default Main;

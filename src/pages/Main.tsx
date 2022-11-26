import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../lib/slice/flightSlice";
import Loading from "../components/Loading";
import Flight from "../components/Flight";
import Search from "antd/es/input/Search";
import { Col, Row, Select, Space } from "antd";
import { getFilteredFile } from "../lib/slice/filteredSlice";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [searched, setSearched] = useState([]);
  const [filterd, setFilterd] = useState([]);
  const flights = useSelector((state: any) => state.flights);
  const { flight, isLoading } = flights;

  const filtereds = useSelector((state:any) => state.filteredFlight);
  const {filtered, FilLoading} = filtereds
  // console.log(filtered)

  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);
useEffect(() => {
  dispatch(getFilteredFile(searched))
},[searched])
  useEffect(() => {
    setSearched(flight);
  }, [flight]);

  useEffect(() => {
    setSearched(filterd);
  }, [filterd]);

  if (isLoading) {
    return <Loading></Loading>;
  }
  if(FilLoading){
    return <Loading></Loading>
  }



  // search event
  const onSearch = (e: string): void => {
    const filtered = filterd.filter((searchedFlight: any) =>
      searchedFlight.rocket?.rocket_name.includes(e)
    );
    setSearched(filtered);
  };

  // sort by date
  const sortByDate = (e: string): void => {
    if (e) {
      if (e === "All") {
        setFilterd(flight);
      } else if (e === "lastYear") {
        const lastYearDate = flight.slice(-1)[0].launch_year;
        const lastYears = flight.filter(
          (ltyr: any) => parseInt(ltyr.launch_year) === parseInt(lastYearDate)
        );
        setFilterd(lastYears);
      } else if (e === "lastMonth") {
        for (const unix of flight) {
          const lastLaunchedDate = unix.launch_date_local.split("T")[0];
          const makeDate = new Date(lastLaunchedDate);
          const prev = new Date(
            makeDate.getFullYear(),
            makeDate.getMonth() - 1,
            makeDate.getDate()
          );
          const prevDate: any = prev.toLocaleDateString().split("/");
          const filterLastMonths = flight.filter(
            (filterLastMonth: any) =>
              new Date(filterLastMonth.launch_date_local)
                .toLocaleDateString()
                .split("/")[0] +
                1 ===
                prevDate[0] &&
              new Date(filterLastMonth.launch_date_local)
                .toLocaleDateString()
                .split("/")[2] === prevDate[2]
          );

          setFilterd(filterLastMonths);
        }
      } else if (e === "lastWeek") {
        for (const unix of flight) {
          const lastLaunchedDate = unix.launch_date_local.split("T")[0];
          const makeDate = new Date(lastLaunchedDate);
          const prev = new Date(
            makeDate.getFullYear(),
            makeDate.getMonth(),
            makeDate.getDate() - 7
          );
          const prevDate: string[] = prev.toLocaleDateString().split("/");
          const filterLastWeeks = flight.filter(
            (filterLastWeek: any) =>
              new Date(filterLastWeek.launch_date_local)
                .toLocaleDateString()
                .split("/")[1] <= prevDate[1] &&
              new Date(filterLastWeek.launch_date_local)
                .toLocaleDateString()
                .split("/")[2] === prevDate[2] &&
              new Date(filterLastWeek.launch_date_local)
                .toLocaleDateString()
                .split("/")[0] === prevDate[0]
          );
          setFilterd(filterLastWeeks);
        }
      }
    }
  };

  // sort by launching status
  const sortByLaunchingStatus = (e:string):void => {
    if(e){
      if (e === "All") {
        console.log(flight)
        setFilterd(flight);
      }
      else if(e === "success"){
        const launchSuccess = flight.filter((success:any) => success.launch_success === true);
        setFilterd(launchSuccess)
      }
      else if(e === 'fail'){
        const launchingFail = flight.filter((fail:any) => fail.launch_success === false);
        setFilterd(launchingFail)
      }
    }
  }

  // sort by is upcoming 
  const sortByUpcoming = (e:string):void => {
    if(e){
      if (e === "All") {
        setFilterd(flight);
      }
      else if(e === 'upcomimg'){
        const filterUpcoming = flight.filter((upcoming:any) => upcoming.upcoming === true);
        setFilterd(filterUpcoming)
      }
      else if(e === 'notUpcoming'){
        const filterNotUpcomint = flight.filter((notUpcomint:any) => notUpcomint.upcoming === false);
        setFilterd(filterNotUpcomint)
      }
    }
  }

  return (
    <div>
      <div className="" style={{ margin: "0 auto", padding: "20px" }}>
        <Row justify="space-between">
          <Col style={{marginBottom:"5px", margin:'0 auto'}}>
        <p style={{margin:'0'}}>Search by rocket name</p>
            <Space direction="vertical">
              <Search
                placeholder="Search by rocket name"
                allowClear
                onSearch={onSearch}
                style={{ width: 300 }}
              />
            </Space>
          </Col>
          <Col style={{marginBottom:"5px", margin:'0 auto'}}>
          <p style={{margin:'0'}}>Select launching dates</p>
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

          {/* launching status select */}
          <Col style={{marginBottom:"5px", margin:'0 auto'}}>
          <p style={{margin:'0'}}>Select launching status</p>
            <Select
              defaultValue="All"
              style={{ width: 300 }}
              allowClear
              onChange={sortByLaunchingStatus}
              options={[
                {
                  value: "All",
                  label: "All",
                },
                {
                  value: "success",
                  label: "Launching success",
                },
                {
                  value: "fail",
                  label: "Launching fail",
                }
              ]}
            />
          </Col>
          
          {/* upcoming select */}
          <Col style={{marginBottom:"5px", margin:'0 auto'}}>
          <p style={{margin:'0'}}>Select is upcoming</p>
            <Select
              defaultValue="All"
              style={{ width: 300 }}
              allowClear
              onChange={sortByUpcoming}
              options={[
                {
                  value: "All",
                  label: "All",
                },
                {
                  value: "upcomimg",
                  label: "Upcoming",
                },
                {
                  value: "notUpcoming",
                  label: "Not Upcoming",
                }
              ]}
            />
          </Col>
        </Row>
      </div>
      <Row className="ant-row" justify={"space-between"}>
        {filtered.length < 1 ? (
          <h1>No Data Found</h1>
        ) : (
          filtered.map((flight: any) => (
            <Flight key={flight.launch_date_local} flight={flight}></Flight>
          ))
        )}
      </Row>
    </div>
  );
};

export default Main;

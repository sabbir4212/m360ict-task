import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../lib/slice/flightSlice";
import Loading from "../components/Loading";
import Flight from "../components/Flight";
import Search from "antd/es/input/Search";
import { Space } from "antd";

const Main: any = () => {
  const dispatch = useDispatch();
  const [searched, setSearched] = useState([]);
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
    const nowDate = new Date();

    const filtered = flight.filter((searchedFlight: any) =>
      searchedFlight.rocket?.rocket_name.includes(e)
    );
    // const dateSorted = flight.filter((dateSort:any) => dateSort.launch_date_local.getTime() <= nowDate.getTime());
    setSearched(filtered);
  };

  return (
    <div>
      <div style={{ margin: "20px auto", width: 1200 }}>
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ width: 400 }}
          />
        </Space>
      </div>
      {searched.map((flight: any) => (
        <Flight key={flight.flight_number} flight={flight}></Flight>
      ))}
    </div>
  );
};

export default Main;

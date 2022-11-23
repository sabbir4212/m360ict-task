import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../lib/slice/flightSlice";
import Loading from "../components/Loading";
import Flight from "../components/Flight";

const Main:any = () => {
    const dispatch = useDispatch();
    const [searchedFlight, setSearchedFlight] = useState([])
  const flights = useSelector((state: any) => state.flights);
  const{flight, isLoading, error} = flights;

  console.log(flight)


  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      
      {flight.map((flight:any) => <Flight key={flight.flight_number} flight = {flight}></Flight>)}
    </div>
  );
};

export default Main;

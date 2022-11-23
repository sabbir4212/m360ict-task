import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flightType } from "../utils/type/flightTypes";
import { getFlights } from "../lib/slice/flightSlice";
import Loading from "../components/Loading";

const Main:any = () => {
    const dispatch = useDispatch();
  // const [flights, setFlights] = useState<flightType[]>([])
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
      {/* {flights.map((flight:any) => <Flight key={flight.flight_number} flight = {flight}></Flight>)} */}
    </div>
  );
};

export default Main;

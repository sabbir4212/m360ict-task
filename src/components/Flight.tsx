import React from 'react';
import { useSelector } from 'react-redux';
import { flightType } from '../utils/type/flightTypes';

const Flight = ({flight}:{flight:flightType}) => {
    // console.log(flight)
    // const {crew,details,flight_number,is_tentative,launch_date_local,launch_date_unix,launch_date_utc,launch_site,launch_success,launch_window,launch_year,links,mission_id,mission_name,rocket,ships,static_fire_date_unix,static_fire_date_utc,tbd,telemetry,tentative_max_precision,timeline,upcoming} = flight
    return (
        <div>
            {/* <h4>{mission_name}</h4>
            <p>{details}</p> */}
        </div>
    );
};

export default Flight;
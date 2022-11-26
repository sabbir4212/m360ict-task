import { Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import ShowSingleFlight from './ShowSingleFlight';

const Flights = () => {
    const filtereds = useSelector((state: any) => state.filteredFlight);
    const { filtered, FilLoading } = filtereds;
    return (
        <Row className="ant-row">
        {filtered.length < 1 ? (
          <h1>No Data Found</h1>
        ) : (
          filtered.map((flight: any) => (
            <ShowSingleFlight key={flight.launch_date_local} flight={flight}></ShowSingleFlight>
          ))
        )}
      </Row>
    );
};

export default Flights;
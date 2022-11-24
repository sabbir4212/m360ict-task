import { Alert, Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div style={{height:'100vh'}}>
      <Spin tip="Loading...">
        <Alert style={{height:"100vh", textAlign:"center"}}
          message="Please Wait"
          description=""
          type="info"
        />
      </Spin>
    </div>
  );
};

export default Loading;

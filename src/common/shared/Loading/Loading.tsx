import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;

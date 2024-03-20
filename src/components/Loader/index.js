import React from "react";

import { CirclesWithBar } from "react-loader-spinner";
import "./styles.sass";

const Loader = ({ visible }) => {
  if (!visible) return <></>;
  return (
    <div className="loader-wrap">
      <CirclesWithBar
        height="100"
        width="100"
        color="#F4E041"
        outerCircleColor="#F4E041"
        innerCircleColor="#F4E041"
        barColor="#F4E041"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

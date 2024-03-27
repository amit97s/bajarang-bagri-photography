import React from "react";
import bimg28 from "../subassets/bagris images/_AJU1284.jpg";

const Porteng = () => {
  return (
    <div className="Porteng">
      <div className="engagement">
        <div
          className="engagement-head"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "37px", textShadow: "2px 2px 3px grey" }}>
            Engagement
          </p>
        </div>
        <div className="engagement-background">
          <img src={bimg28} alt="bimg" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Porteng;

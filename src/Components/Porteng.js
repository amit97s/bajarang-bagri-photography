import React from "react";
// import engage from "./Engagement.css";
// import bimg19 from "../subassets/bagris images/_AJU0240-2.jpg";
// import bimg20 from "../subassets/bagris images/_AJU0240.jpg";
// import bimg21 from "../subassets/bagris images/_AJU0440.jpg";
// import bimg22 from "../subassets/bagris images/_AJU0463.jpg";
// import bimg23 from "../subassets/bagris images/_AJU0468.jpg";
// import bimg24 from "../subassets/bagris images/_AJU0756 2.jpg";
// import bimg25 from "../subassets/bagris images/_AJU0756.jpg";
// import bimg26 from "../subassets/bagris images/_AJU0803.jpg";
// import bimg27 from "../subassets/bagris images/_AJU0863.jpg";
import bimg28 from "../subassets/bagris images/_AJU1284.jpg";
// import bimg29 from "../subassets/bagris images/_AJU1479.jpg";
// import bimg30 from "../subassets/bagris images/_AJU1481.jpg";
// import bimg31 from "../subassets/bagris images/_AJU1560.jpg";

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

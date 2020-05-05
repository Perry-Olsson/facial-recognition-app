import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="opacity ma4 mt0">
      <Tilt
        className="Tilt br2 "
        options={{ max: 50 }}
        style={{ height: "fit-content", width: "fit-content" }}
      >
        <div className="Tilt-inner">
          {" "}
          <img
            style={{ padding: "15px" }}
            height="100px"
            alt="logo"
            src={brain}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

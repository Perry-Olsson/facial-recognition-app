import React from "react";

const Navigation = ({ route, onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("Sign in")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        {route === "Register" ? (
          <p
            onClick={() => onRouteChange("Sign in")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign in
          </p>
        ) : (
          <p
            onClick={() => onRouteChange("Register")}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </p>
        )}
      </nav>
    );
  }
};

export default Navigation;

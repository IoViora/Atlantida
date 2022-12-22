import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="notfound">
      <p className="notfoundleft">404</p>
      <div className="notfoundright">
        <h3 className="notfoundtext">
          SORRY, SEEM'S LIKE YOU TRYING TO FIND WRONG PATH
        </h3>
      </div>
    </div>
  );
};

export default NotFound;

import React from "react";
import nodata from "../assets/noData.svg";

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">Oops, Something Went Wrong!</h1>
        <p className="error-message">{message}</p>
        <p className="error-suggestion">
          Try searching with the title of the image
        </p>
        <div className="error-image">
          <img src={nodata} alt="Error" />
        </div>
      </div>
    </div>
  );
};

export default Error;

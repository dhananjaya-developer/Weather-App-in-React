import React from "react";

function Error({message}) {
  return (
    <div className="error">
      <p className="error-text">{message}</p>
    </div>
  );
}

export default Error;

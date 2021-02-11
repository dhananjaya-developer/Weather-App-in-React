import React from "react";
import "../css/weathersearch.scss";

function WeatherSearch({ api_call }) {
  return (
    <>
      <div className="form__group field">
        <input
          name="location"
          id="location"
          className="form__field"
          type="text"
          placeholder="Location"
          onKeyUp={api_call}
        />
        <label htmlFor="location" className="form__label">
          Location
        </label>
      </div>
    </>
  );
}

export default WeatherSearch;

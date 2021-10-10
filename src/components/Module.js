import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../Styling/Module.css";
import flower from "../Assets/zalandopng.png";
export default function Module(props) {
  return (
    <Fragment>
      <div className="modulecontainer">
        <img src={flower} alt="moduleflower" className="moduleflower" />
        <div className="oneline22">
          <div className="toggleswitch22">
            <input
              type="checkbox"
              id={`switch ${props.szamlalo}`}
              className="checkbox22"
            />
            <label
              for={`switch ${props.szamlalo}`}
              className="toggle22"
            ></label>
          </div>
          <Link to="/zalando">
            <img src={flower} alt="settinga" className="moduleflower22" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="ui secondary pointing">
      <p>
        <Link to="/" className="item">
          streamers
        </Link>
        <div className="right menu">
          <Link to="/Streams/new" className="item">create</Link>
        </div>
      </p>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        streamers
      </Link>
      <div className="right menu">
        <Link to="/streams/new" className="item">
          create
        </Link>
      </div>
    </div>
  );
}

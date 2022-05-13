import React from "react";
import {Link} from "react-router-dom";
import "./NotFound.scss";
import locales from "../../locales";

function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__heading">
        {locales.notFound.heading}
      </h1>
      <div>
        <Link className="not-found__btn" to="/">{locales.notFound.mainPage}</Link>
      </div>
    </main>
  );
}

export default NotFound;

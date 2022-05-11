import React from "react";
import {Link} from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__heading">
        Сторінка не знайдена або контент на цій сторінці поки відсутній
      </h1>
      <div>
        <Link className="not-found__btn" to="/">Головна сторінка</Link>
      </div>
    </main>
  );
}

export default NotFound;

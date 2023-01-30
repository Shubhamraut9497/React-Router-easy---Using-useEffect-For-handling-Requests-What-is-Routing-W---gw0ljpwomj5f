import React from "react";

import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to={"/"}>
            <li>Index Page</li>
          </Link>
          <Link to={"/home"}>
            <li>Home Page</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

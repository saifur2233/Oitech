import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  const [dark, setDark] = useState(false);
  const handleDark = () => {
    setDark(!dark);
    localStorage.setItem("dark-mode", !dark);
  };

  useEffect(() => {
    const localDark = localStorage.getItem("dark-mode");
    console.log(localDark);
    setDark(localDark);
  }, []);

  useEffect(() => {
    if (dark) {
      document.querySelector("html")?.setAttribute("data-theme", "night");
    } else {
      document.querySelector("html")?.setAttribute("data-theme", "winter");
    }
  }, [dark]);

  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="font-bold text-white" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-bold text-white" to="/about">
          About
        </Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl font-bold text-white">
          <img src="https://i.ibb.co/51wDkMN/logo.png" width="200" alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-accent text-white mr-4">Get started</Link>
        <button onClick={handleDark} className="btn btn-ghost btn-circle">
          {localStorage.getItem("dark-mode") == "false" ? (
            <FaRegMoon size={"2em"}></FaRegMoon>
          ) : (
            <FaSun size={"2em"}></FaSun>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;

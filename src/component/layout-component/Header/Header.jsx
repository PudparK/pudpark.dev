import headerLinks from "./headerLinks.json";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./pk-development-large-bg-white.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleHeader() {
    setIsOpen(!isOpen);
  }

  function toggleClose() {
    setIsOpen(false);
  }

  function getPageLinks() {
    const links = headerLinks.links;

    const linksMap = links.map((link) => {
      if (link.type === "general") {
        return (
          <Link
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
            to={link.url}
            onClick={toggleClose}
          >
            {link.name}
          </Link>
        );
      } else {
        return (
          <Link
            className="inline-block text-xl px-4 py-2 leading-none border rounded border-red hover:border-transparent hover:bg-red hover:text-black mt-4 lg:mt-0"
            to={link.url}
            onClick={toggleClose}
          >
            {link.name}
          </Link>
        );
      }
    });
    return linksMap;
  }

  let mobileClose = isOpen ? "" : " mobile-close";

  return (
    <nav className="py-3">
      <div className="items-center justify-between flex-wrap flex px-3">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/" onClick={toggleClose}>
            <img className="header-logo" src={logo} alt="PudparK Developer" />
          </Link>
        </div>
        <div className="block lg:hidden" onClick={toggleHeader}>
          <button className="flex items-center px-3 sm:px-1 py-2 rounded hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title> Menu </title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={"w-full block lg:w-auto" + mobileClose}>
          <div className="text-xl">{getPageLinks()}</div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

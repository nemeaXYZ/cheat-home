import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { Container } from "../../reusecore/Layout";

import logo from "../../assets/images/app/logo.png";

import Data from "./utility/data.js";
import ScrollspyMenu from "./utility/ScrollspyMenu";
import NavigationWrap from "./navigation.style";

const Navigation = () => {
  const [expand, setExpand] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 50 ? setScroll(true) : setScroll(false)
    );
  }, [expand, scroll]);

  return (
    <NavigationWrap className={`nav-block ${scroll ? "scrolled" : ""}`}>
      <Container>
        <div className="navbar-wrap">
          <Link href="/">
            <a className="logo">
              <img src={logo} alt="prime app landing" />
            </a>
          </Link>
          <nav className="nav">
            <FaBars
              className="mobile-menu-icon"
              onClick={() => setExpand(!expand)}
            />
            <ScrollspyMenu
              className={`collapsed ${expand ? "is-expanded" : ""}`}
              menuItems={Data.menuItems}
            />
          </nav>
        </div>
      </Container>
    </NavigationWrap>
  );
};

export default Navigation;

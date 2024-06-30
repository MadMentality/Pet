import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import { useState } from "react";
import menu from "../../../public/static/images/Nav/menu-2.png";
import logo from "../../../public/static/images/Nav/logo.jpg";
import search from "../../../public/static/images/Nav/search.png";

function Nav() {
  const [show, setShow] = useState("none");
  return (
    <nav>
      <div className={styles.root}>
        <div>
          <NavLink>
            <img src={menu} alt="menu"></img>
          </NavLink>
        </div>
        <NavLink to={"/"}>
          <img src={logo} alt="logo" className={styles.logo}></img>
        </NavLink>
        <div>
          <NavLink
            onClick={() => {
              if (show === "none") {
                setShow(() => "block");
              } else {
                setShow(() => "none");
              }
            }}
          >
            <img src={search} alt="search"></img>
          </NavLink>
          <input placeholder="search" style={{ display: show }}></input>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

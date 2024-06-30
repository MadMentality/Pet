import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import { useState } from "react";

function Nav() {
  const [show, setShow] = useState("none");
  return (
    <nav>
      <div className={styles.root}>
        <div>
          <NavLink>
            <img src="src/images/Nav/menu-2.png" alt="menu"></img>
          </NavLink>
        </div>
        <NavLink to={"/"}>
          <img
            src="src/images/Nav/logo.jpg"
            alt="logo"
            className={styles.logo}
          ></img>
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
            <img src="src/images/Nav/search.png" alt="search"></img>
          </NavLink>
          <input placeholder="search" style={{ display: show }}></input>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

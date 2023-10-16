import React from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as EN } from "../assets/icons/us-flag.svg";
import { ReactComponent as Down } from "../assets/icons/down.svg";
import styles from "./Navbar.module.css";
import SecondaryButton from "../components/SecondaryButton";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo className={styles.logo} />

      <div className={styles.right}>
        <div className={styles["language-container"]}>
          <EN className={styles.flag} />
          <p className={styles.language}>English</p>
          <Down className={styles.down} />
        </div>

        <SecondaryButton mode="light" />
      </div>
    </div>
  );
};

export default Navbar;

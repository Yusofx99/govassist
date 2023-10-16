import React from "react";

import styles from "./PageHeading.module.css";
import { ReactComponent as UpIcon } from "../assets/icons/up.svg";

const PageHeading = ({ text }) => {
  return (
    <div className={styles["heading-container"]}>
      <h1 className={styles.heading}>{text}</h1>
      <UpIcon className={styles["heading-icon"]} />
    </div>
  );
};

export default PageHeading;

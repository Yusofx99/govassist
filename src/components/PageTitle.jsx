import React from "react";

import { ReactComponent as VisaIcon } from "../assets/icons/visa.svg";
import styles from "./PageTitle.module.css";

const PageTitle = ({ text }) => {
  return (
    <div className={styles["icon-text-container"]}>
      <VisaIcon className={styles.icon} />
      <p>{text}</p>
    </div>
  );
};

export default PageTitle;

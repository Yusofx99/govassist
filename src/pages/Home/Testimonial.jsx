import React from "react";

import styles from "./Testimonial.module.css";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
import TrustPilot from "../../assets/images/trustpilot.svg";
import reviewer from "../../assets/images/reviewer.svg";
import fiveStars from "../../assets/images/five-stars.svg";
import customerSvg from "../../assets/images/feedback.svg";
import PageSections from "../../layouts/PageSections";

const Testimonial = () => {
  return (
    <PageSections>
      <div className={styles["icon-text-container"]}>
        <Star className={styles.icon} />
        <p>Our jobs speaks for ourselves!</p>
        <img src={TrustPilot} className={styles.trust} alt="" />
      </div>

      <div className={styles["user-feedback-illust-container"]}>
        <div className={styles["user-feedback-container"]}>
          <div className={styles.user}>
            <img src={reviewer} alt="" />
            <div>
              <a href="https://www.trustpilot.com/users/6481ca53107fe50012c018f0">
                Yeonseo Choi
              </a>
              <div className={styles["location-container"]}>
                <p>1 Review</p>
                <Location className={styles["location-icon"]} />
                <p className={styles["location-name"]}>KR</p>
              </div>
            </div>
          </div>

          <div className={styles["user-feedback"]}>
            <div className={styles["user-rating"]}>
              <img src={fiveStars} alt="" />
              <p>Mar 20, 2023</p>
            </div>
            <p className={styles.recom}>Highly Recommend</p>
            <p className={styles.review}>
              Nikka was a very professional consultant, always ready to assist
              us each step of the way. I was reminded of everthing and I had to
              take with to the interview and also later to pick my passport and
              my son`s. Thanks once more, I certainly recommend the service.
            </p>
            <p className={styles.date}>Date of experience: February 28, 2023</p>
          </div>
        </div>

        <div className={styles["user-illus"]}>
          <img src={customerSvg} alt="" />
        </div>
      </div>
    </PageSections>
  );
};

export default Testimonial;

import styles from "./Hero.module.css";

import Navbar from "../../layouts/Navbar";
import PageSections from "../../layouts/PageSections";
import { ReactComponent as Right } from "../../assets/icons/right.svg";
import { ReactComponent as Down } from "../../assets/icons/down.svg";
import { ReactComponent as Family } from "../../assets/icons/people.svg";
import { ReactComponent as Official } from "../../assets/icons/offical.svg";
import { ReactComponent as Wallet } from "../../assets/icons/wallet.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";
import { ReactComponent as Sms } from "../../assets/icons/sms.svg";
import { ReactComponent as Hearts } from "../../assets/icons/double-hearts.svg";
import MainButton from "../../components/MainButton";

const Hero = () => {
  return (
    <div className={`${styles["hero-section"]}`}>
      <Navbar />

      <PageSections divClassName={styles["hero-container"]}>
        <div className={styles.left}>
          <h1>
            <span>Win the right to live</span> <br /> in the USA!
          </h1>

          <div className={styles["deadline-container"]}>
            <div className={styles.rectan}></div>
            <div className={styles["text-time-container"]}>
              <p>
                The official deadline is running, so hurry up and{" "}
                <a href="#">apply here!</a>
              </p>
              <div className={styles["time-container"]}>
                <div>
                  <p>27</p>
                  <p>days</p>
                </div>
                <div>
                  <p>24</p>
                  <p>hours</p>
                </div>
                <div>
                  <p>60</p>
                  <p>minutes</p>
                </div>
                <div>
                  <p>60</p>
                  <p>seconds</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["infos-container"]}>
            <div>
              <Family className={styles["infos-logo"]} />
              <p>
                50,000 people and their families will Live, Work and Study in
                USA.
              </p>
            </div>
            <div>
              <Official className={styles["infos-logo"]} />
              <p>OFFICIAL USA Governmental program.</p>
            </div>
            <div>
              <Wallet className={styles["infos-logo"]} />
              <p>Your chance to LIVE, WORK & STUDY in USA.</p>
            </div>
            <div>
              <Clock className={styles["infos-logo"]} />
              <p>
                Simple <a href="">registration</a> within 5 minutes.
              </p>
            </div>
            <div>
              <Sms className={styles["infos-logo"]} />
              <p>Personal support in every step.</p>
            </div>
            <div>
              <Hearts className={styles["infos-logo"]} />
              <p>Double chance for married people to win the Green Card.</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.check}>
            <Right className={styles.rightLogo} />
            <p>Check now for free!</p>
          </div>

          <h2>Green card eligibility</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div>
              <input type="email" placeholder="Email address" />
              <input type="email" placeholder="Your email again" />
            </div>
            <div className={styles["form-icon-container"]}>
              <input type="text" placeholder="Your country of birth" />
              <Down className={styles["form-icon"]} />
            </div>
            <div className={styles["form-icon-container"]}>
              <input type="text" placeholder="Marial Status" />
              <Down className={styles["form-icon"]} />
            </div>
            <div className={styles["check-container"]}>
              <div>
                <input type="checkbox" />
              </div>
              <label>
                Yes, I finished high school OR I have qualifying training.
              </label>
            </div>
            <MainButton text="Continue" />
          </form>
        </div>
      </PageSections>
    </div>
  );
};

export default Hero;

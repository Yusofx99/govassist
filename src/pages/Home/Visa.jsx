import React from "react";
import PageSections from "../../layouts/PageSections";
import MainButton from "../../components/MainButton";

import styles from "./Visa.module.css";

import PageHeading from "../../components/PageHeading";
import PageTitle from "../../components/PageTitle";

const Visa = () => {
  return (
    <PageSections className={styles.container}>
      <PageTitle text={"Find the right visa for you!"} />
      <PageHeading text={"Diversity Visa Cost"} />

      <div className={styles.table}>
        <div className={styles["table-header"]}>
          <div className={styles["table-header-blue"]}></div>

          <p className={styles["table-header-text"]}>
            Mandatory Government Fees for Green Cards
          </p>

          <MainButton color="orange" text="Apply now" />
        </div>

        <div className={styles["table-body"]}>
          <div>
            <p>Fee Type</p>
            <p>Cost (to Applicat Living in the U.S.)</p>
            <p>Cost (to Applicant Living Abroad)</p>
          </div>

          <div>
            <p>
              Family Sponsorship Form (
              <a
                target="_blank"
                href="https://www.boundless.com/immigration-resources/form-i-130-explained/"
              >
                I-130
              </a>
              )
            </p>
            <p>$535</p>
            <p>$535</p>
          </div>

          <div>
            <p>
              Green Card Application Form (
              <a href="https://www.boundless.com/immigration-resources/form-i-485-explained/">
                I-485
              </a>
              )
            </p>
            <p>$1140</p>
            <p>Not required</p>
          </div>

          <div>
            <p>Financial Support Form </p>
            <p>$0</p>
            <p>$120</p>
          </div>

          <div>
            <p>
              Work Permit Application Form (
              <a href="https://www.boundless.com/immigration-resources/what-is-an-affidavit-of-support/">
                I-765
              </a>
              ) (optional)
            </p>
            <p>$0</p>
            <p>Not required</p>
          </div>

          <div>
            <p>
              Travel Permit Application Form ({" "}
              <a href="https://www.boundless.com/immigration-resources/the-advance-parole-travel-document-explained/">
                I-131
              </a>
              ) (optional)
            </p>
            <p>$0</p>
            <p>Not required</p>
          </div>

          <div>
            <p>
              <a
                target="_blank"
                href="https://www.boundless.com/immigration-resources/biometrics-appointment/"
              >
                Biometrics
              </a>
              (Fingerprints & Photo)
            </p>
            <p>$85</p>
            <p>$0</p>
          </div>

          <div>
            <a
              target="_blank"
              href="https://www.boundless.com/immigration-resources/the-ds260-and-ds261-online-forms/"
            >
              State Department Processing
            </a>
            <p>Not required</p>
            <p>$325</p>
          </div>

          <div>
            <a
              target="_blank"
              href="https://www.uscis.gov/forms/filing-fees/uscis-immigrant-fee"
            >
              USCIS Immigrant Fee
            </a>
            <p>Not required</p>
            <p>$220</p>
          </div>

          <div>
            <a
              target="_blank"
              href="https://www.boundless.com/immigration-resources/preparing-for-the-medical-exam/"
            >
              Medical Examination
            </a>
            <p>*Varies</p>
            <p>*Varies</p>
          </div>

          <div>
            <p>Total</p>
            <p>$1760</p>
            <p>$1200</p>
          </div>
        </div>
      </div>
      <p className={styles.calculator}>
        Fees are subject to change, please use{" "}
        <a target="_blank" href="https://www.uscis.gov/feecalculator">
          this calculator
        </a>
      </p>

      <div className={styles["bellow-headings"]}>
        <PageHeading text={"Diversity Visa Timeline"} />
      </div>

      <div className={styles["bellow-headings"]}>
        <PageHeading text={"Diversity Visa FAQs"} />
      </div>
    </PageSections>
  );
};

export default Visa;

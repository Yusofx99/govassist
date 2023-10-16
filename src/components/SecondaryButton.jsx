import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({ mode }) => {
  return (
    <div className={mode === "dark" ? `${styles.dark}` : `${styles.light}`}>
      <p>Live chat</p>
    </div>
  );
};

export default SecondaryButton;

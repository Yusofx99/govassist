import styles from "./MainButton.module.css";

const MainButton = ({ color, text }) => {
  return (
    <button
      className={color === "orange" ? `${styles.orange}` : `${styles.green}`}
    >
      {text}
    </button>
  );
};

export default MainButton;

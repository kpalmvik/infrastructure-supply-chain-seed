import classNames from "classnames";
import styles from "./Button.module.css";

const Button = function Button({ children, secondary, type }) {
  const buttonClassNames = classNames(styles.button, {
    [styles.secondary]: secondary,
  });

  return (
    <button type={type} className={buttonClassNames}>
      {children}
    </button>
  );
};

export default Button;

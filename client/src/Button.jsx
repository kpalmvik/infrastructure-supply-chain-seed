import classNames from "classnames";
import styles from "./Button.module.css";

const Button = function Button({
  children,
  secondary,
  type = "button",
  onClick,
}) {
  const buttonClassNames = classNames(styles.button, {
    [styles.secondary]: secondary,
  });

  return (
    <button type={type} className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

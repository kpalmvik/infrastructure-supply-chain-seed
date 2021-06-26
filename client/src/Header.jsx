import styles from "./Header.module.css";
import tibberLogo from "./tibber.svg";

const Header = function Header() {
  return (
    <header className={styles.header}>
      <img src={tibberLogo} alt="Tibber" className={styles.logo} />
    </header>
  );
};

export default Header;

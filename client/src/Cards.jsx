import styles from "./Cards.module.css";

const Cards = function Cards({ children }) {
  return (
    <section>
      <ul className={styles.cards}>
        {children.map((child, i) => (
          <li className={styles.item} key={i}>
            {child}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cards;

import classNames from "classnames";
import styles from "./Card.module.css";

const Card = function Card({ large, title, imgSrc }) {
  return (
    <>
      <div className={classNames(styles.card, { [styles.largeCard]: large })}>
        <img
          src={imgSrc}
          alt=""
          className={classNames([styles.image], {
            [styles.largeImage]: large,
          })}
        />
        {!large && <h2 class={styles.title}>{title}</h2>}
      </div>
    </>
  );
};

export default Card;

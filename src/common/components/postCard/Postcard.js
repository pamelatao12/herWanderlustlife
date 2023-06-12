import React from "react";
import styles from "./postcard.module.css";
import { Link } from "react-router-dom";

const Postcard = ({ destination, title, image, long }) => {
  const destinationStyle = long ? styles.longDestination : styles.destination;
  return (
    <div className={styles.postCard}>
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        className={styles.postCardLink}
      >
        <div className={styles.imageFrame}>
          <img src={image} className={styles.postCardImage} />
        </div>
        <div className={styles.titleFrame}>
          <h1 className={destinationStyle}>{destination}</h1>
          <div className={styles.titleCard}>
            <h2 className={styles.title}>{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Postcard;

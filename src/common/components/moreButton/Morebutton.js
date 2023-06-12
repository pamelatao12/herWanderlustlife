import React from "react";
import styles from "./moreButton.module.css";
import { Link } from "react-router-dom";

const Morebutton = ({ label, path }) => {
  return (
    <Link to={path} className={styles.redirectMoreButton}>
      <button className={styles.button}>{label}</button>
    </Link>
  );
};

export default Morebutton;

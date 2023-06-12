import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const logo = "logo.svg";
  return (
    <div className={styles.header}>
      <Link to="/about" className={styles.redirectHeaderButton}>
        <button className={styles.redirectBtn}>ABOUT</button>
      </Link>
      <Link to="/destinations" className={styles.redirectHeaderDButton}>
        <button className={styles.redirectBtn}>DESTINATIONS</button>
      </Link>
      <Link to="/" className={styles.redirectHeaderLogo}>
        <img src={logo} className={styles.logo} />
      </Link>
      <Link to="/blog" className={styles.redirectHeaderButton}>
        <button className={styles.redirectBtn}>BLOG</button>
      </Link>
      <Link to="/contact" className={styles.redirectHeaderButton}>
        <button className={styles.redirectBtn}>CONTACT</button>
      </Link>
    </div>
  );
};

export default Header;

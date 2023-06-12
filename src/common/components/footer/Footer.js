import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const logo = "logo.svg";
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.footerlogo}>
        <Link to="/" className={styles.redirectFooterLogo}>
          <img src={logo} className={styles.logo} />
        </Link>
      </div>

      <Link to="/about" className={styles.redirectFooterButton}>
        <button className={styles.redirectBtn}>ABOUT</button>
      </Link>
      <Link to="/destinations" className={styles.redirectFooterButton}>
        <button className={styles.redirectBtn}>DESTINATIONS</button>
      </Link>
      <Link to="/blog" className={styles.redirectFooterButton}>
        <button className={styles.redirectBtn}>BLOG</button>
      </Link>
      <Link to="/contact" className={styles.redirectFooterButton}>
        <button className={styles.redirectBtn}>CONTACT</button>
      </Link>

      {/*<div className={styles.footerIcons}>
        <Link to="/" className={styles.redirectFooterLogo}>
          logo
        </Link>
      </div>
      */}
      <div className={styles.footerCopyright}>
        <p>Copyright &#169; {year} herWanderlustlife | All Rights Reserved</p>
        <Link to="/" className={styles.policy}>
          <button className={styles.redirectFooterPolicyBtn}>
            Disclosure and Policy
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

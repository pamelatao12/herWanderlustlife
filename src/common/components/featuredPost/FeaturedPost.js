import React from "react";
import styles from "./featuredPost.module.css";
import { Link } from "react-router-dom";

const FeaturedPost = ({ image, text, path }) => {
  return (
    <div className={styles.featuredPost}>
      <div className={styles.imageWrapper}>
        <img src={image} className={styles.featuredImage} />
      </div>
      <p className={styles.featuredText}>{text}</p>
      <Link to="/about" className={styles.redirectFeaturedPost}>
        <button className={styles.featuredButton}>READ MORE</button>
      </Link>
    </div>
  );
};

export default FeaturedPost;

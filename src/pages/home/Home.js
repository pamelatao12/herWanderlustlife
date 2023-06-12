import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import styles from "./home.module.css";
import Header from "../../common/components/header/Header";
import Footer from "../../common/components/footer/Footer";
import Postcard from "../../common/components/postCard/Postcard";
import Morebutton from "../../common/components/moreButton/Morebutton";
import FeaturedPost from "../../common/components/featuredPost/FeaturedPost";

const Home = () => {
  const taipeiImage = "taipei1.jpg";
  const yosemiteImage = "yosemite1.jpg";
  const deathValleyImage = "DV1.jpg";
  const myPicture = "myPicture.jpg";
  const featuredPostImage1 = "japan1.jpg";
  const featuredPostImage2 = "oahu1.jpg";
  const featuredPostImage3 = "morocco1.jpg";
  const featuredPostImage4 = "rome1.jpg";

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.siteContent}>
        <div className={styles.postCards}>
          <Postcard
            image={taipeiImage}
            destination="Taipei"
            title="THE ULTIMATE 5-DAY ITINERARY"
            long={false}
          />
          <Postcard
            image={yosemiteImage}
            destination="Yosemite"
            title="THE ULTIMATE WEEKEND ROADTRIP ITINERARY"
            long={false}
          />
          <Postcard
            image={deathValleyImage}
            destination="Death&nbsp;Valley"
            title="THE ULTIMATE 3-DAY ITINERARY"
            long={true}
          />
        </div>

        <div className={styles.moreBlogPostButton}>
          <Morebutton label="MORE BLOG POSTS  &#8594;" />
        </div>

        <div className={styles.myIntro}>
          <img src={myPicture} className={styles.myPicture} />
          <div className={styles.blurb}>
            <h1 className={styles.welcome}>Welcome,</h1>
            <p className={styles.blurbContent}>
              Hey there! I'm Pamela, a travel blogger based in the Bay Area with
              a passion for adventure and discovering new destinations. Join me
              as we embark on thrilling journeys, uncover hidden gems, and
              create unforgettable memories. Let's embrace the wanderlust and
              experience the wonders of the world together!
            </p>
            <h2 className={styles.signOff}>bon voyage!</h2>
          </div>
          <div className={styles.readMoreButton}>
            <Morebutton label="READ MORE  &#8594;" path="/about" />
          </div>
        </div>

        <h1 className={styles.featuredTitle}>featured destinations</h1>

        <div className={styles.featuredPosts}>
          <FeaturedPost
            image={featuredPostImage1}
            text="TOKYO, JAPAN — The Ultimate Guide to Tokyo: Top 10 Things to Do and Places to Go in Tokyo..."
            path="./about"
          />
          <FeaturedPost
            image={featuredPostImage2}
            text="OAHU, HAWAII — Exploring Oahu's Breathtaking Hiking Trails: A must-read guide for Oahu's 5 most popular hikes..."
            path="./about"
          />
          <FeaturedPost
            image={featuredPostImage3}
            text="MARRAKECH, MOROCCO — Experience the magic of Marrakech: The Perfect Itinerary for Exploring the Medina, Palaces, and Souks..."
            path="./about"
          />
          <FeaturedPost
            image={featuredPostImage4}
            text="ROME, ITALY — Unveiling the timeless charm of Rome: The Ultimate 5-day Itinerary to the Eternal City..."
            path="./about"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

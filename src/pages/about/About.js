import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import styles from "./about.module.css";
import Header from "../../common/components/header/Header";
import Footer from "../../common/components/footer/Footer";

const About = () => {
  const aboutImg = "aboutImg.jpg";
  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.aboutContents}>
        <img src={aboutImg} className={styles.aboutImg} />
        <div className={styles.blurb}>
          <h1 className={styles.welcome}>Welcome,</h1>
          <p className={styles.blurbContent}>
            Hey there! I'm Pamela, a travel enthusiast based in the Bay Area.
            I've got a serious case of wanderlust that keeps me constantly on
            the move, exploring new corners of the world and soaking in all the
            amazing experiences it has to offer.
            <br />
            <br />
            By day, I'm a tech professional, but my true passion lies in
            discovering new cultures, cuisines, and landscapes. As a
            self-proclaimed foodie, I can't resist the temptation of trying out
            local delicacies and uncovering hidden culinary treasures wherever I
            go. From street food stalls to Michelin-starred restaurants, I love
            indulging in the diverse flavors unique to each destination.
            <br />
            <br />
            I'm always seeking that adrenaline rush and pushing my limits.
            Whether it's hiking through dense rainforests, diving into turquoise
            waters, or zip-lining over breathtaking landscapes, I'm all in for
            those heart-pounding experiences that leave me breathless and
            wanting more. <br />
            <br />
            Through my travel blog, I invite you to join me on this incredible
            journey. I'll share my captivating stories and stunning photographs,
            transporting you to the places I've been and inspiring you to embark
            on your own adventures. I want to empower you to break free from
            your comfort zone, ignite your wanderlust, and explore the wonders
            of this beautiful world. <br />
            <br />
            So, buckle up and get ready to dive headfirst into a world of
            wanderlust. Together, let's chase sunsets, savor mouthwatering
            flavors, and embrace the thrill of the unknown. Life is too short to
            stay in one place, so let's embark on this incredible adventure
            together!
          </p>
          <h2 className={styles.signOff}>bon voyage!</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

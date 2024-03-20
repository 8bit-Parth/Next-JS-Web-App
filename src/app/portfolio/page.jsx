import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/occasions" className={styles.item}>
          <span className={styles.title}>Occasions</span>
        </Link>
        <Link href="/portfolio/corporate" className={styles.item}>
          <span className={styles.title}>Corporate Functions</span>
        </Link>
        <Link href="/portfolio/festivals" className={styles.item}>
          <span className={styles.title}>Festivals</span>
        </Link>
        <Link href="/portfolio/virtual" className={styles.item}>
          <span className={styles.title}>Virtual Events</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

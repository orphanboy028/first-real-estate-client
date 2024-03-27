import React from "react";
import styles from "./css/highlightercards.module.css";
import Link from "next/link";

export default function HighlighterCards() {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_wrraper}>
        <div className={styles.highlighter_headeTextContainer}>
          <h2 className={styles.medium_heading}>Independent/ Builder Floor</h2>
          <p className={styles.small_cardcaption}>140 + Properties</p>
        </div>
        <div className={styles.highliter_btnWrapper}>
          <Link href={"/"} className={styles.link_style}>
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}

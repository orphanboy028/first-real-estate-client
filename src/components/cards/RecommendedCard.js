import React from "react";
import styles from "./css/recommendedcard.module.css";
import Image from "next/image";
import dummyImage from "../../../public//website-static-img/card-image.jpg";
import {
  LuBedDouble,
  MdOutlineBathroom,
  BsTextarea,
} from "../../utils/ApplicationIcon";

export default function RecommendedCard() {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_wrraper}>
        <div className={styles.card_imageBox}>
          <Image
            src={dummyImage}
            alt="card-image"
            width={500}
            height={500}
            className={styles.card_image}
          />
          <div className={styles.card_smallhigliter}>Ready To Move</div>
        </div>
        <div className={styles.card_body}>
          <div className={styles.card_title}>
            <h4>Continue browsing Buy in GurgaonBuy </h4>
          </div>
          <div className={styles.card_features}>
            <div className={styles.card_fetureBox}>
              <div className={styles.feature_iconBox}>
                <LuBedDouble />
              </div>
              <div className={styles.fature_textBox}>2</div>
            </div>
            <div className={styles.card_fetureBox}>
              <div className={styles.feature_iconBox}>
                <MdOutlineBathroom />
              </div>
              <div className={styles.fature_textBox}>2</div>
            </div>
            <div className={styles.card_fetureBox}>
              <div className={styles.feature_iconBox}>
                <BsTextarea />
              </div>
              <div className={styles.fature_textBox}>2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

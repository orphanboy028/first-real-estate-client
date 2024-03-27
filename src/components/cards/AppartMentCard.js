import React from "react";
import styles from "./css/appartmentcard.module.css";
import Image from "next/image";
import dummyAppartment from "../../../public/website-static-img/dummy-appartment.jpeg";
import { MdOutlineMapsHomeWork } from "../../utils//ApplicationIcon";
import Link from "next/link";
export default function AppartMentCard() {
  return (
    <div className={styles.AppartMentCardcard_container}>
      <div className={styles.card_innerContainer}>
        <div className={styles.card_body}>
          <div className={styles.card_imageWapper}>
            <Image
              src={dummyAppartment}
              alt="appart-ment"
              width={200}
              height={200}
              className={styles.card_image}
            />
          </div>
          <div className={styles.card_content}>
            <div className={styles.card_title}>
              godrej hirise ultra luxury apartments
            </div>
            <div className={styles.card_SubHeading}>
              <div className={styles.sub_iconBox}>
                <MdOutlineMapsHomeWork />
              </div>
              <div className={styles.sub_headingTextBox}>
                3 BHK Independent Builder Floor in Aimnabad, Greater Noida
              </div>
            </div>
            <div className={styles.propery_featureBox}>
              <div className={styles.feature_Box}>
                <div className={styles.feature_value}>
                  2534 <span> Sq.Ft</span>
                </div>
                <div className={styles.feature_filed}>Build Up Area</div>
              </div>
              <div className={styles.feature_Box}>
                <div className={styles.feature_value}>Under Constructor</div>
                <div className={styles.feature_filed}>Possession Status </div>
              </div>
            </div>
            <div className={styles.meta_descreption}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent dictum pharetra finibus. Duis a arcu neque. Morbi
                sollicitudin urna in urna vivamus.
              </p>
            </div>
            <div className={styles.card_footer}>
              <div className={styles.priceBox}>
                <div className={styles.price_Value}>1.26 Cr</div>
                <div className={styles.price_prArea}>@ 1,40,000 per sq.m.</div>
              </div>
              <div className={styles.card_actionBox}>
                <button className={styles.enqueryBtn}>Send Enquey</button>
                <Link href={"/"} className={styles.exploreLink}>
                  Explore Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

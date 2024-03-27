"use client";

import React, { useState } from "react";
import styles from "./css/homenavBar.module.css";
import Image from "next/image";
import dummyImg from "../../../../public/website-static-img/website-logo.png";
import { usePathname } from "next/navigation";
import {
  MdKeyboardArrowDown,
  RiBarChartHorizontalLine,
  FaMagnifyingGlass,
} from "../../../utils/ApplicationIcon";
import NavSearchBar from "./NavSearchBar";
export default function HomeNavBar() {
  const pathname = usePathname();
  console.log(pathname);
  const [test, settest] = useState(true);
  return (
    <div>
      <div className={styles.dekstop_headerWrapper}>
        <div className={styles.nav_logWrapper}>
          <Image
            src={dummyImg}
            alt="website-logo"
            width={500}
            height={500}
            className={styles.imageLogo}
          />
        </div>
        <div className={styles.nav_SearchWrapper}>
          <NavSearchBar />
        </div>
        <div className={styles.nav_menuSection}>
          <div className={styles.menu_postContainer}>
            <div className={styles.post_propertyBox}>
              <div className={styles.boxText}>Sell/Rent Property</div>
              <div className={styles.box_highliter}>Free</div>
            </div>
          </div>
          <div className={styles.userProfile_DropDown}>
            <div className={styles.user_profileBox}>S</div>
            <div className={styles.dropdown_arrow}>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className={styles.Mobilehmenu__op1}>
            <RiBarChartHorizontalLine />
          </div>
        </div>
      </div>
      <div className={styles.mobile_headerWrapper}>
        <div className={styles.MobileNav_leftSide}>
          <div className={styles.hmenu__op1}>
            <RiBarChartHorizontalLine />
          </div>
          <div className={styles.Mobilenav_logWrapper}>
            <Image
              src={dummyImg}
              alt="website-logo"
              width={700}
              height={700}
              className={styles.imageLogo}
            />
          </div>
        </div>
        <div className={styles.MobileNav_RightSide}>
          <div className={styles.Mobileserach_iconBox}>
            <FaMagnifyingGlass />
          </div>
        </div>
      </div>
    </div>
  );
}

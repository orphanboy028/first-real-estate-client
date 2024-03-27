"use client";
import React, { useState } from "react";
import styles from "./css/herosection.module.css";
import { FaMagnifyingGlass } from "../../../utils/ApplicationIcon";
const searchTab = [
  {
    name: "New Project",
  },
  {
    name: "Plots",
  },
  {
    name: "Under Constructor",
  },
  {
    name: "Ready To Move",
  },
  {
    name: "Affordable",
  },
];

export default function HeroSection() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabClick = (index) => {
    setSelectedTab(index);
  };
  return (
    <div className={styles.dekstop_heroContaner}>
      <div className={styles.Herodekstop_SerachWrapper}>
        <div className={styles.search_tabContainer}>
          <div className={styles.search_tabWrapper}>
            {searchTab.map((el, i) => {
              return (
                <div
                  key={i}
                  className={`${styles.search_tab} ${
                    selectedTab === i ? styles.selected : ""
                  }`}
                  onClick={() => handleTabClick(i)}
                >
                  <p> {el.name} </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.search_wrapper}>
          <div className={styles.input_wrapper}>
            <input
              type="text"
              placeholder="Search project"
              className={styles.search_input}
            />
          </div>
          <div className={styles.serach_iconBox}>
            <FaMagnifyingGlass />
          </div>
        </div>
      </div>
    </div>
  );
}

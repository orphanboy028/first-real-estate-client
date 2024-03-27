import React from "react";
import styles from "./css/navSearch.module.css";
import {
  MdKeyboardArrowDown,
  FaMagnifyingGlass,
} from "../../../utils/ApplicationIcon";

export default function NavSearchBar() {
  return (
    <div className={styles.component__searchWrapper}>
      <div className={styles.serach_optionBox}>
        <div className={styles.textBox}>New Project</div>
        <div className={styles.dropdown_arrow}>
          <MdKeyboardArrowDown />
        </div>
      </div>
      <div className={styles.search_inputWrapper}>
        <input
          type="text"
          placeholder="Enter Locality / Projecr Society / Lanmark"
          className={styles.search_input}
        />
      </div>
      <div className={styles.search_iconBox}>
        <FaMagnifyingGlass />
      </div>
    </div>
  );
}

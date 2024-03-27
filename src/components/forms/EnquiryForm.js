import React from "react";
import styles from "./css/enqueryform.module.css";
export default function EnquiryForm() {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_haeding}>
        <h2 className={styles.section_heading}>
          {" "}
          Contact our Real Estate Experts
        </h2>
      </div>
      <div className={styles.form_box}>
        <form>
          <div className={styles.input_wrapper}>
            <input
              type="text"
              placeholder="Name"
              className={styles.formInput}
            />
          </div>
          <div className={styles.input_wrapper}>
            <input
              type="text"
              placeholder="Email"
              className={styles.formInput}
            />
          </div>
          <div className={styles.input_wrapper}>
            <input
              type="text"
              placeholder="Mobile"
              className={styles.formInput}
            />
          </div>
          <div className={styles.input_wrapper}>
            <button className={styles.formBtn}>Contact Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import styles from "~/styles/header.module.scss"

const Header: React.FC = () => (
  <header className={`${styles["enshita-header"]} ${styles["enshita-header-pc"]}`}>
    <div className={styles["enshita-header-logo"]}>
      enshita
    </div>
    <div className={styles["enshita-header-hidden"]}>
      button
    </div>
  </header>
);

export default Header

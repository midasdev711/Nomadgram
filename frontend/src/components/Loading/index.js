import React from "react";
import styles from "./styles.scss";

const Loading = props => (
  <div className={styles.container}>
    <div className={styles.spinner} />
  </div>
);

export default Loading;

import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";

const Test = () => <div className={styles.wrapper}> Hello </div>;

ReactDOM.render(<Test />, document.getElementById("root"));

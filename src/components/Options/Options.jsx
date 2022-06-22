import React from "react";

import styles from "./Options.css";

const Options = ({ options }) => {
  
  const markup = options.map((option) => (
    <button key={option.id} className={styles.option + " btn"} onClick={option.handler}>
      {option.name}
    </button>
  ));

  return <div className={styles.options}>{markup}</div>;
};

export default Options;

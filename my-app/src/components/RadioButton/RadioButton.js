import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import styles from "./RadioButton.module.css";

const RadioButton = ({ onClick, selected, info }) => {
  const { title, icon, membership, price, freeTrial } = info;
  const value = {
    title,
    icon,
    membership,
    price,
    freeTrial,
  };
  return (
    <div style={{ width: "100%" }}>
      <input
        className={styles.input}
        type="radio"
        id={`${title}${price}`}
        name="radio-method"
        value={JSON.stringify(value)}
        onClick={onClick}
        defaultChecked={selected}
      />
      <Card className={styles["radio-method"]}>
        <CardContent className={styles.card_container}>
          <label htmlFor={`${title}${price}`} className={styles.card_body}>
            <div className={styles.selectbox_header}>
              <img src={icon.src} />
            </div>
            <div className={styles.selectbox_description}>
              <Typography variant="subtitle1">{title}</Typography>
              <Typography variant="body2">{membership}</Typography>
              <Typography variant="body2">{freeTrial}</Typography>
            </div>
          </label>
        </CardContent>
      </Card>
    </div>
  );
};

export default RadioButton;

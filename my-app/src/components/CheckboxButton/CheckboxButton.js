import React from "react";
import { Typography, Card, CardContent, Checkbox } from "@mui/material";
import styles from "./CheckboxButton.module.css";

const CheckboxButton = ({ onChange, selected, info, checked }) => {
  const { title, description, packagePrice, price } = info;
  const value = {
    title,
    description,
    packagePrice,
    price,
  };
  return (
    <Card
      className={`${styles["checkbox-methods"]} ${
        selected ? styles.checkedContainer : styles.unCheckedContainer
      }`}
    >
      <CardContent className={styles.card_container}>
        <label htmlFor={`${title}${packagePrice}`} className={styles.card_body}>
          <div className={styles.selectbox_header}>
            <Checkbox
              className={styles.input}
              type="checkbox"
              id={`${title}${packagePrice}`}
              name="checkbox-method"
              value={JSON.stringify(value)}
              checked={checked}
              onChange={onChange}
            />
          </div>
          <div className={styles.checkboxContainer}>
            <div className={styles.selectbox_description}>
              <Typography variant="subtitle1">{title}</Typography>
              <Typography variant="body2">{description}</Typography>
            </div>
            <div className={styles.selectbox_description}>
              <label
                style={{
                  fontFamily: "Ubuntu",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#483EFF",
                }}
              >
                {packagePrice}
              </label>
            </div>
          </div>
        </label>
      </CardContent>
    </Card>
  );
};

export default CheckboxButton;

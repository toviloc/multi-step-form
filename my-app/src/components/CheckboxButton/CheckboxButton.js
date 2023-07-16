import React from "react";
import { Typography, Card, CardContent, Checkbox } from "@mui/material";
import styles from "./CheckboxButton.module.css";

const CheckboxButton = ({ onChange, selected, info, checked }) => {
  const { title, description, membership, price } = info;
  const value = {
    title,
    description,
    membership,
    price,
  };
  console.log(checked);
  return (
    <Card
      className={`${styles["checkbox-methods"]} ${
        selected ? styles.checkedContainer : styles.unCheckedContainer
      }`}
    >
      <CardContent className={styles.card_container}>
        <label htmlFor={`${title}${membership}`} className={styles.card_body}>
          <div className={styles.selectbox_header}>
            <Checkbox
              className={styles.input}
              type="checkbox"
              id={`${title}${membership}`}
              name="checkbox-method"
              value={JSON.stringify(value)}
              checked={checked}
              onChange={onChange}
            />
          </div>
          <div className={styles.checkboxContainer}>
            <div className={styles.selectbox_description}>
              <Typography variant="body2">{title}</Typography>
              <Typography variant="body2">{description}</Typography>
            </div>
            <div className={styles.selectbox_description}>
              <Typography variant="body2">{membership}</Typography>
            </div>
          </div>
        </label>
      </CardContent>
    </Card>
  );
};

export default CheckboxButton;

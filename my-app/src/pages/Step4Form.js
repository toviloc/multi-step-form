import React, { useState, useContext, useEffect } from "react";
import style from "./MultiStepForm.module.css";
import { Link, Typography } from "@mui/material";
import { GlobalStateContext } from "@/globalContext/globalContext";

const Step4Form = () => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext);
  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(globalState);
  let sum = globalState.selectedValue.price;
  globalState.addonValue.forEach((element) => {
    sum += element.price;
  });
  console.log("sum", sum);
  return (
    <div className={style.subFormContainer}>
      <div className={style.title}>
        <Typography variant="h4">Finishing up</Typography>
        <Typography variant="body1">
          Double-check everything looks OK before confirming.
        </Typography>
      </div>
      <div className={style.payListContainer}>
        <div className={style.optionPayContainer}>
          <div>
            <Typography variant="subtitle1">
              {globalState.selectedValue.title}{" "}
              {globalState.isMonthly ? "(Monthly)" : "(Yearly)"}
            </Typography>
            <Link>change</Link>
          </div>
          <div>
            <label
              style={{
                color: "#022959",
                fontFamily: "Ubuntu",
                fontFamily: "16px",
                fontWeight: "700",
              }}
            >
              {globalState.selectedValue.packagePrice}
            </label>
          </div>
        </div>
        <hr />
        {globalState.addonValue.map((item) => (
          <div
            className={style.totalPayContainer}
            key={`${item.title}${item.packagePrice}`}
          >
            <div>
              <Typography variant="body1">{item.title}</Typography>
            </div>
            <div>
              <label
                style={{
                  color: "#022959",
                  fontFamily: "Ubuntu",
                  fontFamily: "14px",
                  fontWeight: "400",
                }}
              >
                {item.packagePrice}
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className={style.totalPayContainer}>
        {globalState.isMonthly ? (
          <>
            <div style={{ paddingLeft: "24px" }}>
              <Typography variant="body1">Total (per month)</Typography>
            </div>
            <div>
              <Typography variant="h6">${sum}/mo</Typography>
            </div>
          </>
        ) : (
          <>
            <div style={{ paddingLeft: "24px" }}>
              <Typography variant="body1">Total (per year)</Typography>
            </div>
            <div>
              <Typography variant="h6">${sum}/yr</Typography>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Step4Form;

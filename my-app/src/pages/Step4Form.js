import React, { useState, useContext } from "react";
import style from "./MultiStepForm.module.css";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "@/globalContext/globalContext";

const Step4Form = () => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext);
  console.log(globalState);
  const handleGetGlobalData = () => {};
  return (
    <div className={style.subFormContainer}>
      <div className={style.title}>
        <Typography variant="h4">Finishing up</Typography>
        <Typography variant="body2">
          Double-check everything looks OK before confirming.
        </Typography>
      </div>
      <div className={style.payListContainer}>
        <div className={style.optionPayContainer}>
          <div>
            <Typography variant="body1">
              {globalState.optionSelected.title}
            </Typography>
            <Typography variant="body1">change</Typography>
          </div>
          <div>
            <Typography variant="body1">
              {globalState.optionSelected.membership}
            </Typography>
          </div>
        </div>
        <hr />
        {globalState.addonValue.map((item) => (
          <div className={style.totalPayContainer}>
            <div>
              <Typography variant="body1">{item.title}</Typography>
            </div>
            <div>
              <Typography variant="body1">{item.membership}</Typography>
            </div>
          </div>
        ))}
      </div>
      <div className={style.totalPayContainer}>
        <div>
          <Typography variant="body1">Total (per year)</Typography>
        </div>
        <div>
          <Typography variant="body1">$120/yr</Typography>
        </div>
      </div>
    </div>
  );
};

export default Step4Form;

import React, { useContext, useEffect } from "react";
import style from "./MultiStepForm.module.css";

import { TextField, Typography } from "@mui/material";
import { GlobalStateContext } from "@/globalContext/globalContext";

const Step1Form = () => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext);
  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    const newState = {
      ...globalState,
    };
    newState[name] = value;
    setGlobalState(newState);
  };
  return (
    <div className={style.subFormContainer}>
      <div className={style.title}>
        <Typography variant="h4">Personal info</Typography>
        <Typography variant="body2">
          Please provide your name, email address, and phone number.
        </Typography>
      </div>
      <div className={style.form}>
        <div>
          <Typography variant="subtitle2">Name</Typography>
          <TextField
            className={style.textField}
            size="small"
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
            name="name"
            defaultValue={globalState.name}
          />
        </div>
        <div>
          <Typography variant="subtitle2">Email Address</Typography>
          <TextField
            className={style.textField}
            size="small"
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
            name="email"
            defaultValue={globalState.email}
          />
        </div>
        <div>
          <Typography variant="subtitle2">Phone Number</Typography>
          <TextField
            className={style.textField}
            size="small"
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
            name="phone"
            defaultValue={globalState.phone}
          />
        </div>
      </div>
    </div>
  );
};

export default Step1Form;

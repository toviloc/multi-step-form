import React, { useContext, useEffect } from "react";
import style from "./MultiStepForm.module.css";

import { TextField, Typography } from "@mui/material";
import { GlobalStateContext } from "@/globalContext/globalContext";
import validate from "../services/validation";
import { formSchema } from "../services/formSchema";

const Step1Form = () => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext);
  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    const newState = {
      ...globalState,
    };
    newState[name] = value;
    const errors = validate({ form: newState, schema: formSchema });
    newState.errors = errors;
    setGlobalState(newState);
  };

  const handleClick = (evt) => {
    const { name, value } = evt.target;
    const newState = {
      ...globalState,
    };
    newState.clicked = newState.clicked || {};
    newState.clicked[name] = true;
    setGlobalState(newState);
  };
  const { errors, clicked } = globalState || {};
  return (
    <div className={style.subFormContainer}>
      <div className={style.title}>
        <Typography variant="h4">Personal info</Typography>
        <Typography variant="body1">
          Please provide your name, email address, and phone number.
        </Typography>
      </div>
      <div className={style.form}>
        <div>
          <Typography variant="subtitle2">Name</Typography>
          <TextField
            placeholder="e.g. Stephen King"
            className={style.textField}
            size="small"
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
            name="name"
            defaultValue={globalState !== undefined ? globalState.name : ""}
            error={
              errors && errors.name && clicked && clicked.name ? true : false
            }
            onClick={handleClick}
          />
          {clicked && clicked.name && errors && errors.name && (
            <Typography variant="caption" className={style.error}>
              {errors.name}
            </Typography>
          )}
        </div>
        <div>
          <Typography variant="subtitle2">Email Address</Typography>
          <TextField
            placeholder="e.g. stephenking@lorem.com"
            className={style.textField}
            size="small"
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
            name="email"
            defaultValue={globalState !== undefined ? globalState.email : ""}
            error={
              errors && errors.email && clicked && clicked.email ? true : false
            }
            onClick={handleClick}
          />
          {clicked && clicked.email && errors && errors.email && (
            <Typography variant="caption" className={style.error}>
              {errors.email}
            </Typography>
          )}
        </div>
        <div>
          <Typography variant="subtitle2">Phone Number</Typography>
          <TextField
            placeholder="e.g. +1 234 567 890"
            className={style.textField}
            size="small"
            id="outlined-basic"
            variant="outlined"
            onChange={handleChange}
            name="phone"
            defaultValue={globalState !== undefined ? globalState.phone : ""}
            error={
              errors && errors.phone && clicked && clicked.phone ? true : false
            }
            onClick={handleClick}
          />
          {clicked && clicked.phone && errors && errors.phone && (
            <Typography variant="caption" className={style.error}>
              {errors.phone}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step1Form;

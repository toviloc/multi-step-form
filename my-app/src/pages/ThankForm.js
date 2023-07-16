import React from "react";
import { Typography } from "@mui/material";
import style from "@/pages/MultiStepForm.module.css";
import CheckIcon from "@/Icons/Check.svg";

const ThankForm = () => {
  return (
    <div className={style.thankFormContainer}>
      <div>
        <img src={CheckIcon.src} alt="Thank you" />
      </div>
      <div>
        <Typography variant="h4">Thank you!</Typography>
      </div>
      <div>
        <Typography variant="body1">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Typography>
      </div>
    </div>
  );
};

export default ThankForm;

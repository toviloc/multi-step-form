"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepLabel } from "@mui/material";
import style from "./MultiStepForm.module.css";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Step3Form from "./Step3Form";
import Step4Form from "./Step4Form";
import ThankForm from "./ThankForm";
import { GlobalStateContext } from "@/globalContext/globalContext";

const steps = [
  {
    step: 1,
    label: "YOUR NAME",
  },
  {
    step: 2,
    label: "SELECT PLAN",
  },
  {
    step: 3,
    label: "ADD-ON",
  },
  {
    step: 4,
    label: "SUMMARY",
  },
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [allCompleted, setAllCompleted] = useState(false);

  const totalSteps = () => {
    return steps.length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return true;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    setAllCompleted(true);
  };

  return (
    <div className={style.stepFormContainer}>
      <Stepper
        className={style.stepperContainer}
        nonLinear
        activeStep={activeStep}
        connector={<div style={{ flex: "0" }}></div>}
      >
        {steps.map((e, index) => (
          <Step key={e.step} completed={completed[index]}>
            <StepLabel>
              <Typography
                variant="subtitle1"
                style={{ color: "#ABBCFF", fontSize: "12px" }}
                className={style.stepLabel}
              >
                STEP {e.step}
              </Typography>
              <Typography variant="subtitle1" className={style.stepper}>
                {e.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={style.formerContainer}>
        {allCompleted ? (
          <React.Fragment>
            <ThankForm />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 && <Step1Form />}
            {activeStep === 1 && <Step2Form />}
            {activeStep === 2 && <Step3Form />}
            {activeStep === 3 && <Step4Form />}
            <Box className={style.stepButtonContainer}>
              <div>
                {activeStep > 0 ? (
                  <Button
                    className={style.backButton}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Go back
                  </Button>
                ) : (
                  ""
                )}
              </div>
              <div>
                {activeStep === 3 ? (
                  <Button
                    className={style.stepConfirmButton}
                    onClick={handleComplete}
                  >
                    Confirm
                  </Button>
                ) : (
                  <Button className={style.stepNextButton} onClick={handleNext}>
                    Next Step
                  </Button>
                )}
              </div>
            </Box>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;

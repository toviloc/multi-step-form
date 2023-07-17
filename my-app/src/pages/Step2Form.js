import React, { useEffect, useState, useContext } from "react";
import style from "./MultiStepForm.module.css";

import { Typography, Switch } from "@mui/material";
import RadioButton from "@/components/RadioButton/RadioButton";
import ArcadeIcon from "@/Icons/Arcade.svg";
import AdvancedIcon from "@/Icons/Advanced.svg";
import ProIcon from "@/Icons/Pro.svg";
import { styled } from "@mui/material/styles";
import { GlobalStateContext } from "@/globalContext/globalContext";

const monthlyOption = [
  {
    icon: ArcadeIcon,
    title: "Arcade",
    packagePrice: "$9/mo",
    price: 9,
    freeTrial: "",
  },
  {
    icon: AdvancedIcon,
    title: "Advanced",
    packagePrice: "$12/mo",
    price: 12,
    freeTrial: "",
  },
  {
    icon: ProIcon,
    title: "Pro",
    packagePrice: "$15/mo",
    price: 15,
    freeTrial: "",
  },
];

const yearlyOption = [
  {
    icon: ArcadeIcon,
    title: "Arcade",
    packagePrice: "$90/yr",
    price: 90,
    freeTrial: "2 months free",
  },
  {
    icon: AdvancedIcon,
    title: "Advanced",
    packagePrice: "$120/yr",
    price: 120,
    freeTrial: "2 months free",
  },
  {
    icon: ProIcon,
    title: "Pro",
    packagePrice: "$150/yr",
    price: 150,
    freeTrial: "2 months free",
  },
];

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 38,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(19px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(18px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#022959",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: "#022959",
    boxSizing: "border-box",
  },
}));

const Step2Form = () => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext);

  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedValue, setSelectedValue] = useState(monthlyOption[0]);
  const [selectedOptionMY, setSelectedOptionMY] = useState(monthlyOption);

  const handleSwitch = () => {
    setIsMonthly(!isMonthly);

    setGlobalState({ ...globalState, isMonthly: !isMonthly });
  };
  const handleClick = (evt) => {
    setSelectedValue(JSON.parse(evt.target.value));
  };

  useEffect(() => {
    if (isMonthly === true) {
      setSelectedOptionMY(monthlyOption);
    } else {
      setSelectedOptionMY(yearlyOption);
    }
  }, [isMonthly]);

  useEffect(() => {
    setGlobalState({
      ...globalState,
      isMonthly,
      selectedValue,
    });
  }, [selectedValue]);
  console.log(globalState);

  return (
    <div className={style.subFormContainer}>
      <div className={style.title}>
        <Typography variant="h4">Select your plan</Typography>
        <Typography variant="body1">
          You have the option of monthly or yearly billing.
        </Typography>
      </div>
      <div className={style.form}>
        <div className={style.radioContainer}>
          {selectedOptionMY.map((option) => (
            <RadioButton
              key={option.title}
              onClick={handleClick}
              selected={selectedValue.title === option.title}
              info={option}
              freeTrial={option.freeTrial}
            />
          ))}
        </div>
        <div className={style.switchContainer}>
          <Typography
            variant="subtitle1"
            className={isMonthly ? style.selected : style.unselected}
          >
            Monthly
          </Typography>
          <AntSwitch onClick={() => handleSwitch()} />
          <Typography
            variant="subtitle1"
            className={!isMonthly ? style.selected : style.unselected}
          >
            Yearly
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Step2Form;

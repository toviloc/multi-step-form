import React, { useState, useContext, useEffect } from "react";
import style from "./MultiStepForm.module.css";
import { Typography, Checkbox } from "@mui/material";
import CheckboxButton from "@/components/CheckboxButton/CheckboxButton";
import { GlobalStateContext } from "@/globalContext/globalContext";

const MonthlyPickValue = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    packagePrice: "+$1/mo",
    price: 1,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    packagePrice: "+$2/mo",
    price: 2,
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    packagePrice: "+$2/mo",
    price: 2,
  },
];

const YearlyPickValue = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    packagePrice: "+$10/yr",
    price: 10,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    packagePrice: "+$20/yr",
    price: 20,
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    packagePrice: "+$20/yr",
    price: 20,
  },
];

const Step3Form = () => {
  const { globalState, setGlobalState } = useContext(GlobalStateContext);
  const [selectedValueMY, setSelectedValueMY] = useState([]);
  const [addonValue, setAddonValue] = useState(globalState.addonValue || []);

  const handleChange = (evt) => {
    const newArr = addonValue;
    if (evt.target.checked) {
      setAddonValue([...newArr, JSON.parse(evt.target.value)]);
    } else {
      const arr = removeAddonFromArray(JSON.parse(evt.target.value), newArr);
      setAddonValue([...arr]);
    }
  };

  const removeAddonFromArray = (addOn, addOnList) => {
    addOnList.forEach((element, index) => {
      if (element.title === addOn.title) {
        addOnList.splice(index, 1);
      }
    });
    return addOnList;
  };
  useEffect(() => {
    setGlobalState({ ...globalState, addonValue });
    if (globalState.isMonthly === true) {
      setSelectedValueMY(MonthlyPickValue);
    } else {
      setSelectedValueMY(YearlyPickValue);
    }
  }, [addonValue]);
  console.log(globalState);

  return (
    <div className={style.subFormContainer}>
      <div className={style.title}>
        <Typography variant="h4">Pick add-ons</Typography>
        <Typography variant="body1">
          Add-ons help enhance your gaming experience.
        </Typography>
      </div>
      <div className={style.checkboxCardContainer}>
        {selectedValueMY.map((option) => (
          <CheckboxButton
            key={option.title}
            onChange={handleChange}
            selected={
              addonValue.filter((c) => c.title === option.title).length > 0
            }
            info={option}
            checked={
              addonValue.filter((c) => c.title === option.title).length > 0
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Step3Form;

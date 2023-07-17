import { createContext } from "react";
const initialState = {
  addonValue: [],
  clicked: {},
  email: "",
  errors: {},
  name: "",
  phone: "",
  selectedValue: {
    freeTrial: "",
    icon: {},
    packagePrice: "",
    price: 0,
    title: "",
  },
  isMonthly: true,
};
export const GlobalStateContext = createContext(initialState);

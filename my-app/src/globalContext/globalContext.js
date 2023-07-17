import { createContext } from "react";

const initialState = {
  addonValue: [],
  clicked: {},
  email: "",
  errors: {},
  name: "",
  phone: "",
  selectedValue: {},
  isMonthly: true,
};

export const GlobalStateContext = createContext(initialState);

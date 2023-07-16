"use client";
import React, { useState } from "react";
import MultiStepForm from "@/pages/MultiStepForm";
import { GlobalStateContext } from "@/globalContext/globalContext";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import appTheme from "./appTheme";

export default function Home() {
  const [globalState, setGlobalState] = useState({});
  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <MultiStepForm />
        </ThemeProvider>
      </StyledEngineProvider>
    </GlobalStateContext.Provider>
  );
}

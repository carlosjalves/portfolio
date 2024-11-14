import useLocalStorage from "../../hooks/useLocalStorage";
import { useMemo } from "react";
//import { useLocation } from 'react-router-dom';

import {
  createTheme,
  CssBaseline,
  //responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

import { ColorModeContext } from "./colorModeContext";
import CustomGlobalStyles from "./CustomGlobalStyles";
import { palette } from "./palette";

export const getDesignTokens = (mode) => ({
  palette: palette(mode),
});

export function ThemeSetup({ children }) {
  const [mode, setMode] = useLocalStorage("mode", "dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [setMode],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <CustomGlobalStyles />
          {children}
        </StyledEngineProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

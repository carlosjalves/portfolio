export const palette = (mode) => {

  return {
    mode: mode,
    background: mode === "light" ? "#FFFFFF" : "#1C1C1C",
    border: mode === "light" ? "#EBEBEB" : "#333333",
    text: {
      primary: mode === "light" ? "#292929" : "#FFFFFF",
      secondary: mode === "light" ? "#999999" : "#C4C4C4",
      inverted: mode === "light" ? "#FFFFFF" : "#292929",
    },
  };
};

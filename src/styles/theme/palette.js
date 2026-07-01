export const palette = (mode) => {

  return {
    mode: mode,
    background: mode === "light" ? "#FFFFFF" : "#0B0B0B",
    border: mode === "light" ? "#EBEBEB" : "#333333",
    text: {
      primary: mode === "light" ? "#0B0B0B" : "#FFFFFF",
      secondary: mode === "light" ? "#999999" : "#848484",
      inverted: mode === "light" ? "#FFFFFF" : "#292929",
    },
    tag: {
      background: mode === "light" ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.07)",
      background_inv: mode === "dark" ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.07)",
      border: mode === "light" ? "rgba(0, 0, 0, 0.07)" : "rgba(255, 255, 255, 0.08)",
      active: mode === "light" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
      text: mode === "light" ? "#0B0B0B" : "rgba(255, 255, 255, 0.7216)",
    },
  };
};

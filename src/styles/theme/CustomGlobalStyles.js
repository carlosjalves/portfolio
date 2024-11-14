import { GlobalStyles } from "@mui/material";

const styles = (theme) => ({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },

  "html": {
    scrollBehavior: "smooth",
  },

  "body": {
    backgroundColor: theme.palette.background,
    margin: "0 30px",
  },

  "a": {
    color: theme.palette.text.primary,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    }
  },

  ".project-container img": {
    transition: "all 0.2s ease-in-out",
  },

  ".project-container:hover img": {
    filter: "brightness(80%)",
  },

  ".project-container h4": {
    color: theme.palette.text.secondary,
    transition: "color 0.3s ease",
  },

  ".project-container:hover h4": {
    color: theme.palette.text.primary,
  },

  ".project-container p": {
    color: theme.palette.text.secondary,
    transition: "color 0.3s ease",
  },

  ".project-container:hover p": {
    color: theme.palette.text.primary,
  },

  ".project-container:hover a": {
    textDecoration: "none",
  }
});

function CustomGlobalStyles() {
  const customGlobalStyles = <GlobalStyles styles={styles} />;

  return customGlobalStyles;
}
export default CustomGlobalStyles;

import { useTheme } from "@mui/material";

function Footer() {

  const theme = useTheme();

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "25% 25% 25% 25%", width: 'calc(100vw - 60px)', backgroundColor: theme.palette.background, padding: "8px 0 15px", borderTop: `1px solid ${theme.palette.border}` }}>
        <div style={{ lineHeight: "13px", gridColumnStart: 1 }}>
          <p style={{ color: theme.palette.text.secondary }}>2024</p>
        </div>

        <div style={{ lineHeight: "13px", gridColumnStart: 3 }}>
          <p style={{ color: theme.palette.text.secondary }}>Designed and Developed by</p>
          <h5 style={{ color: theme.palette.text.primary }}>carlosjalves</h5>
        </div>
      </div>
    </>
  );
}

export default Footer;

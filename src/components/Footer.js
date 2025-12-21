import { useTheme } from "@mui/material";
import Grid from '@mui/material/Grid2';

function Footer() {

  const theme = useTheme();

  return (
    <>
      <Grid container sx={{ padding: "8px 0 15px", borderTop: `1px solid ${theme.palette.border}` }}>
        <Grid size={6} style={{ lineHeight: "13px" }}>
          <p style={{ color: theme.palette.text.secondary }}>2026</p>
        </Grid>

        <Grid size={6} style={{ lineHeight: "13px" }}>
          <p style={{ color: theme.palette.text.secondary }}>Designed and Developed by</p>
          <h5 style={{ color: theme.palette.text.primary }}>carlosjalves</h5>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;

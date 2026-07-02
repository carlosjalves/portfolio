import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import Grid from '@mui/material/Grid2';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CustomLink from "../components/CustomLink";
import Button from "@mui/material/Button";
import { getSettings } from "../api/sanityClient";
import { Typography } from "@mui/material";

function Footer({ onNavigate }) {

  const theme = useTheme();
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // ABOUT
        const settingsData = await getSettings();
        setSettings(settingsData);

      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();

  }, []);


  return (
    <>
      {/* CONTACT */}
      <Grid container sx={{ padding: "30px 30px 20px", backgroundColor: theme.palette.text.primary, rowGap: { xs: "40px", sm: "100px" }, margin: "auto", maxWidth: "1920px" }}>
        <Grid size={{ xs: 12, sm: 3 }}>
          <Typography variant="h3" style={{ color: theme.palette.background, fontWeight: "500" }} sx={{ fontFamily: "Funnel Display", fontSize: { xs: "28px", md: "32px", lg: "42px", xl: "46px" }, lineHeight: { xs: "35px", md: "40px", lg: "52px", xl: "54px" }, paddingBottom: { xs: "15px", sm: "25px" } }} >Have a <b><i>new project</i></b> in mind?</Typography>
          <Button
            href="mailto:carlosjalves99@gmail.com"
            sx={{
              width: "fit-content",
              textTransform: "none",
              borderRadius: "50px",
              padding: "5px 12px",
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: 1,

              background: theme.palette.tag.background_inv,
              border: `1px solid ${theme.palette.text.secondary}`,
              color: theme.palette.background,

              transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",

              "&:hover": {
                background: theme.palette.background,
                color: theme.palette.text.primary,
                transform: "translateY(-2px)",
                boxShadow: `0 6px 20px ${theme.palette.text.primary}20`
              },

              "&:hover svg": {
                transform: "translate(1px, -1px)"
              },

              "& .MuiButton-endIcon": {
                marginLeft: "4px"
              }
            }}
            endIcon={
              <ArrowOutwardIcon
                sx={{
                  fontSize: "14px",
                  transition: "transform 0.2s ease"
                }}
              />
            }
          >
            Let's Talk
          </Button>
        </Grid>

        {/* QUICK LINKS */}
        <Grid size={{ xs: 6, sm: 3 }} offset={{ sm: 3 }} style={{ display: "flex", flexDirection: "column" }}>
          <h5 style={{ color: theme.palette.text.secondary, fontSize: "13px", paddingBottom: "6px" }}>Quick Links</h5>
          <CustomLink to="/" onNavigate={onNavigate} showIcon={false} sx={{ paddingBottom: "4px" }}>
            Home
          </CustomLink>
          <CustomLink to="/projects" onNavigate={onNavigate} showIcon={false} sx={{ paddingBottom: "4px" }}>
            Projects
          </CustomLink>
          <CustomLink to="/about" onNavigate={onNavigate} showIcon={false} sx={{ paddingBottom: "30px" }}>
            About
          </CustomLink>
          <CustomLink
            onClick={() =>
              document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }
            icon={ArrowUpwardIcon}
            sx={{ color: theme.palette.background }}
            textSx={{ fontSize: "14px" }}
          >
            Go to Top
          </CustomLink>
        </Grid>

        {/* SOCIAL */}
        <Grid size={{ xs: 6, sm: 3 }} style={{ display: "flex", flexDirection: "column" }}>
          <h5 style={{ color: theme.palette.text.secondary, fontSize: "13px", paddingBottom: "6px" }}>Social</h5>
          <CustomLink to="https://www.linkedin.com/in/carlosjalves99/" external icon={ArrowOutwardIcon} sx={{ paddingBottom: "4px" }}>
            LinkedIn
          </CustomLink>
          <CustomLink to="https://github.com/carlosjalves" external icon={ArrowOutwardIcon} sx={{ paddingBottom: "4px" }}>
            GitHub
          </CustomLink>
          <CustomLink to="https://www.behance.net/carlosjalves" external icon={ArrowOutwardIcon} sx={{ paddingBottom: "30px" }}>
            Behance
          </CustomLink>
          <CustomLink
            to={settings?.cvUrl}
            external
            icon={ArrowDownwardIcon}
            onClick={(e) => {
              if (window.umami) window.umami.track("Download CV");
            }}>
            Download CV
          </CustomLink>
        </Grid>

        {/* FOOTER */}
        <Grid size={6} sx={{ paddingTop: "10px", borderTop: `2px solid ${theme.palette.border}` }}>
          <h5 style={{ color: theme.palette.background }}>All Rights Reserved</h5>
        </Grid>
        <Grid size={3} sx={{ paddingTop: "10px", borderTop: `2px solid ${theme.palette.border}` }}>
          <h5 style={{ color: theme.palette.background }}>© 2026</h5>
        </Grid>
        <Grid size={3} sx={{ paddingTop: "10px", borderTop: `2px solid ${theme.palette.border}` }}>
          <h5 style={{ color: theme.palette.background, fontWeight: "600" }}>carlosjalves</h5>
        </Grid>

      </Grid >
    </>
  );
}

export default Footer;

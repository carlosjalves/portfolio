import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid2';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import CustomLink from "../components/CustomLink";
import { getSettings } from "../api/sanityClient";

import { useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material";
import { useLocation } from "react-router-dom"

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from "../styles/theme/colorModeContext";

import { useContext, useRef, useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';


function Navbar({ onNavigate }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [settings, setSettings] = useState(null);
  const [open, setOpen] = useState(false);


  // SCROLL PROGRESSIVO
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const start = 0;
  const end = 20;

  const progress = Math.min(
    Math.max((scrollY - start) / (end - start), 0),
    1
  );

  // VALORES DINÂMICOS
  const blur = 24;
  const bgOpacity = 0.6;

  const backgroundColor =
    theme.palette.mode === "dark"
      ? `rgba(11,11,11,${bgOpacity})`
      : `rgba(255,255,255,${bgOpacity})`;

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    async function fetchData() {
      try {
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
      {!isMobile ? (
        <Grid
          ref={navRef}
          container
          component="nav"
          sx={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "1920px",
            zIndex: 10,
            height: "65px",
            padding: "15px 30px",

            backgroundColor,
            backdropFilter: "saturate(1.8) blur(24px)",
            WebkitBackdropFilter: "saturate(1.8) blur(24px)",

            borderBottom: `2px solid ${theme.palette.mode === "dark"
              ? `rgba(255,255,255,${1 - progress})`
              : `rgba(11,11,11,${1 - progress})`
              }`,

            transition: "all 0.25s ease-out"
          }}
        >
          {/* LOGO */}
          <Grid size={3}>

            <CustomLink to="/" onNavigate={onNavigate} showIcon={false} textSx={{ fontFamily: "Funnel Display", fontSize: "28px", fontWeight: 800, fontStyle: "normal", lineHeight: "32px", color: theme.palette.text.primary }}>
              carlosjalves
            </CustomLink>
          </Grid>

          {/* MENU */}
          <Grid container size={3} alignItems="center" columnSpacing={3}>
            <CustomLink to="/" onNavigate={onNavigate} showIcon={false} sx={{ color: isActive("/") ? theme.palette.text.primary : theme.palette.text.secondary }}>
              Home
            </CustomLink>
            <CustomLink to="/projects" onNavigate={onNavigate} showIcon={false} sx={{ color: isActive("/projects") ? theme.palette.text.primary : theme.palette.text.secondary }}>
              Projects
            </CustomLink>
            <CustomLink to="/about" onNavigate={onNavigate} showIcon={false} sx={{ color: isActive("/about") ? theme.palette.text.primary : theme.palette.text.secondary }}>
              About
            </CustomLink>
          </Grid>

          {/* CV */}
          <Grid container size={3} alignItems="center">
            <CustomLink
              to={settings?.cvUrl}
              external
              icon={ArrowDownwardIcon}
              sx={{ color: theme.palette.text.secondary }}
              onClick={(e) => {
                if (window.umami) window.umami.track("Download CV");
              }}
            >
              CV
            </CustomLink>
          </Grid>

          {/* DARK MODE */}
          <Grid size={3} container justifyContent="flex-end">
            <CustomLink
              onClick={colorMode.toggleColorMode}
              showIcon={false}
              sx={{ color: theme.palette.text.primary, height: "24px", paddingTop: "6px" }}
            >
              {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </CustomLink>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          component="nav"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            padding: "15px 30px",
            //backgroundColor: theme.palette.background,
            height: "65px",
            zIndex: 10,

            backgroundColor,
            backdropFilter: `saturate(1.8) blur(${blur}px)`,
            WebkitBackdropFilter: `saturate(1.8) blur(${blur}px)`,

            borderBottom: `2px solid ${theme.palette.mode === "dark"
              ? `rgba(255,255,255,${1 - progress})`
              : `rgba(11,11,11,${1 - progress})`
              }`,

            transition: "all 0.25s ease-out"
          }}
        >
          <Grid size={9}>
            <CustomLink to="/" onNavigate={onNavigate} showIcon={false} textSx={{ fontFamily: "Funnel Display", fontSize: "28px", fontWeight: 800, fontStyle: "normal", lineHeight: "32px", color: theme.palette.text.primary }}>
              carlosjalves
            </CustomLink>
          </Grid>

          <Grid size={3} container justifyContent="flex-end">
            {!open ? (
              <IconButton onClick={toggleDrawer(true)} size='large' edge="start" sx={{ color: theme.palette.text.primary, padding: 0 }}>
                <MenuRoundedIcon fontSize='large' />
              </IconButton>
            ) : (
              <IconButton onClick={toggleDrawer(false)} size='large' edge="start" sx={{ color: theme.palette.text.primary, padding: 0 }}>
                <CloseRoundedIcon fontSize='large' />
              </IconButton>
            )}
          </Grid>
          <Drawer anchor={'bottom'}
            open={open}
            hideBackdrop
            onClose={toggleDrawer(false)}
            transitionDuration={300}
            PaperProps={{
              sx: {
                top: "62px",

                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(11,11,11,0.6)"
                    : "rgba(255,255,255,0.6)",

                backdropFilter: "saturate(1.8) blur(48px)",
                WebkitBackdropFilter: "saturate(1.8) blur(48px)",

                borderTop: `1px solid ${theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(11,11,11,0.1)"
                  }`,

                boxShadow: "none"
              }
            }}
            ModalProps={{ sx: { top: "62px" } }}>
            <Box sx={{ width: 'auto' }}
              role="presentation"
                  /*onClick={toggleDrawer(false)}*/>
              <List>
                <ListItem alignItems='center' onClick={toggleDrawer(false)} sx={{ justifyContent: "center" }}>
                  <CustomLink to="/" onNavigate={onNavigate} showIcon={false} sx={{ color: isActive("/") ? theme.palette.text.primary : theme.palette.text.secondary }}>
                    Home
                  </CustomLink>
                </ListItem>
                <ListItem alignItems='center' onClick={toggleDrawer(false)} sx={{ justifyContent: "center" }}>
                  <CustomLink to="/projects" onNavigate={onNavigate} showIcon={false} sx={{ color: isActive("/projects") ? theme.palette.text.primary : theme.palette.text.secondary }}>
                    Projects
                  </CustomLink>
                </ListItem>
                <ListItem alignItems='center' onClick={toggleDrawer(false)} sx={{ justifyContent: "center" }}>
                  <CustomLink to="/about" onNavigate={onNavigate} showIcon={false} sx={{ color: isActive("/about") ? theme.palette.text.primary : theme.palette.text.secondary }}>
                    About
                  </CustomLink>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem alignItems='center' sx={{ justifyContent: "center" }}>
                  <Button
                    variant="text"
                    endIcon={<FileDownloadRoundedIcon />}
                    href={settings?.cvUrl}
                    download
                    onClick={() => { if (window.umami) { window.umami.track("Download CV"); } }}
                    sx={{ color: theme.palette.text.primary, textTransform: "none", minWidth: "auto", padding: "5px 10px", borderRadius: "20px", "&:hover": { backgroundColor: theme.palette.action.hover, }, "& .MuiButton-endIcon": { ml: "0px", }, }} >
                    <Typography variant="body2" sx={{ fontSize: "0.9rem", fontWeight: 500 }} > Download CV </Typography>
                  </Button>
                </ListItem>
                <ListItem alignItems='center' sx={{ justifyContent: "center" }}>
                  <Stack direction="row" spacing={0}>
                    <a style={{ textDecoration: "none" }} href='https://www.linkedin.com/in/carlosjalves99/' target="_blank" rel="noopener noreferrer">
                      <IconButton size={'small'} sx={{ color: theme.palette.text.primary }}>
                        <LinkedInIcon />
                      </IconButton> </a>
                    <a style={{ textDecoration: "none" }} href='https://github.com/carlosjalves' target="_blank" rel="noopener noreferrer">
                      <IconButton size={'small'} sx={{ color: theme.palette.text.primary }}>
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  </Stack>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem alignItems='center' sx={{ justifyContent: "center" }}>
                  <IconButton size={'small'} sx={(theme) => ({ color: theme.palette.text.primary, height: "fit-content", justifySelf: "end" })} onClick={colorMode.toggleColorMode}>

                    {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Grid >
      )
      }
    </>
  );
}


export default Navbar;

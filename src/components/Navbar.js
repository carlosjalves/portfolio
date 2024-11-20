import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid2';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { useMediaQuery } from '@mui/material';


import { useTheme } from "@mui/material";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from "../styles/theme/colorModeContext";

import { useContext, useRef, useEffect, useState, useCallback } from "react";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';



function Navbar() {

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const navRef = useRef(null);
  const subnavRef = useRef(null);
  const [navHeight, setNavHeight] = useState(window.innerWidth * 0.075);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));


  // Define the updateNavHeight function with useCallback
  const updateNavHeight = useCallback(() => {
    if (navRef.current) {
      const newHeight = window.innerWidth * 0.075; // Altura baseada na largura da janela
      setNavHeight(newHeight);
    }
  }, []); // Sem dependências adicionais, a função permanece estável

  // Atualiza a altura da navbar ao montar e em resize
  useEffect(() => {
    updateNavHeight(); // Atualiza ao montar o componente
    window.addEventListener("resize", updateNavHeight); // Listener para resize

    return () => {
      window.removeEventListener("resize", updateNavHeight); // Limpa o listener ao desmontar
    };
  }, [updateNavHeight]);

  // Scroll event handler
  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        if (window.scrollY > 80) {
          navRef.current.classList.add("scrolled");
          subnavRef.current.classList.add("subScrolled");
          setNavHeight(65); // Define altura como 65px se o scroll for maior que 80px
        } else {
          navRef.current.classList.remove("scrolled");
          subnavRef.current.classList.remove("subScrolled");
          updateNavHeight(); // Volta a calcular a altura original
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [updateNavHeight, isMobile]);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      {!isMobile ? (
        <><Grid container ref={navRef} component='nav' id='navbar' style={{ position: "fixed", top: 0, width: 'calc(100% - 60px)', padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, backgroundColor: theme.palette.background, height: `${navHeight}px`, transition: "height 1s ease", zIndex: "10" }}>

          <Grid size={3}>
            <Link to={"/portfolio"}>
              <svg style={{ width: "auto", height: `${navHeight - 30}px`, transition: "height 1s ease" }} width="90%" height="220" viewBox="0 0 806 220" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid">
                <path d="M78.3 219.6C63.1 219.6 49.6 216.2 37.8 209.4C26 202.6 16.7 193.3 9.9 181.5C3.3 169.7 2.23517e-07 156.2 2.23517e-07 141C2.23517e-07 125.4 3.3 111.7 9.9 99.9C16.7 87.9 26 78.5 37.8 71.7C49.6 64.7 63.2 61.2 78.6 61.2C98 61.2 114.3 66.4 127.5 76.8C140.9 87 149.4 101.1 153 119.1H108.3C106.7 112.3 103.1 107 97.5 103.2C92.1 99.2 85.6 97.2 78 97.2C71.2 97.2 65.1 99 59.7 102.6C54.5 106 50.4 110.9 47.4 117.3C44.4 123.7 42.9 131.4 42.9 140.4C42.9 147.2 43.7 153.3 45.3 158.7C47.1 163.9 49.5 168.4 52.5 172.2C55.7 176 59.5 178.9 63.9 180.9C68.3 182.9 73 183.9 78 183.9C83.2 183.9 87.8 183.1 91.8 181.5C95.8 179.7 99.3 177.2 102.3 174C105.3 170.6 107.3 166.6 108.3 162H153C149.4 179.6 140.9 193.6 127.5 204C114.1 214.4 97.7 219.6 78.3 219.6ZM223.905 219.6C211.505 219.6 201.105 217.6 192.705 213.6C184.505 209.4 178.405 203.9 174.405 197.1C170.605 190.1 168.705 182.4 168.705 174C168.705 165 171.005 157 175.605 150C180.205 143 187.305 137.5 196.905 133.5C206.505 129.5 218.505 127.5 232.905 127.5H270.105C270.105 120.3 269.105 114.4 267.105 109.8C265.305 105 262.305 101.4 258.105 99C254.105 96.6 248.705 95.4 241.905 95.4C234.505 95.4 228.205 97 223.005 100.2C218.005 103.4 214.905 108.2 213.705 114.6H172.905C174.105 103.8 177.705 94.5 183.705 86.7C189.705 78.7 197.705 72.5 207.705 68.1C217.905 63.5 229.405 61.2 242.205 61.2C256.405 61.2 268.705 63.6 279.105 68.4C289.705 73.2 297.805 80.1 303.405 89.1C309.205 98.1 312.105 109.2 312.105 122.4V216H276.705L271.905 193.2C269.905 197.2 267.305 200.8 264.105 204C261.105 207.2 257.605 210 253.605 212.4C249.605 214.6 245.105 216.3 240.105 217.5C235.305 218.9 229.905 219.6 223.905 219.6ZM234.105 187.2C239.105 187.2 243.605 186.4 247.605 184.8C251.605 183 255.005 180.5 257.805 177.3C260.605 174.1 262.905 170.5 264.705 166.5C266.505 162.3 267.705 157.8 268.305 153V152.7H238.005C232.205 152.7 227.405 153.5 223.605 155.1C220.005 156.5 217.305 158.6 215.505 161.4C213.705 164 212.805 167 212.805 170.4C212.805 174 213.705 177.1 215.505 179.7C217.305 182.3 219.805 184.2 223.005 185.4C226.205 186.6 229.905 187.2 234.105 187.2ZM334.859 216V64.8H372.059L375.959 92.7C379.759 86.1 384.359 80.5 389.759 75.9C395.159 71.3 401.459 67.7 408.659 65.1C415.859 62.5 423.659 61.2 432.059 61.2V105.6H417.959C411.959 105.6 406.359 106.3 401.159 107.7C396.159 109.1 391.759 111.4 387.959 114.6C384.359 117.6 381.559 121.8 379.559 127.2C377.759 132.4 376.859 139 376.859 147V216H334.859ZM443.784 216V-8.58307e-06H485.784V216H443.784ZM581.93 219.6C567.53 219.6 554.53 216.3 542.93 209.7C531.33 202.9 522.13 193.5 515.33 181.5C508.73 169.5 505.43 155.9 505.43 140.7C505.43 125.1 508.73 111.3 515.33 99.3C522.13 87.3 531.33 78 542.93 71.4C554.53 64.6 567.63 61.2 582.23 61.2C596.83 61.2 609.93 64.6 621.53 71.4C633.13 78 642.23 87.3 648.83 99.3C655.63 111.1 659.03 124.8 659.03 140.4C659.03 156 655.63 169.8 648.83 181.8C642.03 193.6 632.83 202.9 621.23 209.7C609.83 216.3 596.73 219.6 581.93 219.6ZM581.93 183.3C588.53 183.3 594.33 181.7 599.33 178.5C604.33 175.3 608.33 170.5 611.33 164.1C614.53 157.7 616.13 149.8 616.13 140.4C616.13 131 614.63 123.1 611.63 116.7C608.63 110.3 604.53 105.5 599.33 102.3C594.33 99.1 588.63 97.5 582.23 97.5C576.03 97.5 570.33 99.1 565.13 102.3C559.93 105.5 555.83 110.3 552.83 116.7C549.83 123.1 548.33 131 548.33 140.4C548.33 149.8 549.83 157.7 552.83 164.1C555.83 170.5 559.83 175.3 564.83 178.5C570.03 181.7 575.73 183.3 581.93 183.3ZM741.021 219.6C727.021 219.6 714.921 217.4 704.721 213C694.521 208.4 686.521 202.3 680.721 194.7C674.921 186.9 671.521 178.1 670.521 168.3H712.521C713.321 171.9 714.821 175.2 717.021 178.2C719.421 181 722.521 183.3 726.321 185.1C730.321 186.9 735.021 187.8 740.421 187.8C745.621 187.8 749.821 187.1 753.021 185.7C756.421 184.1 758.921 182.1 760.521 179.7C762.321 177.3 763.221 174.7 763.221 171.9C763.221 167.9 762.021 164.8 759.621 162.6C757.221 160.4 753.721 158.6 749.121 157.2C744.521 155.8 739.021 154.5 732.621 153.3C725.421 151.7 718.321 149.9 711.321 147.9C704.521 145.9 698.321 143.3 692.721 140.1C687.321 136.7 683.021 132.5 679.821 127.5C676.621 122.5 675.021 116.3 675.021 108.9C675.021 99.9 677.421 91.8 682.221 84.6C687.221 77.4 694.321 71.7 703.521 67.5C712.921 63.3 724.121 61.2 737.121 61.2C755.521 61.2 770.021 65.4 780.621 73.8C791.421 82 797.821 93.2 799.821 107.4H760.221C759.221 103 756.721 99.6 752.721 97.2C748.721 94.8 743.421 93.6 736.821 93.6C730.021 93.6 724.721 94.8 720.921 97.2C717.321 99.6 715.521 102.8 715.521 106.8C715.521 109.4 716.721 111.8 719.121 114C721.521 116 724.921 117.8 729.321 119.4C733.921 120.8 739.521 122.2 746.121 123.6C757.921 126 768.221 128.8 777.021 132C785.821 135 792.721 139.4 797.721 145.2C802.721 150.8 805.221 159 805.221 169.8C805.421 179.4 802.821 188 797.421 195.6C792.221 203.2 784.821 209.1 775.221 213.3C765.621 217.5 754.221 219.6 741.021 219.6Z" fill={theme.palette.text.primary} />
              </svg>
            </Link>
          </Grid>
          <Grid size={3}>
            <Link to={"/portfolio"}>
              <svg style={{ width: "auto", height: `${navHeight - 30}px`, transition: "height 1s ease" }} width="76%" height="220" viewBox="0 0 676 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.8 219.6C43.4 219.6 33 217.6 24.6 213.6C16.4 209.4 10.3 203.9 6.3 197.1C2.5 190.1 0.6 182.4 0.6 174C0.6 165 2.9 157 7.5 150C12.1 143 19.2 137.5 28.8 133.5C38.4 129.5 50.4 127.5 64.8 127.5H102C102 120.3 101 114.4 99 109.8C97.2 105 94.2 101.4 90 99C86 96.6 80.6 95.4 73.8 95.4C66.4 95.4 60.1 97 54.9 100.2C49.9 103.4 46.8 108.2 45.6 114.6H4.8C6 103.8 9.6 94.5 15.6 86.7C21.6 78.7 29.6 72.5 39.6 68.1C49.8 63.5 61.3 61.2 74.1 61.2C88.3 61.2 100.6 63.6 111 68.4C121.6 73.2 129.7 80.1 135.3 89.1C141.1 98.1 144 109.2 144 122.4V216H108.6L103.8 193.2C101.8 197.2 99.2 200.8 96 204C93 207.2 89.5 210 85.5 212.4C81.5 214.6 77 216.3 72 217.5C67.2 218.9 61.8 219.6 55.8 219.6ZM66 187.2C71 187.2 75.5 186.4 79.5 184.8C83.5 183 86.9 180.5 89.7 177.3C92.5 174.1 94.8 170.5 96.6 166.5C98.4 162.3 99.6 157.8 100.2 153V152.7H69.9C64.1 152.7 59.3 153.5 55.5 155.1C51.9 156.5 49.2 158.6 47.4 161.4C45.6 164 44.7 167 44.7 170.4C44.7 174 45.6 177.1 47.4 179.7C49.2 182.3 51.7 184.2 54.9 185.4C58.1 186.6 61.8 187.2 66 187.2ZM166.753 216V-8.58307e-06H208.753V216H166.753ZM273.098 216L218.198 64.8H262.298L298.898 176.4L335.798 64.8H379.298L324.398 216H273.098ZM454.868 219.6C439.668 219.6 426.168 216.4 414.368 210C402.768 203.4 393.668 194.3 387.068 182.7C380.468 170.9 377.168 157.3 377.168 141.9C377.168 126.3 380.368 112.5 386.768 100.5C393.368 88.3 402.468 78.7 414.068 71.7C425.868 64.7 439.568 61.2 455.168 61.2C470.168 61.2 483.268 64.5 494.468 71.1C505.868 77.7 514.668 86.6 520.868 97.8C527.268 109 530.468 121.9 530.468 136.5C530.468 138.5 530.368 140.7 530.168 143.1C530.168 145.5 529.968 148.1 529.568 150.9H407.168V125.4H487.868C487.268 116.2 483.868 108.9 477.668 103.5C471.668 97.9 464.168 95.1 455.168 95.1C448.368 95.1 442.168 96.7 436.568 99.9C430.968 103.1 426.568 107.8 423.368 114C420.168 120.2 418.568 128.1 418.568 137.7V146.4C418.568 154.2 420.068 161.1 423.068 167.1C426.068 172.9 430.268 177.4 435.668 180.6C441.068 183.8 447.368 185.4 454.568 185.4C461.768 185.4 467.668 183.9 472.268 180.9C477.068 177.9 480.668 174 483.068 169.2H525.968C523.168 178.6 518.368 187.1 511.568 194.7C504.968 202.3 496.868 208.4 487.268 213C477.668 217.4 466.868 219.6 454.868 219.6ZM610.709 219.6C596.709 219.6 584.609 217.4 574.409 213C564.209 208.4 556.209 202.3 550.409 194.7C544.609 186.9 541.209 178.1 540.209 168.3H582.209C583.009 171.9 584.509 175.2 586.709 178.2C589.109 181 592.209 183.3 596.009 185.1C600.009 186.9 604.709 187.8 610.109 187.8C615.309 187.8 619.509 187.1 622.709 185.7C626.109 184.1 628.609 182.1 630.209 179.7C632.009 177.3 632.909 174.7 632.909 171.9C632.909 167.9 631.709 164.8 629.309 162.6C626.909 160.4 623.409 158.6 618.809 157.2C614.209 155.8 608.709 154.5 602.309 153.3C595.109 151.7 588.009 149.9 581.009 147.9C574.209 145.9 568.009 143.3 562.409 140.1C557.009 136.7 552.709 132.5 549.509 127.5C546.309 122.5 544.709 116.3 544.709 108.9C544.709 99.9 547.109 91.8 551.909 84.6C556.909 77.4 564.009 71.7 573.209 67.5C582.609 63.3 593.809 61.2 606.809 61.2C625.209 61.2 639.709 65.4 650.309 73.8C661.109 82 667.509 93.2 669.509 107.4H629.909C628.909 103 626.409 99.6 622.409 97.2C618.409 94.8 613.109 93.6 606.509 93.6C599.709 93.6 594.409 94.8 590.609 97.2C587.009 99.6 585.209 102.8 585.209 106.8C585.209 109.4 586.409 111.8 588.809 114C591.209 116 594.609 117.8 599.009 119.4C603.609 120.8 609.209 122.2 615.809 123.6C627.609 126 637.909 128.8 646.709 132C655.509 135 662.409 139.4 667.409 145.2C672.409 150.8 674.909 159 674.909 169.8C675.109 179.4 672.509 188 667.109 195.6C661.909 203.2 654.509 209.1 644.909 213.3C635.309 217.5 623.909 219.6 610.709 219.6Z" fill={theme.palette.text.primary} />
              </svg>
            </Link>
          </Grid>

          <Grid size={3}>
            <Stack direction="row" spacing={0}>
              <a style={{ textDecoration: "none" }} href='https://www.linkedin.com/in/carlosjalves99/' target="_blank" rel="noopener noreferrer">
                <IconButton size={'small'} sx={{ color: theme.palette.text.primary }}>
                  <LinkedInIcon />
                </IconButton>
              </a>
              <a style={{ textDecoration: "none" }} href='https://github.com/carlosjalves' target="_blank" rel="noopener noreferrer">
                <IconButton size={'small'} sx={{ color: theme.palette.text.primary }}>
                  <GitHubIcon />
                </IconButton>
              </a>
            </Stack>
          </Grid>

          <Grid size={3} container justifyContent="flex-end">
            <IconButton size={'small'} sx={(theme) => ({ color: theme.palette.text.primary, height: "fit-content", justifySelf: "end" })} onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Grid>
        </Grid><Grid ref={subnavRef} component='nav' id='subnavbar' style={{ position: "fixed", top: `${navHeight}px`, display: "grid", gridTemplateColumns: "25% 25% 25% 25%", width: 'calc(100% - 60px)', backgroundColor: theme.palette.background, borderBottom: `1px solid ${theme.palette.border}`, transition: "top 1s ease, padding 0.7s ease", zIndex: "10" }}>
            <Grid size={{ xs: 0, sm: 0, md: 3, lg: 3, xl: 3 }} sx={{ lineHeight: "13px" }}>
              <p style={{ color: theme.palette.text.secondary }}>Designer</p>
              <p style={{ color: theme.palette.text.secondary }}>Developer</p>
            </Grid>

            <Grid size={3} sx={{ lineHeight: "13px" }}>
              <CustomLink to={"portfolio/about"} theme={theme}><p>About</p></CustomLink>
              <CustomLink to={"/portfolio"} theme={theme}><p>Work</p></CustomLink>
            </Grid>
          </Grid></>

      ) : (
        <>
          <Grid container component='nav' sx={{ position: "fixed", top: 0, left: 0, width: "100%", padding: "15px 30px", borderBottom: `1px solid ${theme.palette.border}`, backgroundColor: theme.palette.background, height: '90px', zIndex: "10" }}>
            <Grid size={9}>
              <Link to={"/portfolio"}>
                <svg style={{ width: "auto", height: "30px" }} width="1564" height="284" viewBox="0 0 1564 284" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M78.3 221.6C63.1 221.6 49.6 218.2 37.8 211.4C26 204.6 16.7 195.3 9.9 183.5C3.3 171.7 2.23517e-07 158.2 2.23517e-07 143C2.23517e-07 127.4 3.3 113.7 9.9 101.9C16.7 89.9 26 80.5 37.8 73.7C49.6 66.7 63.2 63.2 78.6 63.2C98 63.2 114.3 68.4 127.5 78.8C140.9 89 149.4 103.1 153 121.1H108.3C106.7 114.3 103.1 109 97.5 105.2C92.1 101.2 85.6 99.2 78 99.2C71.2 99.2 65.1 101 59.7 104.6C54.5 108 50.4 112.9 47.4 119.3C44.4 125.7 42.9 133.4 42.9 142.4C42.9 149.2 43.7 155.3 45.3 160.7C47.1 165.9 49.5 170.4 52.5 174.2C55.7 178 59.5 180.9 63.9 182.9C68.3 184.9 73 185.9 78 185.9C83.2 185.9 87.8 185.1 91.8 183.5C95.8 181.7 99.3 179.2 102.3 176C105.3 172.6 107.3 168.6 108.3 164H153C149.4 181.6 140.9 195.6 127.5 206C114.1 216.4 97.7 221.6 78.3 221.6ZM223.905 221.6C211.505 221.6 201.105 219.6 192.705 215.6C184.505 211.4 178.405 205.9 174.405 199.1C170.605 192.1 168.705 184.4 168.705 176C168.705 167 171.005 159 175.605 152C180.205 145 187.305 139.5 196.905 135.5C206.505 131.5 218.505 129.5 232.905 129.5H270.105C270.105 122.3 269.105 116.4 267.105 111.8C265.305 107 262.305 103.4 258.105 101C254.105 98.6 248.705 97.4 241.905 97.4C234.505 97.4 228.205 99 223.005 102.2C218.005 105.4 214.905 110.2 213.705 116.6H172.905C174.105 105.8 177.705 96.5 183.705 88.7C189.705 80.7 197.705 74.5 207.705 70.1C217.905 65.5 229.405 63.2 242.205 63.2C256.405 63.2 268.705 65.6 279.105 70.4C289.705 75.2 297.805 82.1 303.405 91.1C309.205 100.1 312.105 111.2 312.105 124.4V218H276.705L271.905 195.2C269.905 199.2 267.305 202.8 264.105 206C261.105 209.2 257.605 212 253.605 214.4C249.605 216.6 245.105 218.3 240.105 219.5C235.305 220.9 229.905 221.6 223.905 221.6ZM234.105 189.2C239.105 189.2 243.605 188.4 247.605 186.8C251.605 185 255.005 182.5 257.805 179.3C260.605 176.1 262.905 172.5 264.705 168.5C266.505 164.3 267.705 159.8 268.305 155V154.7H238.005C232.205 154.7 227.405 155.5 223.605 157.1C220.005 158.5 217.305 160.6 215.505 163.4C213.705 166 212.805 169 212.805 172.4C212.805 176 213.705 179.1 215.505 181.7C217.305 184.3 219.805 186.2 223.005 187.4C226.205 188.6 229.905 189.2 234.105 189.2ZM334.859 218V66.8H372.059L375.959 94.7C379.759 88.1 384.359 82.5 389.759 77.9C395.159 73.3 401.459 69.7 408.659 67.1C415.859 64.5 423.659 63.2 432.059 63.2V107.6H417.959C411.959 107.6 406.359 108.3 401.159 109.7C396.159 111.1 391.759 113.4 387.959 116.6C384.359 119.6 381.559 123.8 379.559 129.2C377.759 134.4 376.859 141 376.859 149V218H334.859ZM443.784 218V1.99999H485.784V218H443.784ZM581.93 221.6C567.53 221.6 554.53 218.3 542.93 211.7C531.33 204.9 522.13 195.5 515.33 183.5C508.73 171.5 505.43 157.9 505.43 142.7C505.43 127.1 508.73 113.3 515.33 101.3C522.13 89.3 531.33 80 542.93 73.4C554.53 66.6 567.63 63.2 582.23 63.2C596.83 63.2 609.93 66.6 621.53 73.4C633.13 80 642.23 89.3 648.83 101.3C655.63 113.1 659.03 126.8 659.03 142.4C659.03 158 655.63 171.8 648.83 183.8C642.03 195.6 632.83 204.9 621.23 211.7C609.83 218.3 596.73 221.6 581.93 221.6ZM581.93 185.3C588.53 185.3 594.33 183.7 599.33 180.5C604.33 177.3 608.33 172.5 611.33 166.1C614.53 159.7 616.13 151.8 616.13 142.4C616.13 133 614.63 125.1 611.63 118.7C608.63 112.3 604.53 107.5 599.33 104.3C594.33 101.1 588.63 99.5 582.23 99.5C576.03 99.5 570.33 101.1 565.13 104.3C559.93 107.5 555.83 112.3 552.83 118.7C549.83 125.1 548.33 133 548.33 142.4C548.33 151.8 549.83 159.7 552.83 166.1C555.83 172.5 559.83 177.3 564.83 180.5C570.03 183.7 575.73 185.3 581.93 185.3ZM741.021 221.6C727.021 221.6 714.921 219.4 704.721 215C694.521 210.4 686.521 204.3 680.721 196.7C674.921 188.9 671.521 180.1 670.521 170.3H712.521C713.321 173.9 714.821 177.2 717.021 180.2C719.421 183 722.521 185.3 726.321 187.1C730.321 188.9 735.021 189.8 740.421 189.8C745.621 189.8 749.821 189.1 753.021 187.7C756.421 186.1 758.921 184.1 760.521 181.7C762.321 179.3 763.221 176.7 763.221 173.9C763.221 169.9 762.021 166.8 759.621 164.6C757.221 162.4 753.721 160.6 749.121 159.2C744.521 157.8 739.021 156.5 732.621 155.3C725.421 153.7 718.321 151.9 711.321 149.9C704.521 147.9 698.321 145.3 692.721 142.1C687.321 138.7 683.021 134.5 679.821 129.5C676.621 124.5 675.021 118.3 675.021 110.9C675.021 101.9 677.421 93.8 682.221 86.6C687.221 79.4 694.321 73.7 703.521 69.5C712.921 65.3 724.121 63.2 737.121 63.2C755.521 63.2 770.021 67.4 780.621 75.8C791.421 84 797.821 95.2 799.821 109.4H760.221C759.221 105 756.721 101.6 752.721 99.2C748.721 96.8 743.421 95.6 736.821 95.6C730.021 95.6 724.721 96.8 720.921 99.2C717.321 101.6 715.521 104.8 715.521 108.8C715.521 111.4 716.721 113.8 719.121 116C721.521 118 724.921 119.8 729.321 121.4C733.921 122.8 739.521 124.2 746.121 125.6C757.921 128 768.221 130.8 777.021 134C785.821 137 792.721 141.4 797.721 147.2C802.721 152.8 805.221 161 805.221 171.8C805.421 181.4 802.821 190 797.421 197.6C792.221 205.2 784.821 211.1 775.221 215.3C765.621 219.5 754.221 221.6 741.021 221.6ZM795.968 284V248.3H808.268C814.668 248.3 819.168 247 821.768 244.4C824.368 242 825.668 237.9 825.668 232.1V66.8H867.668V231.8C867.668 244.4 865.468 254.5 861.068 262.1C856.668 269.9 850.468 275.5 842.468 278.9C834.668 282.3 825.368 284 814.568 284H795.968ZM846.668 47.3C839.068 47.3 832.868 45.1 828.068 40.7C823.468 36.1 821.168 30.5 821.168 23.9C821.168 17.1 823.468 11.5 828.068 7.1C832.868 2.69999 839.168 0.499993 846.968 0.499993C854.568 0.499993 860.668 2.69999 865.268 7.1C870.068 11.5 872.468 17.1 872.468 23.9C872.468 30.5 870.068 36.1 865.268 40.7C860.668 45.1 854.468 47.3 846.668 47.3ZM943.671 221.6C931.271 221.6 920.871 219.6 912.471 215.6C904.271 211.4 898.171 205.9 894.171 199.1C890.371 192.1 888.471 184.4 888.471 176C888.471 167 890.771 159 895.371 152C899.971 145 907.071 139.5 916.671 135.5C926.271 131.5 938.271 129.5 952.671 129.5H989.871C989.871 122.3 988.871 116.4 986.871 111.8C985.071 107 982.071 103.4 977.871 101C973.871 98.6 968.471 97.4 961.671 97.4C954.271 97.4 947.971 99 942.771 102.2C937.771 105.4 934.671 110.2 933.471 116.6H892.671C893.871 105.8 897.471 96.5 903.471 88.7C909.471 80.7 917.471 74.5 927.471 70.1C937.671 65.5 949.171 63.2 961.971 63.2C976.171 63.2 988.471 65.6 998.871 70.4C1009.47 75.2 1017.57 82.1 1023.17 91.1C1028.97 100.1 1031.87 111.2 1031.87 124.4V218H996.471L991.671 195.2C989.671 199.2 987.071 202.8 983.871 206C980.871 209.2 977.371 212 973.371 214.4C969.371 216.6 964.871 218.3 959.871 219.5C955.071 220.9 949.671 221.6 943.671 221.6ZM953.871 189.2C958.871 189.2 963.371 188.4 967.371 186.8C971.371 185 974.771 182.5 977.571 179.3C980.371 176.1 982.671 172.5 984.471 168.5C986.271 164.3 987.471 159.8 988.071 155V154.7H957.771C951.971 154.7 947.171 155.5 943.371 157.1C939.771 158.5 937.071 160.6 935.271 163.4C933.471 166 932.571 169 932.571 172.4C932.571 176 933.471 179.1 935.271 181.7C937.071 184.3 939.571 186.2 942.771 187.4C945.971 188.6 949.671 189.2 953.871 189.2ZM1054.62 218V1.99999H1096.62V218H1054.62ZM1160.97 218L1106.07 66.8H1150.17L1186.77 178.4L1223.67 66.8H1267.17L1212.27 218H1160.97ZM1342.74 221.6C1327.54 221.6 1314.04 218.4 1302.24 212C1290.64 205.4 1281.54 196.3 1274.94 184.7C1268.34 172.9 1265.04 159.3 1265.04 143.9C1265.04 128.3 1268.24 114.5 1274.64 102.5C1281.24 90.3 1290.34 80.7 1301.94 73.7C1313.74 66.7 1327.44 63.2 1343.04 63.2C1358.04 63.2 1371.14 66.5 1382.34 73.1C1393.74 79.7 1402.54 88.6 1408.74 99.8C1415.14 111 1418.34 123.9 1418.34 138.5C1418.34 140.5 1418.24 142.7 1418.04 145.1C1418.04 147.5 1417.84 150.1 1417.44 152.9H1295.04V127.4H1375.74C1375.14 118.2 1371.74 110.9 1365.54 105.5C1359.54 99.9 1352.04 97.1 1343.04 97.1C1336.24 97.1 1330.04 98.7 1324.44 101.9C1318.84 105.1 1314.44 109.8 1311.24 116C1308.04 122.2 1306.44 130.1 1306.44 139.7V148.4C1306.44 156.2 1307.94 163.1 1310.94 169.1C1313.94 174.9 1318.14 179.4 1323.54 182.6C1328.94 185.8 1335.24 187.4 1342.44 187.4C1349.64 187.4 1355.54 185.9 1360.14 182.9C1364.94 179.9 1368.54 176 1370.94 171.2H1413.84C1411.04 180.6 1406.24 189.1 1399.44 196.7C1392.84 204.3 1384.74 210.4 1375.14 215C1365.54 219.4 1354.74 221.6 1342.74 221.6ZM1498.58 221.6C1484.58 221.6 1472.48 219.4 1462.28 215C1452.08 210.4 1444.08 204.3 1438.28 196.7C1432.48 188.9 1429.08 180.1 1428.08 170.3H1470.08C1470.88 173.9 1472.38 177.2 1474.58 180.2C1476.98 183 1480.08 185.3 1483.88 187.1C1487.88 188.9 1492.58 189.8 1497.98 189.8C1503.18 189.8 1507.38 189.1 1510.58 187.7C1513.98 186.1 1516.48 184.1 1518.08 181.7C1519.88 179.3 1520.78 176.7 1520.78 173.9C1520.78 169.9 1519.58 166.8 1517.18 164.6C1514.78 162.4 1511.28 160.6 1506.68 159.2C1502.08 157.8 1496.58 156.5 1490.18 155.3C1482.98 153.7 1475.88 151.9 1468.88 149.9C1462.08 147.9 1455.88 145.3 1450.28 142.1C1444.88 138.7 1440.58 134.5 1437.38 129.5C1434.18 124.5 1432.58 118.3 1432.58 110.9C1432.58 101.9 1434.98 93.8 1439.78 86.6C1444.78 79.4 1451.88 73.7 1461.08 69.5C1470.48 65.3 1481.68 63.2 1494.68 63.2C1513.08 63.2 1527.58 67.4 1538.18 75.8C1548.98 84 1555.38 95.2 1557.38 109.4H1517.78C1516.78 105 1514.28 101.6 1510.28 99.2C1506.28 96.8 1500.98 95.6 1494.38 95.6C1487.58 95.6 1482.28 96.8 1478.48 99.2C1474.88 101.6 1473.08 104.8 1473.08 108.8C1473.08 111.4 1474.28 113.8 1476.68 116C1479.08 118 1482.48 119.8 1486.88 121.4C1491.48 122.8 1497.08 124.2 1503.68 125.6C1515.48 128 1525.78 130.8 1534.58 134C1543.38 137 1550.28 141.4 1555.28 147.2C1560.28 152.8 1562.78 161 1562.78 171.8C1562.98 181.4 1560.38 190 1554.98 197.6C1549.78 205.2 1542.38 211.1 1532.78 215.3C1523.18 219.5 1511.78 221.6 1498.58 221.6Z" fill={theme.palette.text.primary} />
                </svg>
              </Link>
            </Grid>
            <Grid size={3} container justifyContent="flex-end">
              {!open ? (
                <IconButton onClick={toggleDrawer(true)} size='large' edge="start" sx={{ color: theme.palette.text.primary }}>
                  <MenuRoundedIcon fontSize='large' />
                </IconButton>
              ) : (
                <IconButton onClick={toggleDrawer(false)} size='large' edge="start" sx={{ color: theme.palette.text.primary }}>
                  <CloseRoundedIcon fontSize='large' />
                </IconButton>
              )}
            </Grid>
            <Grid size={12} sx={{ lineHeight: "13px", marginTop: "-25px" }}>
              <p style={{ color: theme.palette.text.secondary }}>Designer</p>
              <p style={{ color: theme.palette.text.secondary }}>Developer</p>
            </Grid>
            <Drawer anchor={'bottom'} open={open} hideBackdrop onClose={toggleDrawer(false)} PaperProps={{ sx: { top: "90px", backgroundColor: theme.palette.background } }} ModalProps={{ sx: { top: "90px" } }}>
              <Box sx={{ width: 'auto' }} role="presentation" /*onClick={toggleDrawer(false)}*/>
                <List>
                  <ListItem alignItems='center' onClick={toggleDrawer(false)} sx={{ justifyContent: "center" }}>
                    <CustomLink to={"/portfolio/about"} theme={theme}><p>About</p></CustomLink>
                  </ListItem>
                  <ListItem alignItems='center' onClick={toggleDrawer(false)} sx={{ justifyContent: "center" }}>
                    <CustomLink to={"/portfolio"} theme={theme}><p>Work</p></CustomLink>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem alignItems='center' sx={{ justifyContent: "center" }}>
                    <Stack direction="row" spacing={0}>
                      <a style={{ textDecoration: "none" }} href='https://www.linkedin.com/in/carlosjalves99/' target="_blank" rel="noopener noreferrer">
                        <IconButton size={'small'} sx={{ color: theme.palette.text.primary }}>
                          <LinkedInIcon />
                        </IconButton>
                      </a>
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
          </Grid>
        </>
      )
      }
    </>
  );
}

function CustomLink({ to, children, theme }) {

  const path = useResolvedPath(to)
  const isActive = useMatch({ path: path.pathname })

  return (
    <Link to={to} style={{ color: isActive ? theme.palette.text.primary : theme.palette.text.secondary }}>{children}</Link>
  )
}

export default Navbar;

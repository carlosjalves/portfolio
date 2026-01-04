import React from 'react';
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import Grid from '@mui/material/Grid2';
import aboutData from '../../data/About/aboutData';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { useMediaQuery } from '@mui/material';


const AboutInfo = ({ slug, label }) => {

  const theme = useTheme();
  const [aboutPageInfo, setAboutPageInfo] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const getRandomColor = () => {
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#FFD93D",
      "#6C63FF",
      "#F72585",
      "#00BBF9",
      "#9B5DE5"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    // Obtemos os dados diretamente do arquivo, sem precisar de fetch
    const data = aboutData[slug] || []; // Se o slug não existir, retorna um array vazio
    setAboutPageInfo(data);
  }, [slug]);

  if (!aboutPageInfo) {
    return null;
  }

  const marginHeight = window.innerWidth * 0.075; // Altura baseada na largura da janela

  return (
    <>
      {slug === 'personal_info' && (
        aboutPageInfo.map(item => (
          <Grid container key={item.id} sx={{ padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "100px", marginTop: { xs: "100px", md: `${marginHeight + 102}px` } }}>
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} sx={{ paddingBottom: "30px" }}>
              <h6 style={{ color: theme.palette.text.secondary }}>Contact</h6>
              <h6><a href="mailto:carlosjalves99@gmail.com">{item.acf.email}</a></h6>
              {!isMobile && (
                <>
                  <h6 style={{ color: theme.palette.text.secondary, paddingTop: "30px" }}>Social</h6>
                  <h6>
                    <a
                      href="https://www.linkedin.com/in/carlosjalves99/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
                    >
                      LinkedIn <ArrowOutwardIcon fontSize="1.0rem" />
                    </a>
                  </h6>
                  <h6>
                    <a
                      href="https://github.com/carlosjalves"
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
                    >
                      GitHub <ArrowOutwardIcon fontSize="1.0rem" />
                    </a>
                  </h6>
                </>
              )}
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 2 }}>
              <h2 style={{ paddingBottom: "30px", color: theme.palette.text.primary }}>{item.acf.primary_text}</h2>
              <h5 style={{ color: theme.palette.text.primary }}>{item.acf.secondary_text}</h5>
            </Grid>
          </Grid>
        ))
      )}

      {slug === 'work_experience' && (
        <Grid container sx={{ padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "60px" }}>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} sx={{ paddingBottom: "10px" }}>
            <h6 id='work_experience' style={{ color: theme.palette.text.secondary }}>Work Experience</h6>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
            {aboutPageInfo.map(item => (
              <Grid size={12} key={item.id} sx={{ paddingBottom: "40px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.role}</h2>
                <h4 style={{ color: theme.palette.text.primary }}>{item.acf.company}</h4>
                <h5 style={{ fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.date}</h5>
                <div style={{ paddingTop: "10px" }}>
                  {item.acf.description.split('\n\n').map((paragraph, index) => (
                    <div key={index} style={{ marginBottom: "7px" }}>
                      {paragraph.split('\n').map((line, lineIndex) => (
                        <h5 key={lineIndex} style={{ margin: 0 }}>
                          {line}
                        </h5>
                      ))}
                    </div>
                  ))}
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}

      {slug === 'education' && (
        <Grid container sx={{ padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "60px" }}>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} sx={{ paddingBottom: "10px" }}>
            <h6 id='education' style={{ color: theme.palette.text.secondary }}>Education</h6>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
            {aboutPageInfo.map(item => (
              <Grid size={12} key={item.id} sx={{ paddingBottom: "40px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.title}</h2>


                <h4 style={{ color: theme.palette.text.primary }}>
                  <a
                    href="https://www.uc.pt/fctuc/dei/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
                  >
                    {item.acf.school} <ArrowOutwardIcon fontSize="1.0rem" />
                  </a>
                </h4>

                <h5 style={{ fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.date}</h5>
                <h5 style={{ paddingTop: "10px" }}>{item.acf.thesis}</h5>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}

      {slug === 'skills' && (
        <Grid container sx={{ padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "100px" }}>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} sx={{ paddingBottom: "10px" }}>
            <h6 id='skills' style={{ color: theme.palette.text.secondary }}>Skills</h6>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "30px" }}>
              {aboutPageInfo
                .filter(item => item.id >= 1 && item.id <= 13)
                .map(item => (
                  <div
                    key={item.id}
                    style={{
                      width: "fit-content",
                      border: `2px solid ${theme.palette.text.primary}`,
                      borderRadius: "50px",
                      padding: "5px 8px",
                      transition: "all 0.2s ease",
                      cursor: "default"
                    }}
                    onMouseEnter={(e) => {
                      const color = getRandomColor();
                      e.currentTarget.style.borderColor = color;
                      e.currentTarget.style.boxShadow = `0 4px 10px ${color}40`;

                      const text = e.currentTarget.querySelector("h5");
                      if (text) text.style.color = color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = theme.palette.text.primary;
                      e.currentTarget.style.boxShadow = "none";

                      const text = e.currentTarget.querySelector("h5");
                      if (text) text.style.color = theme.palette.text.primary;
                    }}
                  >
                    <h5 style={{ margin: 0, whiteSpace: "nowrap", color: theme.palette.text.primary }}>{item.acf.name}</h5>
                  </div>
                ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {aboutPageInfo
                .filter(item => item.id > 13)
                .map(item => (
                  <div
                    key={item.id}
                    style={{
                      width: "fit-content",
                      border: `2px solid ${theme.palette.text.primary}`,
                      borderRadius: "50px",
                      padding: "5px 8px",
                      transition: "all 0.2s ease",
                      cursor: "default"
                    }}
                    onMouseEnter={(e) => {
                      const color = getRandomColor();
                      e.currentTarget.style.borderColor = color;
                      e.currentTarget.style.boxShadow = `0 4px 10px ${color}40`;

                      const text = e.currentTarget.querySelector("h5");
                      if (text) text.style.color = color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = theme.palette.text.primary;
                      e.currentTarget.style.boxShadow = "none";

                      const text = e.currentTarget.querySelector("h5");
                      if (text) text.style.color = theme.palette.text.primary;
                    }}
                  >
                    <h5 style={{ margin: 0, whiteSpace: "nowrap", color: theme.palette.text.primary }}>{item.acf.name}</h5>
                  </div>
                ))}
            </div>

          </Grid>
        </Grid>
      )}

      {slug === 'qualities' && (
        <Grid container sx={{ padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "100px" }}>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} sx={{ paddingBottom: "10px" }}>
            <h6 id='qualities' style={{ color: theme.palette.text.secondary }}>Qualities</h6>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
            <div style={{ gridColumnStart: 3, gridColumnEnd: 4, display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {aboutPageInfo.map(item => (
                <div
                  key={item.id}
                  style={{
                    width: "fit-content",
                    border: `2px solid ${theme.palette.text.primary}`,
                    borderRadius: "50px",
                    padding: "5px 8px",
                    transition: "all 0.2s ease",
                    cursor: "default"
                  }}
                  onMouseEnter={(e) => {
                    const color = getRandomColor();
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 4px 10px ${color}40`;

                    const text = e.currentTarget.querySelector("h5");
                    if (text) text.style.color = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.palette.text.primary;
                    e.currentTarget.style.boxShadow = "none";

                    const text = e.currentTarget.querySelector("h5");
                    if (text) text.style.color = theme.palette.text.primary;
                  }}
                >
                  <h5 style={{ margin: 0, whiteSpace: "nowrap", color: theme.palette.text.primary }}>{item.acf.name}</h5>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      )}

      {slug === 'honors_and_awards' && (
        <Grid container style={{ padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "60px" }}>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} sx={{ paddingBottom: "10px" }}>
            <h6 id='honors_and_awards' style={{ color: theme.palette.text.secondary }}>Honors & Awards</h6>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
            {aboutPageInfo.map(item => (
              <Grid size={12} key={item.id} sx={{ paddingBottom: "40px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.title}</h2>
                <h4 style={{ color: theme.palette.text.primary }}>{item.acf.giver}</h4>
                <h5 style={{ fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.date}</h5>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}

      {slug === 'volunteering' && (
        <Grid container sx={{ padding: "15px 0", paddingBottom: "60px" }}>
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} sx={{ paddingBottom: "10px" }}>
            <h6 id='volunteering' style={{ color: theme.palette.text.secondary }}>Volunteering</h6>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
            {aboutPageInfo.map(item => (
              <Grid size={12} key={item.id} sx={{ paddingBottom: "40px" }}>
                <h2 style={{ fontSize: "24px", fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.role}</h2>
                <h4 style={{ color: theme.palette.text.primary }}>{item.acf.place}</h4>
                <h5 style={{ fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.date}</h5>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );

}

export default AboutInfo;

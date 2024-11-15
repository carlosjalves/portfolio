import React from 'react';
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import aboutData from '../../data/About/aboutData';

const AboutInfo = ({ slug, label }) => {

  const theme = useTheme();
  const [aboutPageInfo, setAboutPageInfo] = useState(null);

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
          <div key={item.id} style={{ gridColumnStart: 1, gridColumnEnd: 5, display: "grid", gridTemplateColumns: "25% 25% 25% 25%", padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "100px", marginTop: `${marginHeight + 102}px` }}>
            <div style={{ gridColumnStart: 1, gridColumnEnd: 2 }}>
              <h6 style={{ color: theme.palette.text.secondary }}>Contact</h6>
              <h6><a href="mailto:carlosjalves99@gmail.com">{item.acf.email}</a></h6>
            </div>

            <div style={{ gridColumnStart: 2, gridColumnEnd: 3 }}>
              <h6 style={{ color: theme.palette.text.secondary }}>Index</h6>
              <a href='#work_experience'><h6 style={{ color: theme.palette.text.primary }}>Work Experience</h6></a>
              <a href='#education'><h6 style={{ color: theme.palette.text.primary }}>Education</h6></a>
              <a href='#skills'><h6 style={{ color: theme.palette.text.primary }}>Skills</h6></a>
              <a href='#honors_and_awards'><h6 style={{ color: theme.palette.text.primary }}>Honors & Awards</h6></a>
              <a href='#volunteering'><h6 style={{ color: theme.palette.text.primary }}>Volunteering</h6></a>
            </div>

            <div style={{ gridColumnStart: 3, gridColumnEnd: 4 }}>
              <h2 style={{ paddingBottom: "30px", color: theme.palette.text.primary }}>{item.acf.primary_text}</h2>
              <h5 style={{ color: theme.palette.text.primary }}>{item.acf.secondary_text}</h5>
            </div>
          </div>
        ))
      )}

      {slug === 'work_experience' && (
        <div style={{ gridColumnStart: 1, gridColumnEnd: 5, display: "grid", gridTemplateColumns: "25% 25% 25% 25%", padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "60px" }}>
          <div style={{ gridColumnStart: 1, gridColumnEnd: 2 }}>
            <h6 id='work_experience' style={{ color: theme.palette.text.secondary }}>Work Experience</h6>
          </div>

          {aboutPageInfo.map(item => (
            <div key={item.id} style={{ gridColumnStart: 3, gridColumnEnd: 5, paddingBottom: "40px" }}>
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

            </div>
          ))}
        </div>
      )}

      {slug === 'education' && (
        <div style={{ gridColumnStart: 1, gridColumnEnd: 5, display: "grid", gridTemplateColumns: "25% 25% 25% 25%", padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "60px" }}>
          <div style={{ gridColumnStart: 1, gridColumnEnd: 2 }}>
            <h6 id='education' style={{ color: theme.palette.text.secondary }}>Education</h6>
          </div>

          {aboutPageInfo.map(item => (
            <div key={item.id} style={{ gridColumnStart: 3, gridColumnEnd: 5, paddingBottom: "40px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.title}</h2>
              <h4 style={{ color: theme.palette.text.primary }}>{item.acf.school}</h4>
              <h5 style={{ fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.date}</h5>
              <h5 style={{ paddingTop: "10px" }}>{item.acf.thesis}</h5>
            </div>
          ))}
        </div>
      )}

      {slug === 'skills' && (
        <div style={{ gridColumnStart: 1, gridColumnEnd: 5, display: "grid", gridTemplateColumns: "25% 25% 25% 25%", padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "100px" }}>
          <div style={{ gridColumnStart: 1, gridColumnEnd: 2 }}>
            <h6 id='skills' style={{ color: theme.palette.text.secondary }}>Skills</h6>
          </div>

          <div style={{ gridColumnStart: 3, gridColumnEnd: 4, display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {aboutPageInfo.map(item => (
              <div key={item.id} style={{ width: "fit-content", border: `2px solid ${theme.palette.text.primary}`, borderRadius: "50px", padding: "5px 8px" }}>
                <h5 style={{ margin: 0, whiteSpace: "nowrap", color: theme.palette.text.primary }}>{item.acf.name}</h5>
              </div>
            ))}
          </div>
        </div>
      )}

      {slug === 'honors_and_awards' && (
        <div style={{ gridColumnStart: 1, gridColumnEnd: 5, display: "grid", gridTemplateColumns: "25% 25% 25% 25%", padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "60px" }}>
          <div style={{ gridColumnStart: 1, gridColumnEnd: 2 }}>
            <h6 id='honors_and_awards' style={{ color: theme.palette.text.secondary }}>Honors & Awards</h6>
          </div>

          {aboutPageInfo.map(item => (
            <div key={item.id} style={{ gridColumnStart: 3, gridColumnEnd: 5, paddingBottom: "40px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.title}</h2>
              <h4 style={{ color: theme.palette.text.primary }}>{item.acf.giver}</h4>
              <h5 style={{ fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.date}</h5>
            </div>
          ))}
        </div>
      )}

      {slug === 'volunteering' && (
        <div style={{ gridColumnStart: 1, gridColumnEnd: 5, display: "grid", gridTemplateColumns: "25% 25% 25% 25%", padding: "15px 0", paddingBottom: "60px" }}>
          <div style={{ gridColumnStart: 1, gridColumnEnd: 2 }}>
            <h6 id='volunteering' style={{ color: theme.palette.text.secondary }}>Volunteering</h6>
          </div>

          {aboutPageInfo.map(item => (
            <div key={item.id} style={{ gridColumnStart: 3, gridColumnEnd: 5, paddingBottom: "40px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.role}</h2>
              <h4 style={{ color: theme.palette.text.primary }}>{item.acf.place}</h4>
              <h5 style={{ fontWeight: 600, color: theme.palette.text.primary }}>{item.acf.date}</h5>
            </div>
          ))}
        </div>
      )}
    </>
  );

}

export default AboutInfo;

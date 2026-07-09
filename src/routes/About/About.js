import { useState, useEffect, useRef } from "react";
import { useTheme, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { getAbout, getExperience } from "../../api/sanityClient";
import CustomLink from "../../components/CustomLink";
import { gsap } from "gsap";


function About() {
  const theme = useTheme();

  const [about, setAbout] = useState(null);
  const [work, setWork] = useState([]);
  const [education, setEducation] = useState([]);
  const [awards, setAwards] = useState([]);
  const [volunteering, setVolunteering] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        // ABOUT
        const aboutData = await getAbout();
        setAbout(aboutData[0]); // normalmente só tens 1 documento

        // EXPERIENCE
        const expData = await getExperience();

        // DIVIDIR POR CATEGORIA
        setWork(expData.filter(item => item.category === "work"));
        setEducation(expData.filter(item => item.category === "education"));
        setAwards(expData.filter(item => item.category === "awards"));
        setVolunteering(expData.filter(item => item.category === "volunteering"));

      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();

  }, []);

  const imageContainerRef = useRef(null);
  const cursorRef = useRef(null);

  const handleEnter = () => {

    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50
    });

    gsap.to(cursorRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.2
    });
  };

  const handleLeave = () => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2
    });
  };

  const handleMove = (e) => {
    const bounds = imageContainerRef.current.getBoundingClientRect();

    gsap.to(cursorRef.current, {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
      duration: 0.35,
      ease: "power2.out"
    });
  };


  return (
    <>
      <Grid container sx={{ height: { xs: "auto", lg: "100vh" }, borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "100px", paddingTop: "130px" }}>
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}
          sx={{
            paddingBottom: "30px",
            paddingRight: { xs: 0, sm: "10px" },
            position: "relative"
          }}
        >
          {/* IMAGE */}
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "50%",
              },
              pr: {
                xs: 0,
                sm: 4,
                md: 2,
              },
              pb: {
                xs: 2,
                md: 0,
              },
              flexShrink: 0,
            }}
          >
            <Box
              ref={imageContainerRef}
              component="img"
              src={about?.image}
              alt={about?._id}
              loading="lazy"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              onMouseMove={handleMove}
              sx={{
                display: "block",
                width: "100%",
                height: "auto",
                objectFit: "cover",
                transition: "opacity 0.4s ease",
                cursor: "none",
              }}
            />
          </Box>

          {/* ROLE */}
          <h3 style={{ color: theme.palette.text.primary, fontWeight: 700 }}>
            {about?.role?.split(" ").map((word, i) => (
              <span key={i}>
                {word}
                <br />
              </span>
            ))}
          </h3>

          {/* CUSTOM CURSOR */}
          <Box
            ref={cursorRef}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none",
              opacity: 0,
              scale: 0.8,
              color: "#fff",
              fontWeight: 600,
              fontSize: "13px",
              mixBlendMode: "difference",
              whiteSpace: "nowrap",
              zIndex: 10
            }}
          >
            It’s me! Carlos Alves
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 2 }} >
          <h3 style={{ paddingBottom: "30px", color: theme.palette.text.primary }}>{about?.bio}</h3>
          <h5 style={{ color: theme.palette.text.primary }}>{about?.description}</h5>
        </Grid>
      </Grid>

      <ExperienceSection title="Work Experience" items={work} />
      <ExperienceSection title="Education" items={education} />

      <Grid container sx={{ padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "100px" }}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} sx={{ paddingBottom: "10px" }}>
          <h6 id='skills' style={{ color: theme.palette.text.secondary }}>Skills</h6>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "30px" }}>
            {about?.soft_skills?.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "fit-content",
                  background: `${theme.palette.tag.background}`,
                  border: `1px solid ${theme.palette.tag.border}`,
                  borderRadius: "50px",
                  padding: "5px 8px",
                  transition: "all 0.2s ease",
                  cursor: "default"
                }}
              >
                <h5 style={{ fontWeight: 500, margin: 0, whiteSpace: "nowrap", color: theme.palette.text.primary }}>{item}</h5>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {about?.hard_skills?.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "fit-content",
                  background: `${theme.palette.tag.background}`,
                  border: `1px solid ${theme.palette.tag.border}`,
                  borderRadius: "50px",
                  padding: "5px 8px",
                  transition: "all 0.2s ease",
                  cursor: "default"
                }}
              >
                <h5 style={{ fontWeight: 500, margin: 0, whiteSpace: "nowrap", color: theme.palette.text.primary }}>{item}</h5>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>

      <Grid container sx={{ padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "100px" }}>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} sx={{ paddingBottom: "10px" }}>
          <h6 id='qualities' style={{ color: theme.palette.text.secondary }}>Qualities</h6>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
          <div style={{ gridColumnStart: 3, gridColumnEnd: 4, display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {about?.qualities?.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "fit-content",
                  background: `${theme.palette.tag.background}`,
                  border: `1px solid ${theme.palette.tag.border}`,
                  borderRadius: "50px",
                  padding: "5px 8px",
                  transition: "all 0.2s ease",
                  cursor: "default"
                }}
              >
                <h5 style={{ fontWeight: 500, margin: 0, whiteSpace: "nowrap", color: theme.palette.text.primary }}>{item}</h5>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>

      <ExperienceSection title="Honors & Awards" items={awards} />
      <ExperienceSection title="Volunteering" items={volunteering} />
    </>
  );
}

export default About;

function ExperienceSection({ title, items }) {
  const theme = useTheme();

  if (!items || items.length === 0) return null;

  return (
    <Grid container sx={{ padding: "15px 0", borderBottom: `1px solid ${theme.palette.border}`, paddingBottom: "60px" }}>
      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} sx={{ paddingBottom: "10px" }}>
        <h6 id='work_experience' style={{ color: theme.palette.text.secondary }}>{title}</h6>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 3 }}>
        {items.map(item => (
          <Grid size={12} key={item._id} sx={{ paddingBottom: "40px" }}>
            <h3 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "normal", color: theme.palette.text.primary }}>{item.role}</h3>
            {item.place?.url ? (
              <CustomLink to={item.place.url} external icon={ArrowOutwardIcon} sx={{ padding: "3px 0" }} textSx={{ fontSize: "17px", color: theme.palette.text.primary }}>
                {item.place.text}
              </CustomLink>
            ) : (
              <h4 style={{ color: theme.palette.text.primary, lineHeight: "normal", padding: "3px 0" }}>{item.place?.text}</h4>
            )}
            <h5 style={{ fontWeight: 600, color: theme.palette.text.primary, lineHeight: "normal" }}>{item.date}</h5>
            <div style={{ paddingTop: "10px" }}>
              {item.description?.text.split('\n\n').map((paragraph, index) => (
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
  )
}

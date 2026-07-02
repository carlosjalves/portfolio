import { useRef, useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid2';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CustomLink from "../../components/CustomLink";

import { useParams } from 'react-router-dom';
import { PhotoProvider } from 'react-photo-view';
import { getProjectBySlug } from "../../api/sanityClient";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Project({ onNavigate }) {
  const theme = useTheme();
  const [projectInfo, setProjectInfo] = useState(null);

  const { slug } = useParams();
  const leftRef = useRef(null);

  const aboutRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  useEffect(() => {
    async function fetchProject() {
      try {
        const data = await getProjectBySlug(slug);
        setProjectInfo(data);
      } catch (error) {
        console.error("Erro ao buscar projetos do Sanity:", error);
      }
    }

    if (slug) {
      fetchProject();
    }
  }, [slug]);


  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;

    const checkOverflow = () => {
      setHasOverflow(el.scrollHeight > el.clientHeight);
    };

    const handleScroll = () => {
      const atBottom =
        el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

      setIsAtBottom(atBottom);
    };

    checkOverflow();
    handleScroll();

    el.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkOverflow);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [projectInfo]);

  if (!projectInfo) {
    return null;
  }


  return (

    <Grid container key={projectInfo._id} sx={{ padding: "100px 0 80px 0" }}>
      {/* LEFT COLUMN */}
      <Grid size={{ xs: 12, md: 6 }}
        sx={{
          position: { xs: "initial", md: "sticky" },
          top: 100,
          alignSelf: "flex-start",
          height: "fit-content",
          paddingRight: { xs: "0", md: "80px" },
        }}
      >
        <div ref={leftRef}>
          <CustomLink
            onClick={() => onNavigate("/projects")}
            showIcon={false}
            sx={{ color: theme.palette.text.secondary, marginBottom: "15px" }}
            textSx={{ fontSize: "13px" }}
          >
            [Back]
          </CustomLink>

          {/* ABOUT */}
          <div style={{ borderBottom: `1px solid ${theme.palette.border}` }}>
            <h3 style={{ fontSize: "25px", fontWeight: 700 }}>
              {projectInfo.title}
            </h3>
            <h4 style={{ color: theme.palette.text.secondary }}>
              {formatDate(projectInfo.creationDate)}. {projectInfo.subtitle}
            </h4>
            <div style={{ padding: "20px 0 30px 0" }}>
              <div
                style={{
                  position: "relative",
                  maxHeight: "140px",
                  marginTop: "20px"
                }}
              >
                {/* SCROLL AREA */}
                <div
                  ref={aboutRef}
                  data-lenis-prevent
                  style={{
                    maxHeight: "140px",
                    overflowY: "auto",
                    paddingRight: "6px"
                  }}
                >
                  {projectInfo.about.split('\n\n').map((paragraph, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                      {paragraph.split('\n').map((line, lineIndex) => (
                        <h4
                          key={lineIndex}
                          style={{
                            margin: 0,
                            fontSize: "15px",
                            fontWeight: 500,
                            lineHeight: "1.25"
                          }}
                        >
                          {line}
                        </h4>
                      ))}
                    </div>
                  ))}
                </div>

                {/* FADE (só aparece se houver overflow e NÃO estiver no fundo) */}
                {hasOverflow && !isAtBottom && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-1px",
                      left: 0,
                      width: "100%",
                      height: "50px",
                      background: `linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0%,
            ${theme.palette.background} 100%
          )`,
                      pointerEvents: "none"
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* SKILLS */}
          {projectInfo.skills && (
            <Grid container style={{ padding: "10px 0 30px 0", borderBottom: `1px solid ${theme.palette.border}`, flexDirection: "column" }}>
              <h5 style={{ color: theme.palette.text.secondary, fontSize: "13px", paddingBottom: "4px" }}>Skills</h5>
              <div style={{ gridColumnStart: 3, gridColumnEnd: 4, display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {projectInfo.skills.map(item => (
                  <div
                    key={item}
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
                    <h5 style={{ fontWeight: 500, margin: 0, whiteSpace: "nowrap", color: theme.palette.text.primary, fontSize: "13px" }}>{item}</h5>
                  </div>
                ))}
              </div>
            </Grid>
          )}

          {/* TOOLS */}
          {projectInfo.tools && (
            <Grid container style={{ padding: "10px 0 30px 0", borderBottom: `1px solid ${theme.palette.border}`, flexDirection: "column" }}>
              <h5 style={{ color: theme.palette.text.secondary, fontSize: "13px", paddingBottom: "4px" }}>Tools</h5>
              <div style={{ gridColumnStart: 3, gridColumnEnd: 4, display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {projectInfo.tools.map(item => (
                  <div
                    key={item}
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
                    <h5 style={{ fontWeight: 500, margin: 0, whiteSpace: "nowrap", color: theme.palette.text.primary, fontSize: "13px" }}>{item}</h5>
                  </div>
                ))}
              </div>
            </Grid>
          )}

          <Grid container sx={{ display: "flex", borderBottom: { xs: 0, sm: `1px solid ${theme.palette.border}` }, paddingTop: "10px", paddingBottom: "30px" }}>
            {/* CONTEXT */}
            {projectInfo.context && (
              <Grid size={{ xs: 12, sm: 4 }} sx={{ flexDirection: "column", borderBottom: { xs: `1px solid ${theme.palette.border}`, sm: 0 }, paddingBottom: { xs: "30px", sm: 0 } }}>
                <h5 style={{ color: theme.palette.text.secondary, fontSize: "13px" }}>Context</h5>
                <h5 style={{ whiteSpace: "nowrap", color: theme.palette.text.primary, fontSize: "13px", marginTop: "3px" }}>{projectInfo.context}</h5>
              </Grid>
            )}

            {/* DESIGNED WITH */}
            {projectInfo.designedWith && projectInfo.designedWith.length > 0 && (
              <Grid size={{ xs: 12, sm: 4 }} sx={{ display: "flex", flexDirection: "column", borderBottom: { xs: `1px solid ${theme.palette.border}`, sm: 0 }, paddingTop: { xs: "10px", sm: 0 }, paddingBottom: { xs: "30px", sm: 0 } }}>
                <h5 style={{ color: theme.palette.text.secondary, fontSize: "13px" }}>Designed with</h5>
                {projectInfo.designedWith?.map((link, index) => (
                  <CustomLink key={index} to={link.url} external icon={ArrowOutwardIcon} textSx={{ fontSize: "13px", fontWeight: 500, color: theme.palette.text.primary }}>
                    {link.title}
                  </CustomLink>
                ))}
              </Grid>
            )}

            {/* LINKS */}
            {projectInfo.links && projectInfo.links.length > 0 && (
              <Grid size={{ xs: 12, sm: 4 }} sx={{ display: "flex", flexDirection: "column", borderBottom: { xs: `1px solid ${theme.palette.border}`, sm: 0 }, paddingTop: { xs: "10px", sm: 0 }, paddingBottom: { xs: "30px", sm: 0 } }}>
                <h5 style={{ color: theme.palette.text.secondary, fontSize: "13px" }}>Links</h5>
                {projectInfo.links?.map((link, index) => (
                  <CustomLink key={index} to={link.url} external icon={ArrowOutwardIcon} textSx={{ fontSize: "13px", fontWeight: 500, color: theme.palette.text.primary }}>
                    {link.title}
                  </CustomLink>
                ))}
              </Grid>
            )}
          </Grid>
        </div>
      </Grid>

      {/* RIGHT COLUMN */}
      <Grid
        id="rightColumn"
        size={{ xs: 12, md: 6 }}
        sx={{
          justifySelf: "center"
        }}
      >
        <PhotoProvider>
          {projectInfo?.media && projectInfo?.media.length > 0 && (
            <ImageList
              sx={{ width: "100%", height: "auto", rowGap: "8px" }}
              cols={isMobile ? 1 : 2}
              gap={8}
            >
              {projectInfo?.media?.map((item, i) => {
                const isWebm = item.fileUrl?.endsWith(".webm");

                // lógica principal
                const cols = item.square ? 1 : 2;

                return (
                  <ImageListItem key={i} cols={cols}>

                    {/* FILE (image / gif / webm) */}
                    {item.type === "file" && (
                      isWebm ? (
                        <video
                          src={item.fileUrl}
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover"
                          }}
                        />
                      ) : (
                        <img
                          src={item.fileUrl}
                          alt=""
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover"
                          }}
                        />
                      )
                    )}

                    {/* 👉 EXTERNAL VIDEO (Vimeo / YouTube) */}
                    {item.type === "external" && (
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "16 / 9",
                          overflow: "hidden"
                        }}
                      >
                        <iframe
                          src={item.videoUrl}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: 0
                          }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          title="video"
                        />
                      </div>
                    )}

                  </ImageListItem>
                );
              })}
            </ImageList>
          )}
        </PhotoProvider>
      </Grid>
    </Grid>
  );
}

export default Project;

function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
  });
}


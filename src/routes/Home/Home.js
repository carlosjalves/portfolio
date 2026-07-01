import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useTheme, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";
import { getAbout, getProjects } from "../../api/sanityClient";
import CustomLink from "../../components/CustomLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)

function Home({ onNavigate }) {
  const theme = useTheme();

  const [about, setAbout] = useState(null);
  const [projects, setProjects] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesTrail, setImagesTrail] = useState([]);
  const [lastPosition, setLastPosition] = useState(null);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const bioRef = useRef(null);
  const linkRef = useRef(null);

  useLayoutEffect(() => {
    if (!about?.bio || !bioRef.current) return;

    const split = new SplitText(bioRef.current, {
      type: "lines"
    });

    const split2 = new SplitText(linkRef.current, {
      type: "lines"
    });

    gsap.set(split.lines, {
      overflow: "hidden"
    });

    gsap.set(split2.lines, {
      overflow: "hidden"
    });

    gsap.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.12,
      delay: 1,
      ease: "power4.out"
    });

    gsap.from(split2.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.12,
      delay: 3.7,
      ease: "power4.out"
    });

    return () => {
      split.revert();
      split2.revert();
    };
  }, [about]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track || !projects?.length) return;

    const getScrollDistance = () =>
      track.scrollWidth - section.offsetWidth;

    const ctx = gsap.context(() => {
      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: true,
          start: "top 65px",
          end: () => "+=" + getScrollDistance(),
          invalidateOnRefresh: true,
        }
      });

      // FORÇA recalculo depois de tudo estar pronto
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, section);

    return () => ctx.revert();
  }, [projects]);

  useEffect(() => {
    async function fetchData() {
      try {
        // ABOUT
        const aboutData = await getAbout();
        setAbout(aboutData[0]); // normalmente só tens 1 documento

        const projectsData = await getProjects();
        setProjects(projectsData); // normalmente só tens 1 documento

      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();

  }, []);

  const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  };


  const DISTANCE_THRESHOLD = 50; // ajusta (50–120 ideal)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    if (!lastPosition) {
      setLastPosition({ x: clientX, y: clientY });
      return;
    }

    const distance = getDistance(
      lastPosition.x,
      lastPosition.y,
      clientX,
      clientY
    );

    if (distance < DISTANCE_THRESHOLD) return;

    // criar nova imagem
    const newImage = {
      id: Date.now(),
      x: clientX,
      y: clientY,
      src: projects[currentIndex]?.coverImage.url
    };

    setImagesTrail(prev => [...prev, newImage]);

    setCurrentIndex(prev => (prev + 1) % projects.length);

    setLastPosition({ x: clientX, y: clientY });

    // remover após 3s
    setTimeout(() => {
      setImagesTrail(prev => prev.filter(img => img.id !== newImage.id));
    }, 1000);
  };

  console.log(projects)

  return (

    <>
      <Grid container key={about?._id}
        onMouseMove={handleMouseMove}
        sx={{
          position: "relative", padding: "100px 0", borderBottom: `1px solid ${theme.palette.border}`, height: "101vh", alignItems: "center"
        }}>
        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 2 }}
          offset={{ xs: 1, sm: 6 }}
        >
          <h3 ref={bioRef} style={{ fontSize: "32px", lineHeight: "1.1", paddingBottom: "30px", color: "white", mixBlendMode: "difference" }}>{about?.bio}</h3>
          <div ref={linkRef}>
            <CustomLink to="/about" onNavigate={onNavigate} showIcon={false} sx={{ color: "white", mixBlendMode: "difference" }}>
              [Get to Know Me]
            </CustomLink>
          </div>
          {/* IMAGEM HOVER */}
          {imagesTrail.map(img => (
            <img
              key={img.id}
              src={img.src}
              alt=""
              style={{
                position: "fixed",
                top: img.y,
                left: img.x,
                width: "220px",
                pointerEvents: "none",
                animation: "imageTrail 3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
                zIndex: -1
              }}
            />
          ))}
        </Grid>
      </Grid>


      <Grid
        ref={sectionRef}
        sx={{
          position: "relative",
          overflow: "hidden",
          padding: "15px 0",
          borderBottom: `1px solid ${theme.palette.border}`,
          borderTop: `1px solid ${theme.palette.border}`,
          paddingBottom: "100px",
          minHeight: "100vh"
        }}
      >
        {/* HEADER */}
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 4
          }}
        >
          <Grid>
            <h6
              style={{
                margin: 0,
                color: theme.palette.text.secondary
              }}
            >
              Featured Projects
            </h6>
          </Grid>

          <Grid>
            <CustomLink to="/projects" onNavigate={onNavigate} showIcon={false} sx={{ color: theme.palette.text.secondary }}>
              [View All Projects]
            </CustomLink>
          </Grid>
        </Grid>

        {/* HORIZONTAL GALLERY */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            flexWrap: "nowrap",
            willChange: "transform",
            alignItems: "center"
          }}
        >
          {projects?.filter(project => project.featured)?.map((project) => {
            const isVideo =
              project.coverImage?.type?.includes("video");

            return (
              <Link
                key={project._id}
                to={`/projects/${project.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/projects/${project.slug}`);
                }}
                onMouseEnter={() => setHoveredProject(project._id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "58vw",   // mobile
                      sm: "39vw",
                      md: "28vw",
                      lg: "25vw",
                      xl: "20vw"
                    },
                    flexShrink: 0,
                    padding: "24px",
                    boxSizing: "border-box"
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      overflow: "hidden",
                      transition: "filter 0.4s ease",
                      filter: hoveredProject === project._id ? "brightness(0.6)" : "none"
                    }}
                  >
                    {isVideo ? (
                      <video
                        src={project.coverImage.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                    ) : (
                      <img
                        src={project.coverImage.url}
                        alt={project.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                    )}
                  </div>

                  <h4 style={{ lineHeight: 1.3 }}>
                    {project.title}
                  </h4>

                  <p style={{ opacity: 0.7 }}>
                    {project.subtitle}
                  </p>
                </Box>
              </Link>
            );
          })}
        </div>
      </Grid>
    </>
  );
}

export default Home;

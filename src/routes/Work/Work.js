import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { ImageList, ImageListItem } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import { getProjects } from "../../api/sanityClient";


function Work({ onNavigate }) {
  const theme = useTheme();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");

  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const isXlDown = useMediaQuery(theme.breakpoints.down("xl"));

  let cols = 5;

  if (isSmDown) cols = 1;
  else if (isMdDown) cols = 2;
  else if (isLgDown) cols = 3;
  else if (isXlDown) cols = 4;


  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);

        // Extrair tags (keywords)
        const allTags = data.flatMap(item => item.skills || []);
        const uniqueTags = ["All", ...new Set(allTags)];
        setTags(uniqueTags);

      } catch (error) {
        console.error("Erro ao buscar projetos", error);
      }
    }

    fetchProjects();
  }, []);

  if (!projects) return null;

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter(item => item.skills?.includes(selectedTag));

  return (
    <>
      <Grid container spacing={2} sx={{ padding: "100px 0" }}>
        {/* TAGS */}
        <Grid
          size={12}
          container
          spacing={1}
          sx={{
            padding: "30px 0",
            borderBottom: `1px solid ${theme.palette.border}`
          }}
        >
          {tags.map(tag => {
            const isActive = selectedTag === tag;

            return (
              <Grid size="auto" key={tag}>
                <Box
                  onClick={() => setSelectedTag(tag)}
                  sx={{
                    cursor: "pointer",
                    width: "fit-content",
                    border: `1px solid ${theme.palette.tag.border}`,
                    borderRadius: "50px",
                    padding: "5px 8px",

                    backgroundColor: isActive
                      ? theme.palette.text.primary
                      : theme.palette.tag.background,

                    color: isActive
                      ? theme.palette.text.inverted
                      : theme.palette.text.primary,

                    transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",

                    // HOVER
                    "&:hover": {
                      transform: isActive ? "none" : "translateY(-2px)",
                      boxShadow: isActive
                        ? "none"
                        : `0 4px 12px ${theme.palette.text.primary}20`,
                      backgroundColor: theme.palette.text.primary,
                      color: theme.palette.text.inverted
                    }
                  }}
                >
                  <Box
                    component="h4"
                    sx={{
                      margin: 0,
                      whiteSpace: "nowrap",
                      fontSize: "14px",
                      fontWeight: 500
                    }}
                  >
                    {tag}
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        {/* PROJETOS */}
        <ImageList variant="masonry" cols={cols} gap={20}>
          {filteredProjects.map(item => (
            <ImageListItem key={item._id}>
              <div
                onMouseEnter={() => setHoveredProject(item._id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ cursor: "pointer", marginBottom: "50px" }}
              >
                <Link
                  to={`/projects/${item.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/projects/${item.slug}`);
                  }}
                  style={{
                    textDecoration: "none",
                    color: "inherit"
                  }}
                >
                  {/* IMAGEM */}
                  <div style={{ position: "relative" }}>
                    {item.coverImage?.type?.includes("video") ? (
                      <video
                        src={item.coverImage.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          transition: "filter 0.4s ease",
                          filter: hoveredProject === item._id ? "brightness(0.6)" : "none"
                        }}
                      />
                    ) : (
                      <img
                        src={item.coverImage.url}
                        alt={item.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          transition: "filter 0.4s ease",
                          filter: hoveredProject === item._id ? "brightness(0.6)" : "none"
                        }}
                      />
                    )}
                  </div>

                  {/* TEXTO */}
                  <h4 style={{ lineHeight: 1.3 }}>{item.title}</h4>
                  <p style={{ opacity: 0.7 }}>
                    {item.subtitle}
                  </p>
                </Link>
              </div>

            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </>
  );
}

export default Work;

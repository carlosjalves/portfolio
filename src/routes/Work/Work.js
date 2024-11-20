import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

import projectsData from "../../data/Work/workData";

function Work() {
  const theme = useTheme();
  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    // Obtemos os dados diretamente do arquivo, sem precisar de fetch
    const result = projectsData || []; // Se o slug não existir, retorna um array vazio

    // Ordenar os projetos pela data
    const sortedProjects = result.sort((a, b) => b.acf.date.localeCompare(a.acf.date));
    setProjects(sortedProjects);

    // Extrair tags
    const allTags = result.flatMap(item => item.acf?.tags || []);
    const uniqueTags = ["All", ...new Set(allTags)];
    setTags(uniqueTags);
  }, []);

  if (!projects) {
    return null;
  }

  const filteredProjects = selectedTag === "All"
    ? projects
    : projects.filter(item => item.acf?.tags?.includes(selectedTag));

  const marginHeight = window.innerWidth * 0.075;

  return (
    <>
      <Box sx={{ marginTop: { xs: "100px", md: `${marginHeight + 102}px` }, minHeight: `calc(100vh - ${marginHeight + 102}px - 55px)` }}>
        <Grid
          container
          spacing={2}
        >
          <Grid container spacing={1} sx={{ padding: "30px 0 15px 0" }}>
            {tags.map(tag => (
              <Grid size="auto" key={tag}>
                <div
                  //key={tag}
                  onClick={() => setSelectedTag(tag)}
                  style={{
                    cursor: 'pointer',
                    width: 'fit-content',
                    border: `2px solid ${theme.palette.text.primary}`,
                    borderRadius: '50px',
                    padding: '5px 8px',
                    backgroundColor: selectedTag === tag ? theme.palette.text.primary : 'transparent',
                    color: selectedTag === tag ? theme.palette.text.inverted : theme.palette.text.primary,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <h4 style={{ margin: 0, whiteSpace: 'nowrap', fontSize: '14px' }}>{tag}</h4>
                </div>
              </Grid>
            ))}
          </Grid>

          {/* Renderiza os projetos filtrados */}
          <Grid container spacing={4} sx={{ padding: '15px 0', paddingBottom: "80px" }}>
            {filteredProjects.map(item => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
                <div
                  className="project-container"
                >
                  <div>
                    <Link to={`/portfolio/${item.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <img
                        src={item.acf.banner}
                        alt=""
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '10px',
                          objectFit: 'cover',
                        }}
                      />
                      <p>{formatDate(item.acf.date)}</p>
                      <h4>{item.acf.title}</h4>
                    </Link>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Work;


function formatDate(dateString) {
  if (!dateString) return '';

  // Extrair o ano e o mês da string
  const year = dateString.substring(0, 4);
  const monthIndex = parseInt(dateString.substring(4, 6), 10) - 1;

  // Obter o nome do mês
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[monthIndex];

  return `${monthName} ${year}`;
}

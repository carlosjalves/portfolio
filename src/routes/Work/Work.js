import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
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
      <div style={{ marginTop: `${marginHeight + 102}px`, gridColumnStart: 1, gridColumnEnd: 5, minHeight: `calc(100vh - ${marginHeight + 102}px - 55px)` }}>
        <div style={{ display: "flex", gap: "8px", padding: "30px 0" }}>
          {tags.map(tag => (
            <div
              key={tag}
              onClick={() => setSelectedTag(tag)}
              style={{
                cursor: "pointer",
                width: "fit-content",
                border: `2px solid ${theme.palette.text.primary}`,
                borderRadius: "50px",
                padding: "5px 8px",
                backgroundColor: selectedTag === tag ? theme.palette.text.primary : "transparent",
                color: selectedTag === tag ? theme.palette.text.inverted : theme.palette.text.primary,
                transition: "all 0.3s ease"
              }}
            >
              <h4 style={{ margin: 0, whiteSpace: "nowrap" }}>{tag}</h4>
            </div>
          ))}
        </div>

        {/* Renderiza os projetos filtrados */}
        <div
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 5,
            display: "grid",
            gridTemplateColumns: 'calc(25% - 22.5px) calc(25% - 22.5px) calc(25% - 22.5px) calc(25% - 22.5px)',
            padding: "15px 0",
            paddingBottom: "80px",
            gap: "30px"
          }}
        >
          {filteredProjects.map(item => (
            <div key={item.id} className="project-container">
              <Link to={`/${item.slug}`}>

                <img
                  src={item.acf.banner}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "10px"
                  }}
                />

                <p>{formatDate(item.acf.date)}</p>
                <h4>{item.acf.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

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

import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import { fetchWithAuth } from "../../hooks/api";

function Work() {
  const theme = useTheme();
  const [projects, setProjects] = useState([]);
  const [imageURLs, setImageURLs] = useState({}); // Estado para armazenar URLs das imagens
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const result = await fetchWithAuth('projects?per_page=50');

        // Ordenar os projetos pela data
        const sortedProjects = result.sort((a, b) => b.acf.date.localeCompare(a.acf.date));
        setProjects(sortedProjects);

        // Extrair tags
        const allTags = result.flatMap(item => item.acf?.tags || []);
        const uniqueTags = ["All", ...new Set(allTags)];
        setTags(uniqueTags);

        // Obter URLs de imagens
        const imageIds = result.map(item => item.acf?.banner).filter(Boolean);
        const images = await Promise.all(
          imageIds.map(id => fetchWithAuth(`media/${id}`))
        );

        const urls = {};
        images.forEach(({ id, source_url }) => {
          urls[id] = source_url;
        });
        setImageURLs(urls);

      } catch (error) {
        console.error("Erro ao carregar projetos:", error);
      }
    }

    fetchProjects();
  }, []);

  const filteredProjects = selectedTag === "All"
    ? projects
    : projects.filter(item => item.acf?.tags?.includes(selectedTag));

  const marginHeight = window.innerWidth * 0.075;

  return (
    <>
      {/* Renderiza as tags para filtragem */}
      <div style={{ display: "flex", gap: "8px", marginTop: `${marginHeight + 102}px`, padding: "30px 0" }}>
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
          paddingBottom: "100px",
          gap: "30px"
        }}
      >
        {filteredProjects.map(item => (
          <div key={item.id} className="project-container">
            <Link to={`/${item.slug}`}>
              {imageURLs[item.acf.banner] && (
                <img
                  src={imageURLs[item.acf.banner]}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "10px"
                  }}
                />
              )}
              <p>{formatDate(item.acf.date)}</p>
              <h4>{item.acf.title}</h4>
            </Link>
          </div>
        ))}
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

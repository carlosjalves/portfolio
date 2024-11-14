import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useParams } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { fetchWithAuth } from "../../hooks/api";

function Project() {
  const theme = useTheme();
  const [projectInfo, setProjectInfo] = useState(null);
  const [imageURLs, setImageURLs] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        // Requisição para dados do projeto utilizando `fetchWithAuth`
        const projectData = await fetchWithAuth(`projects?slug=${slug}`);
        setProjectInfo(projectData);

        // Coleta IDs das imagens dinâmicas
        const imageRequests = projectData.flatMap(item =>
          Object.entries(item.acf || {})
            .filter(([key, value]) => key.startsWith("image_") && value)
            .map(([key, id]) => ({ id, projectId: item.id }))
        );

        // Requisição das URLs das imagens usando `fetchWithAuth`
        const images = await Promise.all(
          imageRequests.map(async ({ id, projectId }) => {
            const imageData = await fetchWithAuth(`media/${id}`);
            return { id, url: imageData.source_url, projectId };
          })
        );

        // Organiza as URLs das imagens pelo ID do projeto
        const urls = {};
        images.forEach(({ id, url, projectId }) => {
          if (!urls[projectId]) urls[projectId] = [];
          urls[projectId].push({ id, url });
        });
        setImageURLs(urls);
      } catch (error) {
        console.error("Erro ao buscar informações do projeto:", error);
      }
    };

    fetchProjectData();
  }, [slug]);

  if (!projectInfo) return null;

  const marginHeight = window.innerWidth * 0.075;

  return (
    projectInfo.map(item => (
      <div
        key={item.id}
        style={{
          gridColumnStart: 1,
          gridColumnEnd: 5,
          display: "grid",
          gridTemplateColumns: '50% 50%',
          gridTemplateRows: '80px auto',
          padding: "30px 0",
          marginTop: `${marginHeight + 102}px`,
          minHeight: `calc(100vh - ${marginHeight + 102}px - 55px)`
        }}
      >
        <h2 style={{ fontWeight: 800, paddingBottom: "30px", gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 2 }}>{item.acf.title}</h2>

        <div style={{ gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 2, gridRowEnd: 3 }}>
          <h4 style={{ paddingBottom: "40px" }}>{item.acf.text}</h4>
          <h5 style={{ paddingBottom: "15px" }}><strong>Keywords:</strong> {item.acf.keywords}</h5>
          <h5><strong>Tools:</strong> {item.acf.tools}</h5>
        </div>

        <div style={{ gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 2, gridRowEnd: 3, paddingLeft: "80px", maxWidth: "40vw", justifySelf: "center" }}>
          <PhotoProvider>
            {imageURLs[item.id] && imageURLs[item.id].length > 0 &&
              <ImageList sx={{ width: "100%", height: "auto" }} variant="masonry" cols={2} gap={8}>
                {imageURLs[item.id].map(image => (
                  <ImageListItem key={image.id}>
                    <PhotoView src={image.url}>
                      <img
                        alt=""
                        loading="lazy"
                        srcSet={`${image.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        src={`${image.url}?w=161&fit=crop&auto=format`}
                        style={{
                          borderRadius: "10px",
                          cursor: "pointer",
                          width: "100%",
                          height: "auto",
                          objectFit: "cover"
                        }}
                      />
                    </PhotoView>
                  </ImageListItem>
                ))}
              </ImageList>
            }
          </PhotoProvider>
        </div>
      </div>
    ))
  );
}

export default Project;


import React, { useState, useEffect } from "react";
//import { useTheme } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useParams } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import projectsData from "../../data/Work/workData";

function Project() {
  //const theme = useTheme();
  const [projectInfo, setProjectInfo] = useState(null);
  const { slug } = useParams();

  useEffect(() => {

    // Filtra o projeto com base no slug passado pela URL
    const result = projectsData.find(project => project.slug === slug);
    if (result) {
      setProjectInfo(result);
    } else {
      console.error(`Projeto com o slug "${slug}" não encontrado.`);
    }

  }, [slug]);

  if (!projectInfo) {
    return null;
  }

  const marginHeight = window.innerWidth * 0.075;

  return (
    <div
      key={projectInfo.id}
      style={{
        gridColumnStart: 1,
        gridColumnEnd: 5,
        display: "grid",
        gridTemplateColumns: '50% 50%',
        gridTemplateRows: '80px auto',
        padding: "30px 0 70px 0",
        marginTop: `${marginHeight + 102}px`,
        minHeight: `calc(100vh - ${marginHeight + 102}px - 55px)`
      }}
    >
      <h2 style={{ fontWeight: 800, paddingBottom: "30px", gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 2 }}>{projectInfo.acf.title}</h2>

      <div style={{ gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 2, gridRowEnd: 3 }}>
        <div style={{ paddingBottom: "40px" }}>
          {projectInfo.acf.text.split('\n\n').map((paragraph, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              {paragraph.split('\n').map((line, lineIndex) => (
                <h4 key={lineIndex} style={{ margin: 0 }}>
                  {line}
                </h4>
              ))}
            </div>
          ))}
        </div>
        <h5 style={{ paddingBottom: "15px" }}><strong>Keywords:</strong> {projectInfo.acf.keywords}</h5>
        <h5><strong>Tools:</strong> {projectInfo.acf.tools}</h5>
      </div>

      <div style={{ gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 2, gridRowEnd: 3, paddingLeft: "80px", maxWidth: "40vw", justifySelf: "center" }}>
        <PhotoProvider>
          {projectInfo.acf.images && projectInfo.acf.images.length > 0 && (
            <ImageList sx={{ width: "100%", height: "auto" }} variant="masonry" cols={2} gap={8}>
              {projectInfo.acf.images.map(image => (
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
          )}
        </PhotoProvider>
      </div>

    </div>
  );
}

export default Project;


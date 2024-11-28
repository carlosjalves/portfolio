import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

import { useParams } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import projectsData from "../../data/Work/workData";

function Project() {
  const theme = useTheme();
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

  console.log(projectInfo)

  return (
    <Box sx={{ minHeight: `calc(100vh - ${marginHeight + 102}px - 55px)`, padding: "30px 0 80px 0", marginTop: { xs: "100px", md: `${marginHeight + 102}px` } }}>
      <Grid container key={projectInfo.id}>
        <Grid size={12}>
          <h2 style={{ fontWeight: 800, paddingBottom: "50px" }}>{projectInfo.acf.title}</h2>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
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
          <h5 style={{ paddingBottom: "50px" }}><strong>Tools:</strong> {projectInfo.acf.tools}</h5>
          {projectInfo.link !== "" && (
            <>
              <Link href={projectInfo.link} target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center", color: theme.palette.text.primary, cursor: "pointer", marginBottom: "30px" }}>
                <IconButton size={'small'} sx={{ color: theme.palette.text.primary }}>
                  <GitHubIcon fontSize="small" />
                </IconButton>
                <h5 style={{ fontSize: "13px" }}><strong>GitHub Repository</strong></h5>
              </Link>
            </>
          )}
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{ paddingLeft: { xs: "0", md: "80px" }, maxWidth: { xs: "100vw", lg: "40vw" }, justifySelf: "center" }}>
          <PhotoProvider>
            {projectInfo.acf.images && projectInfo.acf.images.length > 0 && (
              <ImageList sx={{ width: "100%", height: "auto", overflowY: "unset" }} variant="woven" cols={2} gap={8}>
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default Project;


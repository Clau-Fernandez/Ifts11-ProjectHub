import { useParams } from "react-router-dom";

import {
  Box,
  Typography,
  Chip,
  Tooltip,
  IconButton,
  Container,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Carousel } from "antd";

// Datos de muestra del proyecto
const mockDeDetalleDeProyecto = () => {
  return {
    title: "Proyecto de ejemplo: ",
    description:
      "Descripción del proyecto de ejemplo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sapien non ipsum lacinia consequat ut vel libero. Sed gravida, ipsum eget mollis vestibulum, lorem elit hendrerit sapien, a interdum mi neque sed nunc. Ut id ipsum eget risus blandit suscipit. Vestibulum euismod metus vel diam scelerisque ullamcorper. Pellentesque tincidunt, nulla eget laoreet pharetra, mi justo efficitur nibh, ut egestas tortor nunc vel risus. Nam non volutpat lorem. In ullamcorper ipsum id lorem sodales, nec aliquam tellus sodales. Quisque lobortis tellus eu massa placerat ultrices. Fusce sed justo sit amet lorem scelerisque efficitur.",
    date: "14/04/2024",
    technologies: ["React", "C#", "AWS", "SQL"],
    githubRepo: "https://github.com/Clau-Fernandez/Ifts11-ProjectHub",
    coverImages: [
      "../public/assets/csharp.png",
      "../public/assets/csharp.png",
      "../public/assets/csharp.png",
    ],
    teacher: "Leandro Rodrigo San Roman",
    career: "Desarrollo de Software",
    subject: "Proyecto Final",
    members: [
      "Laura Dancoso",
      "Fernando Bartoli",
      "Brisa Sardón",
      "Claudia Fernandez",
    ],
    projectUrl: "https://projecthub.arduino.cc/",
    linkDescription: ["Vistas de pantallas", "Notion", "Miro"],
    links: [
      "https://www.canva.com/design/DAGBmWVwDHQ/O8QLd1UmX0a2cXBXxNE-IQ/edit",
      "https://www.notion.so/laudancoso/IFTS-TSDS-Final-Project-Project-Hub-ff4174fd44d6495fb5eeebb0b78c0437",
      "https://miro.com/app/settings/team/3458764583043175261/profile/",
    ],
  };
};

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projectData = mockDeDetalleDeProyecto();
  const {
    title,
    description,
    date,
    technologies,
    githubRepo,
    coverImages,
    teacher,
    career,
    subject,
    members,
    projectUrl,
    linkDescription,
    links,
  } = projectData;
  return (
    <Container maxWidth="lg" sx={{ marginTop: "35px" }}>
      <Box marginBottom={1} padding={2}>
        <Box
          sx={{
            borderRadius: 2,
            bgcolor: "#353535",
            padding: 2,
          }}
        >
          <Typography
            variant="body2"
            gutterBottom
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "18px",
              color: "primary.light",
            }}
          >
            {date}
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            color="primary"
            style={{ fontWeight: "bold" }}
          >
            {title}
            {projectId}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>

          {/* PORTADA */}
          <Box
            sx={{
              marginTop: 5,
              marginBottom: 2,
            }}
          >
            <Carousel autoplay>
              {coverImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Portada ${index}`}
                  style={{ maxWidth: "100%" }}
                />
              ))}
            </Carousel>
          </Box>
        </Box>

        {/* MEMBERS */}
        <Box
          sx={{
            borderRadius: 2,
            bgcolor: "#353535",
            marginTop: "10px",
            padding: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              marginRight: 1,
              marginBottom: 2,
              fontWeight: "bold",
              color: "#9c27b0",
            }}
          >
            Integrantes
          </Typography>
          {members.map((member, index) => (
            <Chip
              key={index}
              label={member}
              style={{ marginRight: "10px", fontSize: 15 }}
            />
          ))}
        </Box>
        {/* DOCENTE*/}
        <Box
          sx={{
            borderRadius: 2,
            bgcolor: "#353535",
            marginTop: "10px",
            padding: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              marginRight: 1,
              marginBottom: 2,
              fontWeight: "bold",
              color: "#9c27b0",
            }}
          >
            Docente
          </Typography>
          <Chip label={teacher} style={{ fontSize: 15 }} />
        </Box>
        {/* DETALLE ACADEMICO: -CARRERA-MATERIA */}

        <Box
          sx={{
            borderRadius: 2,
            bgcolor: "#353535",
            marginTop: "10px",
            padding: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              marginRight: 1,
              marginBottom: 2,
              fontWeight: "bold",
              color: "#9c27b0",
            }}
          >
            Materia
          </Typography>
          <Chip label={subject} style={{ fontSize: 15 }} />
        </Box>

        <Box
          sx={{
            borderRadius: 2,
            bgcolor: "#353535",
            marginTop: "10px",
            padding: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              marginRight: 1,
              marginBottom: 2,
              fontWeight: "bold",
              color: "#9c27b0",
            }}
          >
            Carrera
          </Typography>
          <Chip label={career} style={{ fontSize: 15 }} />
        </Box>

        {/* TECNOLOGIAS UTILIZADAS -link a repo-link a app */}
        <Box
          sx={{
            borderRadius: 2,
            bgcolor: "#353535",
            marginTop: "10px",
            padding: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              marginRight: 1,
              marginBottom: 2,
              fontWeight: "bold",
              color: "#9c27b0",
            }}
          >
            Tecnologías utilizadas
          </Typography>
          <Box marginBottom={1}>
            {technologies.map((technology, index) => (
              <Chip
                key={index}
                label={technology}
                style={{ marginRight: "10px", fontSize: 15 }}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: 2,
            bgcolor: "#353535",
            marginTop: "10px",
            padding: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{ marginRight: 1, fontWeight: "bold", color: "#9c27b0" }}
            >
              Repositorio
            </Typography>
            <Tooltip title="Ver Repositorio en GitHub">
              <IconButton
                href={githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ padding: 3, width: "40px", height: "40px" }}
              >
                <GitHubIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Tooltip>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{ marginRight: 1, fontWeight: "bold", color: "#9c27b0" }}
            >
              Proyecto
            </Typography>
            <Tooltip title="Ver proyecto">
              <IconButton
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ padding: 3, width: "40px", height: "40px" }}
              >
                <OpenInNewIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        {/* LINKS */}
        <Grid
          container
          spacing={0}
          sx={{
            borderRadius: 2,
            bgcolor: "#353535",
            marginTop: "10px",
            padding: 2,
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#9c27b0" }}
            >
              {" "}
              Links
            </Typography>
            <List sx={{ padding: 0 }}>
              {links.map((link, index) => (
                <ListItem key={index} sx={{ paddingBottom: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ marginRight: 1, fontSize: "18px" }}
                  >
                    {linkDescription[index]}
                  </Typography>
                  <Tooltip title="Abrir enlace">
                    <IconButton
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ padding: 1 }}
                    >
                      <OpenInNewIcon sx={{ fontSize: "20px" }} />
                    </IconButton>
                  </Tooltip>
                </ListItem>
              ))}
            </List>
          </Grid>
          {/*
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>Links</Typography>
            <List sx={{ padding: 0 }}>
              {links.map((link, index) => (
                <ListItem key={index} sx={{ paddingBottom: 1 }}>
                  <Typography variant="body2" sx={{ marginRight: 1 }}>
                    {linkDescription[index]}
                  </Typography>
                  <Tooltip title="Abrir enlace">
                    <IconButton
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ padding: 2 }}
                    >
                      <OpenInNewIcon sx={{ fontSize: "20px" }} />
                    </IconButton>
                  </Tooltip>
                </ListItem>
              ))}
            </List>
          </Grid>
          */}
          {/* <Grid item xs={6}>
            <h2>Links</h2>
            {linkDescription}
            <IconButton
              href= {link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ padding:3, width: '40px', height: '40px' }}
            >
            <OpenInNewIcon  sx={{ fontSize: '20px' }} />
             </IconButton>
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProjectDetail;

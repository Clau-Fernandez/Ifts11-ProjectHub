import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Chip,
  Tooltip,
  IconButton,
  Container,
  Grid,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

// Datos de muestra del proyecto
const mockDeDetalleDeProyecto = () => {
  return {
    title: "Proyecto de ejemplo: ",
    description:
      "Descripción del proyecto de ejemplo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sapien non ipsum lacinia consequat ut vel libero. Sed gravida, ipsum eget mollis vestibulum, lorem elit hendrerit sapien, a interdum mi neque sed nunc. Ut id ipsum eget risus blandit suscipit. Vestibulum euismod metus vel diam scelerisque ullamcorper. Pellentesque tincidunt, nulla eget laoreet pharetra, mi justo efficitur nibh, ut egestas tortor nunc vel risus. Nam non volutpat lorem. In ullamcorper ipsum id lorem sodales, nec aliquam tellus sodales. Quisque lobortis tellus eu massa placerat ultrices. Fusce sed justo sit amet lorem scelerisque efficitur.",
    date: "14/04/2024",
    technologies: ["React", "C#", "AWS", "SQL"],
    githubRepo: "https://github.com/Clau-Fernandez/Ifts11-ProjectHub",
    coverImage: "../public/assets/csharp.png",
    career: "Desarrollo de Software",
    subject: "Proyecto Final",
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
    coverImage,
    career,
    subject,
  } = projectData;

  return (
    <Container maxWidth="lg" sx={{ marginTop: "35px", backgroundColor: "#212121" }}>
      <Box marginBottom={1} padding={4}>
        <Typography variant="body2" gutterBottom style={{ marginBottom: '10px', display:"flex", justifyContent:"flex-end", fontSize:'18px' }}>{date} </Typography>
        <Typography variant="h2" gutterBottom  color='primary'style = {{ borderBottom: '1px solid #9e9e9e', fontWeight: 'bold'}}>
          {title}{projectId}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ marginBottom: '35px' }}>
          {description}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box marginBottom={1}>
              {technologies.map((technology, index) => (
                <Chip
                  key={index}
                  label={technology}
                  style={{ marginRight: "10px", fontSize:15, }}
                />
              ))}
            </Box>
            <Tooltip title="Ver Repositorio en GitHub">
              <IconButton
                href={githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ padding: 0, width: '40px', height: '40px' }}
              >
                <GitHubIcon  sx={{ fontSize: '30px' }} />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={6}>
            <Box marginBottom={2} textAlign="right">
              <Chip
                  label={subject}
                  color="primary" 
                  style={{ fontSize:15, fontWeight:'bold'}}
                />
            </Box>
            <Box marginBottom={2} textAlign="right">
              <Chip
                  label={career}
                  color="primary" 
                  style={{fontSize:15, fontWeight:'bold'}}
                />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" marginBottom="15px" padding='20px'>
        <img
          src={coverImage}
          alt="Portada del Proyecto"
          style={{ maxWidth: "100%" }}
        />
      </Box>
    </Container>
  );
};

export default ProjectDetail;

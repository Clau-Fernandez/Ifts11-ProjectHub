import { Box, Grid, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";
import { DeleteIcon, EditIcon } from "../Icons/Icons";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import EditProject from "./EditProject";
import ResponsiveDialog from "../Modal/Modal";
import { darkTheme } from "../../App";
import "./Card.styles.css"

const cardData = [
  {
    projectId: 1,
    imageUrl: "src/assets/$.jpg",
    title: "Dolar$Nube",
    members: [
      "Brisa Sardón, ",
      "Fernando Bartoli, ",
      "Laura Dancoso, ",
      "Claudia Fernandez",
    ],
  },
  {
    projectId: 2,
    imageUrl: "src/assets/peliculas.png",
    title: "AppPeliculas",
    members: [
      "Laura Dancoso, ",
      "Brisa Sardón, ",
      "Claudia Fernandez, ",
      "Fernando Bartoli",
    ],
  },
  {
    projectId: 3,
    imageUrl: "src/assets/Abonando.png",
    title: "AbonandoAndo",
    members: [
      "Laura Dancoso, ",
      "Fernando Bartoli, ",
      "Brisa Sardón, ",
      "Claudia Fernandez",
    ],
  },
  {
    projectId: 4,
    imageUrl: "src/assets/PlayerApp.png",
    title: "App de Chat",
    members: [
      "Fernando Bartoli ",
      "Laura Dancoso, ",
      "Brisa Sardón, ",
      "Claudia Fernandez",
    ],
  },
  {
    projectId: 5,
    imageUrl: "src/assets/RoyalTech.png",
    title: "Proyecto 5",
    members: [
      "Brisa Sardón, ",
      "Claudia Fernandez, ",
      "Laura Dancoso, ",
      "Fernando Bartoli",
    ],
  },
  {
    projectId: 6,
    imageUrl: "src/assets/petshop.png",
    title: "PetShop-PawPaw",
    members: [
      "Claudia Fernandez, ",
      "Fernando Bartoli, ",
      "Brisa Sardón, ",
      "Laura Dancoso",
    ],
  },
];

const ActionAreaCard = ({
  projectId,
  imageUrl,
  title,
  members,
  isAuthenticated,
}: {
  projectId: number;
  imageUrl: string;
  title: string;
  members: string[];
  isAuthenticated: boolean;
}) => {
  const navigate = useNavigate();
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleGoToProjectDetail = () => {
    navigate(`/proyecto/${projectId}`);
  };

  const handleEditDialogOpen = () => {
    setSelectedProject({
      projectId,
      imageUrl,
      title,
      members,
      description: "",
      technologies: [],
      career: "",
      subject: "",
      githubRepo: "",
      projectLink: "",
      otherLinks: "",
    });
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleSaveProject = (updatedProject: any) => {
    console.log("Proyecto actualizado: ", updatedProject);
    handleEditDialogClose();
  };

  const handleDeleteProject = () => {
    console.log("Proyecto eliminado: ", projectId);
    //Lógica para eliminar proyecto ...
    handleDeleteDialogClose();
  };

  return (
    <>
      <Card
        sx={{ maxWidth: 345, marginTop: 2 }}
        onClick={handleGoToProjectDetail}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={imageUrl}
            alt={title}
          />
          <CardContent sx={{ height: 120 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                color: darkTheme.palette.primary.light,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: 12 }}
            >
              {members}
            </Typography>
            {isAuthenticated && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  margin: 1,
                  display: "flex",
                  gap: 1,
                }}
              >
                <Tooltip title="Editar proyecto">
                  <Box
                    className="edit-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditDialogOpen();
                    }}
                  >
                    <EditIcon />
                  </Box>
                </Tooltip>
                <Tooltip title="Eliminar proyecto">
                  <Box
                    className="delete-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteDialogOpen();
                    }}
                  >
                    <DeleteIcon />
                  </Box>
                </Tooltip>
              </Box>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
      {selectedProject && (
        <EditProject
          open={editDialogOpen}
          handleClose={handleEditDialogClose}
          projectData={selectedProject}
          handleSave={handleSaveProject}
        />
      )}
      <ResponsiveDialog
        open={deleteDialogOpen}
        onClose={handleDeleteDialogClose}
        onConfirm={handleDeleteProject}
        actionType="delete"
      />
    </>
  );
};

export default function ActionAreaCardList() {
  const { isAuthenticated } = useAuth();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ActionAreaCard
              projectId={card.projectId}
              imageUrl={card.imageUrl}
              title={card.title}
              members={card.members}
              isAuthenticated={isAuthenticated}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

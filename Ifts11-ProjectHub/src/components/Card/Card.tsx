import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
//import { useEffect, useState } from "react";
//import { fetchDogImageUrl } from "../../services/dogApiPruebaService";
import { useNavigate } from "react-router";

//Esta CardData simula el response del servicio
const cardData = [
  {
    projectId: 1,
    imageUrl: "src/assets/$.jpg",
    title: "Dolar$Nube",
    members: ["Brisa Sardón, ", "Fernando Bartoli, ", "Laura Dancoso, ", "Claudia Fernandez"]
  
  },
  {
    projectId: 2,
    imageUrl: "src/assets/peliculas.png",
    title: "AppPeliculas",
    members:  ["Laura Dancoso, ", "Brisa Sardón, ", "Claudia Fernandez, ", "Fernando Bartoli"]
  },
  {
    projectId: 3,
    imageUrl: "src/assets/Abonando.png",
    title: "AbonandoAndo",
    members:  ["Laura Dancoso, ", "Fernando Bartoli, ", "Brisa Sardón, ", "Claudia Fernandez"]
   
  },
  {
    projectId: 4,
    imageUrl: "src/assets/PlayerApp.png",
    title: "App de Chat",
    members:  ["Fernando Bartoli ", "Laura Dancoso, ", "Brisa Sardón, ", "Claudia Fernandez"]

  },
  {
    projectId: 5,
    imageUrl: "src/assets/RoyalTech.png",
    title: "Proyecto 5",
    members:  ["Brisa Sardón, ", "Claudia Fernandez, ", "Laura Dancoso, ", "Fernando Bartoli"]

  },
  {
    projectId: 6,
    imageUrl: "src/assets/petshop.png",
    title: "PetShop-PawPaw",
    members:  ["Claudia Fernandez, ", "Fernando Bartoli, ", "Brisa Sardón, ", "Laura Dancoso"]

  },
];

const ActionAreaCard = ({
  projectId,
  imageUrl,
  title,
  members
}: {
  projectId: number;
  imageUrl: string;
  title: string;
  members: string[];
}) => {
  const navigate = useNavigate();

  const handleGoToProjectDetail = () => {
    navigate(`/proyecto/${projectId}`);
  };

  return (
    <Card
      sx={{ maxWidth: 345, marginTop: 2 }}
      onClick={handleGoToProjectDetail}
    >
      <CardActionArea>
        <CardMedia component="img" height="200" image={imageUrl} alt={title} />
        <CardContent sx={{ height: 120 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#af52bf", fontWeight: "bold", fontSize: 18 }}
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
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: 1,
            }}
          >
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default function ActionAreaCardList() {
  //--------------------Probando el servicio de API DOG
  //const [dogImageUrls, setDogImageUrls] = useState<string[]>([]);

  // useEffect(() => {
  //   const fetchDogImages = async () => {
  //     const urls = await Promise.all(
  //       cardData.map(async (_) => {
  //         const imageUrl = await fetchDogImageUrl();
  //         return imageUrl;
  //       })
  //     );
  //     setDogImageUrls(urls);
  //   };

  //   fetchDogImages();
  // }, []);

  //------------------FIN
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
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

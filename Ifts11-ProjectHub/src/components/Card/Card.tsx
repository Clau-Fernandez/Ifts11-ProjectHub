import { Box, Chip, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { fetchDogImageUrl } from "../../services/dogApiPruebaService";

//Esta CardData simula el response del servicio
const cardData = [
  {
    projectId: 1,
    imageUrl: "/assets/csharp.png",
    title: "Dolar$Nube",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse, empor incididunt utl.",
    subject: "Desarrollo en la Nube",
  },
  {
    projectId: 2,
    imageUrl: "/assets/csharp.png",
    title: "AppPeliculas",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    subject: "Proyecto integrador",
  },
  {
    projectId: 3,
    imageUrl: "/assets/csharp.png",
    title: "AbonandoAndo",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    subject: "Desarrollo en la Nube",
  },
  {
    projectId: 4,
    imageUrl: "/assets/csharp.png",
    title: "App de Chat",
    description:
      "d do eiusmod tempor incididun e irure dolor in reprehenderi ad minim ve",
    subject: "Proyecto integrador",
  },
  {
    projectId: 5,
    imageUrl: "/assets/csharp.png",
    title: "Proyecto 5",
    description:
      "Lorem id do eiusmod tempor incididunorem ipsum dolor sit amet, consectetur adipiscing eliadipiscing eli",
    subject: "Frontend",
  },
  {
    projectId: 6,
    imageUrl: "/assets/csharp.png",
    title: "Proyecto 6",
    description: "Qui officia deserunt mollit anim id est laborum.",
    subject: "Proyecto integrador",
  },
];

const ActionAreaCard = ({
  projectId,
  imageUrl,
  title,
  description,
  subject,
}: {
  projectId: number;
  imageUrl: string;
  title: string;
  description: string;
  subject: string;
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
            color="text.primary"
            sx={{ fontSize: 12 }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: 1,
            }}
          >
            <Chip label={subject} size="small" />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default function ActionAreaCardList() {
  //--------------------Probando el servicio de API DOG
  const [dogImageUrls, setDogImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      const urls = await Promise.all(
        cardData.map(async (_) => {
          const imageUrl = await fetchDogImageUrl();
          return imageUrl;
        })
      );
      setDogImageUrls(urls);
    };

    fetchDogImages();
  }, []);

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
              imageUrl={dogImageUrls[index]}
              title={card.title}
              description={card.description}
              subject={card.subject}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

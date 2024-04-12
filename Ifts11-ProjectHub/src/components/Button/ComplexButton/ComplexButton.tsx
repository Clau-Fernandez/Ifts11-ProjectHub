import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'; 

const images = [
  {
    url: './public/assets/AI.png',
    title: 'Ciencia de Datos & IA',
    width: '30%',
    href: 'https://www.ifts11.com/wp/plan-de-ciencia-de-datos-e-inteligencia-artificial/'

  },
  {
    url: './public/assets/Software.jpeg',
    title: 'Desarrollo de Software',
    width: '40%',
    href: 'https://www.ifts11.com/wp/carreras/plan-de-desarrollo-de-software/'
  },
  {
    url: './public/assets/Analisis.jpg',
    title: 'Análisis de Sistemas',
    width: '30%',
    href: 'https://www.ifts11.com/wp/plan-de-analisis-de-sistemas-nuevo/#page-content'
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
        fontWeight: 'bold',
        fontSize: 20,
      },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 40,
  backgroundColor: "#9c27b0",
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 20px)',
  transition: theme.transitions.create('opacity'),
}));



export default function ButtonBaseDemo() {
  const handleClick = (href:string) => {
    // Agrega aquí la lógica para manejar el evento onClick
    window.open(href, '_blank');
  };
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', marginBottom: 5 }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={() => handleClick(image.href)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function AddProjectButton() {
  return (
    <Button
      variant="outlined"
      startIcon={<AddIcon />}
      sx={{
        marginTop: 2,
        marginLeft: 2 
      }}
    >
      Agregar Proyecto
    </Button>
  );
}

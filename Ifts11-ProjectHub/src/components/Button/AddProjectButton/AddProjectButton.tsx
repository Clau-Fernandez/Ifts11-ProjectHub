import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Typography, Chip, IconButton, MenuItem } from '@mui/material';
import './AddProjectButton.style.css';

// Componente TagsInput para los integrantes y las tecnologías
interface TagsInputProps {
  label: string;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagsInput: React.FC<TagsInputProps> = ({ label, tags, setTags }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTag = () => {
    if (inputValue.trim() !== '') {
      setTags([...tags, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTag = (tagToDelete: string) => {
    setTags(tags.filter(tag => tag !== tagToDelete));
  };

  return (
    <Box marginBottom={2} marginTop={2}>
      <Typography variant="body1" gutterBottom>{label}</Typography>
      <TextField
        fullWidth
        label={`Agregar ${label}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') handleAddTag() }}
        style={{ marginTop: '5px' }} 
      />
      <Box>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            onDelete={() => handleDeleteTag(tag)}
            style={{ marginRight: '8px', marginTop: '4px'  }}
          />
        ))}
      </Box>
    </Box>
  );
};

// Componente ImageUploader para cargar la imagen del proyecto
const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <Box marginBottom={2} marginTop={2}>
      <input
        accept="image/*"
        id="image-upload"
        type="file"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <label htmlFor="image-upload">
        <Button variant="contained" component="span" style={{ marginTop: '5px' }} >Cargar portada</Button>
      </label>
      {selectedImage && (
        <img src={selectedImage} alt="Imagen seleccionada" style={{ marginTop: '25px', maxWidth: '100%' }} />
      )}
    </Box>
  );
};

export default function AddProjectButton() {
  const [open, setOpen] = useState(false);
  const [members, setMembers] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [career, setCareer] = useState<string>('');
  const [subject, setSubject] = useState<string>('');

  const handleOpenForm = () => {
    setOpen(true);
  };

  const handleCloseForm = () => {
    setOpen(false);
  };

  const handleSaveProject = () => {
    // Aca va la magia para manejar el envío del formulario xD
    handleCloseForm(); 
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleOpenForm}
        sx={{
          marginTop: 2,
          marginLeft: 2
        }}
      >
        Agregar Proyecto
      </Button>
      <Dialog open={open} onClose={handleCloseForm} fullWidth maxWidth="md" >
        <DialogTitle style = {{ borderBottom: '1px solid #9e9e9e'}}>
          Agregar Proyecto
          <IconButton onClick={handleCloseForm} style={{ position: 'absolute', right: '8px', top: '8px' }}>
          <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent >
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Título del proyecto"
            fullWidth
            required
            style={{ marginTop: '20px' }} 
          />
          <TextField
            margin="dense"
            id="projectPurpose"
            label="Propósito del proyecto"
            fullWidth
            multiline
            rows={2}
            required
            inputProps={{ maxLength: 100 }}
            style={{ marginTop: '15px' }} 
          />
          <TextField
            margin="dense"
            id="fullDescription"
            label="Descripción del proyecto"
            fullWidth
            multiline
            rows={4}
            required
            inputProps={{ maxLength: 1000 }}
            style={{ marginTop: '15px' }} 
          />
          <TagsInput label="Integrantes" tags={members} setTags={setMembers} />
          <TagsInput label="Tecnologías" tags={technologies} setTags={setTechnologies} />
          <Box style={{ marginTop: '15px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <TextField
              select
              label="Carrera"
              value={career}
              onChange={(e) => setCareer(e.target.value)}
              fullWidth
              style={{ width: '45%' }}
            >
              <MenuItem value="Career 1">Carrera 1</MenuItem>

            </TextField>
            <TextField
              select
              label="Materia"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              fullWidth
              style={{ width: '45%' }}
            >
              <MenuItem value="Materia 1">Materia 1</MenuItem>
              <MenuItem value="Materia 2">Materia 2</MenuItem>
              <MenuItem value="Materia 3">Materia 3</MenuItem>
              <MenuItem value="Materia 4">Materia 4</MenuItem>
            </TextField>
          </Box>
          <TextField
            margin="dense"
            id="githubRepo"
            label="Link al Repositorio de Github"
            fullWidth
            required
            style={{ marginTop: '10px' }} 
            InputProps={{
              startAdornment: (
                <GitHubIcon style={{ marginRight: '8px' }} />
              ),
              
            }}
          />
          <ImageUploader />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveProject} style={{ color: '#ba68c8' }}  >Guardar Proyecto</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

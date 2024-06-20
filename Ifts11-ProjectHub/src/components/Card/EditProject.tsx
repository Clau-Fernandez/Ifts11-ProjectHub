import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Typography, Chip, IconButton, MenuItem } from '@mui/material';


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
const ImageUploader = ({ selectedImage, setSelectedImage }: { selectedImage: string | null, setSelectedImage: React.Dispatch<React.SetStateAction<string | null>> }) => {

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

interface EditProjectProps {
  open: boolean;
  handleClose: () => void;
  projectData: any;
  handleSave: (updatedProject: any) => void;
}

const EditProject: React.FC<EditProjectProps> = ({ open, handleClose, projectData, handleSave }) => {
  const [title, setTitle] = useState(projectData.title);
  const [description, setDescription] = useState(projectData.description);
  const [members, setMembers] = useState<string[]>(projectData.members);
  const [technologies, setTechnologies] = useState<string[]>(projectData.technologies);
  const [career, setCareer] = useState<string>(projectData.career);
  const [subject, setSubject] = useState<string>(projectData.subject);
  const [githubRepo, setGithubRepo] = useState<string>(projectData.githubRepo);
  const [projectLink, setProjectLink] = useState<string>(projectData.projectLink);
  const [otherLinks, setOtherLinks] = useState<string>(projectData.otherLinks);
  const [selectedImage, setSelectedImage] = useState<string | null>(projectData.imageUrl);

  useEffect(() => {
    setTitle(projectData.title);
    setDescription(projectData.description);
    setMembers(projectData.members);
    setTechnologies(projectData.technologies);
    setCareer(projectData.career);
    setSubject(projectData.subject);
    setGithubRepo(projectData.githubRepo);
    setProjectLink(projectData.projectLink);
    setOtherLinks(projectData.otherLinks);
    setSelectedImage(projectData.imageUrl);
  }, [projectData]);

  const handleSaveProject = () => {
    const updatedProject = {
      ...projectData,
      title,
      description,
      members,
      technologies,
      career,
      subject,
      githubRepo,
      projectLink,
      otherLinks,
      imageUrl: selectedImage
    };
    handleSave(updatedProject);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle style={{ borderBottom: '1px solid #9e9e9e' }}>
        Editar Proyecto
        <IconButton onClick={handleClose} style={{ position: 'absolute', right: '8px', top: '8px' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Título del proyecto"
          fullWidth
          required
          style={{ marginTop: '20px' }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TagsInput label="Integrantes" tags={members} setTags={setMembers} />
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
        <TagsInput label="Tecnologías" tags={technologies} setTags={setTechnologies} />
        <TextField
          margin="dense"
          id="githubRepo"
          label="Link al Repositorio de Github"
          fullWidth
          required
          style={{ marginTop: '10px' }}
          value={githubRepo}
          onChange={(e) => setGithubRepo(e.target.value)}
          InputProps={{
            startAdornment: (
              <GitHubIcon style={{ marginRight: '8px' }} />
            ),
          }}
        />
        <TextField
          margin="dense"
          id="projectLink"
          label="Proyecto"
          fullWidth
          required
          style={{ marginTop: '10px' }}
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
          InputProps={{
            startAdornment: (
              <OpenInNewIcon style={{ marginRight: '8px' }} />
            ),
          }}
        />
        <TextField
          margin="dense"
          id="otherLinks"
          label="Links"
          fullWidth
          required
          style={{ marginTop: '10px' }}
          value={otherLinks}
          onChange={(e) => setOtherLinks(e.target.value)}
          InputProps={{
            startAdornment: (
              <OpenInNewIcon style={{ marginRight: '8px' }} />
            ),
          }}
        />
        <ImageUploader selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSaveProject} style={{ color: '#ba68c8' }}>Guardar Proyecto</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProject;

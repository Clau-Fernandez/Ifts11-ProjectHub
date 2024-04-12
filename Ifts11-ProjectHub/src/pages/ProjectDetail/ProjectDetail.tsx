
import { useParams } from 'react-router-dom';
const ProjectDetail = () => {
  
  const { projectId } = useParams();

  //Aca llamariamos al servicio que trae los datos por proyecto y luego los renderizamos
  //const projectData = getProjectById(projectId);

  return (
    <div>
      <h1>Este es el Detalle del Proyecto: {projectId}</h1>
     
    </div>
  );
}

export default ProjectDetail;

import { Container} from "@mui/material";
//import ButtonBaseDemo from "../../components/Button/ComplexButton/ComplexButton"; 
import ActionAreaCardList from "../../components/Card/Card";
import AddProjectButton from "../../components/Button/AddProjectButton/AddProjectButton";

const Dashboard = () => {

  return (
    <Container maxWidth="lg" sx={{ marginTop: '35px' }}>
      {/* <ButtonBaseDemo></ButtonBaseDemo> */}
      <AddProjectButton></AddProjectButton>
      <ActionAreaCardList></ActionAreaCardList>
    </Container>
  );
}

export default Dashboard;

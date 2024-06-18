import { Container } from "@mui/material";
// import ButtonBaseDemo from "../../components/Button/ComplexButton/ComplexButton";
import ActionAreaCardList from "../../components/Card/Card";
import AddProjectButton from "../../components/Button/AddProjectButton/AddProjectButton";
import { useAuth } from "../../context/AuthContext";
import Banner from '../../components/Banner';

const Dashboard = () => {

  const { isAuthenticated } = useAuth();

  return (
    <Container maxWidth="lg" sx={{ marginTop: "35px" }}>
      {/* { <ButtonBaseDemo></ButtonBaseDemo> } */}
      <Banner></Banner>
       {isAuthenticated && <AddProjectButton />}
      <ActionAreaCardList></ActionAreaCardList>
    </Container>
  );
};

export default Dashboard;

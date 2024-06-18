import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Box } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/ifts11-logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // Lógica de autenticación... algun día
    login(username, password);
    navigate("/");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: "15px",
        backgroundColor: "#212121",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box minHeight="100vh" sx={{ width: "100%", maxWidth: "400px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <img src={logo} alt="IFTS11 Logo" style={{ width: "250px" }} />
        </div>
        <TextField
          label="Usuario"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ marginTop: 2 }}
        >
          Acceder
        </Button>
      </Box>
    </Container>
  );
};

export default Login;

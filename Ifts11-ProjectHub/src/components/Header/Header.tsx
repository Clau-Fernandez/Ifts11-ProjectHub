import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import ProjectHubIcon from "../Icons/Icons";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "2px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "5px"
          }}
        >
          <ProjectHubIcon style={{ color: "white" }} />
        </div>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontFamily: "Martian Mono, monospace" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            IFTS11-<span style={{ color: "#ab47bc" }}>PROJECTHUB</span>
          </Link>
        </Typography>
        {location.pathname !== "/login" &&
          (isAuthenticated ? (
            <Button
              variant="contained"
              sx={{ fontSize: 15, fontWeight: "bold" }}
              onClick={handleLogout}
            >
              Cerrar sesión
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ fontSize: 15, fontWeight: "bold" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

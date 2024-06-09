import Dashboard from "./pages/Dashboard/Dashboard";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#ba68c8",
      main: "#9c27b0",
      dark: "#6d1b7b",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/proyecto/:projectId" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import banner from "../assets/banner.png";
import { useAuth } from "../context/AuthContext";

const Banner = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return null; // No se muestra el banner en el BackOffice
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginBottom: "10px",
        justifyContent: "space-evenly",
        padding: "15px",
      }}
    >
      <img
        src={banner}
        alt="banner"
        style={{
          width: "85%",
          height: "auto",
          objectFit: "contain",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default Banner;

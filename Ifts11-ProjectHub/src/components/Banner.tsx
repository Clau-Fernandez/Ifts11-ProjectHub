import banner from "../assets/banner.png";
//import bannerDos from "../assets/banner2.png";

const Banner = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginBottom: "10px",
        justifyContent: "space-evenly",
        padding: "15px"
      }}
    >
      {/* <img
        src={bannerDos}
        alt="bannerDos"
        style={{ width: "40%", height: "auto", objectFit: "contain", borderRadius: "10px"  }}
      /> */}
      <img
        src={banner}
        alt="banner"
        style={{ width: "85%", height: "auto", objectFit: "contain", borderRadius: "10px"  }}
      />
    </div>
  );
};

export default Banner;

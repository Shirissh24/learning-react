import React from "react";

const DisplayProduct = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "50px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={props.image} alt="Product-Image" height={300} width={400} />

      <h3>{props.title}</h3>
      <button
        style={{
          padding: "10px",
          background: "aqua",
          border: "none",
          cursor: "pointer",
        }}
      >
        Buy Now
      </button>
    </div>
  );
};
const App = () => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <DisplayProduct
        image="https://systemplusltd.com/wp-content/uploads/2023/12/SANO-SMART-TV-43-inches-1-1200x900-1.jpg"
        title="Samsung TV"
      />
      <DisplayProduct
        image="https://www.lg.com/np/images/tvs/md07561179/gallery/medium01-V.jpg"
        title="LG TV"
      />
      <DisplayProduct
        image="https://images-cdn.ubuy.co.in/66862904758ba51a4e6ee3e0-sony-65-class-bravia-3-led-4k-hdr.jpg"
        title="SONY TV"
      />
      <DisplayProduct
        image="https://5.imimg.com/data5/SELLER/Default/2025/1/479324171/ZZ/QO/RS/15723185/xiaomi-mi-tv-4a-500x500.png"
        title="MI TV"
      />
    </div>
  );
};

export default App;

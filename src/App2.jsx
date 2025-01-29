import React from "react";
const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Product card</h1>
      <img
        src="https://www.samsungplaza.com.np/public/files/B1320AA0CE9F8C4-43du7700.png"
        alt="Product Image"
        height={300}
        width={300}
      />
      <h3>Bat</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        consequatur voluptates repellendus error ipsam quas, magni ipsum.
        Eveniet facilis illum, cum recusandae deleniti perferendis libero beatae
        tempora, corrupti numquam aperiam?
      </p>
      <button
        style={{
          padding: " 10px",
          background: "aqua",
          border: "none",
          cursor: "pointer",
        }}
      >
        Buy now
      </button>
    </div>
  );
};
const App2 = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1 rem",
        flexwrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "4rem",
      }}
    >
      <Card />

      <Card />
      <Card />
    </div>
  );
};
export default App2;

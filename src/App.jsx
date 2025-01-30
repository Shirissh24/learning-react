import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        border: `1px solid black`,
        padding: `1rem`,
        width: `400px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
};

const App = () => {
  const personlist = [
    {
      id: 1,
      name: "Shirish",
      description: "He is a good man",
    },
    {
      id: 2,
      name: "Sushil",
      description: "He is an asshole",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {personlist.map((item) => {
        return (
          <Card key={item.id} name={item.name} description={item.description} />
        );
      })}
    </div>
  );
};

export default App;

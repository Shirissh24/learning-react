import React from "react";

const DisplaySum = (props) => {
  const sum = props.x + props.y;
  return (
    <div>
      <h1>{sum}</h1>
    </div>
  );
};
const App3 = () => {
  return (
    <div>
      <DisplaySum x={2} y={3} />
      <DisplaySum x={100} y={200} />
      <DisplaySum x={500} y={900} />
    </div>
  );
};
export default App3;

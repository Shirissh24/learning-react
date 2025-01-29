const h1Style = {
  color: "red",
  fontsize: "5 rem",
  background: "blue",
};
const App1 = () => {
  const num = 25;
  return (
    <div>
      <h1 style={h1Style}>hello to my world</h1>
      <p> {num}</p>
      <button
        onClick={() => {
          console.log("Click me");
          alert("okkkkkk xa ta");
        }}
      >
        click me
      </button>
    </div>
  );
};
export default App1;

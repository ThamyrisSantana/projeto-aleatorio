import "./App.css";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("ele é legal mesmo");
        }}
        text="Botão legal"
      />
    </div>
  );
}

export default App;

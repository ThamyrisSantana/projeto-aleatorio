import "./App.css";
import Input from "./components/input";
import { useState } from "react";
import Button from "./components/button";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <Input value={text} onChange={(e) => setText(e.target.value)} />
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

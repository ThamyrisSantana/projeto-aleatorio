import "./App.css";
import Input from "./components/input";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <Input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default App;

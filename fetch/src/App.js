import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import Counter2 from "./components/Counter2";

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <Counter2 />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
// import Counter from "./features/counter/Counter";
// import Counter2 from "./components/Counter2";
import MobxExample from "./components/MobxExample";
import TodoList from "./components/TodoList";
import { observableTodoStore } from "./app/ObservavleTodoStore";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <MobxExample /> */}
      <TodoList store={observableTodoStore} />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
// import Counter from "./features/counter/Counter";
// import Counter2 from "./components/Counter2";
// import MobxExample from "./components/MobxExample";
// import TodoList from "./components/TodoList";
// import { observableTodoStore } from "./app/ObservavleTodoStore";
import { RecoilRoot } from "recoil";
// import FontButton from "./components/RecoilExample/FontButton";
// import Text from "./components/RecoilExample/Text";
// import Charactercounter from "./components/RecoilExample/CharacterCounter";
import TodoList from "./components/RecoilExample/Todo/TodoList";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <MobxExample /> */}
      {/* <TodoList store={observableTodoStore} /> */}
      <RecoilRoot>
        {/* <FontButton />
        <Text />
        <Charactercounter /> */}
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;

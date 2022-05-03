import logo from "./logo.svg";
import "./App.css";
// import Counter from "./features/counter/Counter";
// import Counter2 from "./components/Counter2";
// import MobxExample from "./components/MobxExample";
// import TodoList from "./components/TodoList";
// import { observableTodoStore } from "./app/ObservavleTodoStore";
// import { RecoilRoot } from "recoil";
// import FontButton from "./components/RecoilExample/FontButton";
// import Text from "./components/RecoilExample/Text";
// import Charactercounter from "./components/RecoilExample/CharacterCounter";
// import TodoList from "./components/RecoilExample/Todo/TodoList";
// import CurrentUserInfo from "./components/RecoilExample/Todo/CurrentUserInfo";
import Example from "./components/ReactQueryExample/Example";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import QuickStart from "./components/ReactQueryExample/QuickStart";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <MobxExample /> */}
      {/* <TodoList store={observableTodoStore} /> */}
      {/* <RecoilRoot> */}
      {/* <FontButton />
        <Text />
        <Charactercounter /> */}
      {/* <TodoList /> */}
      {/* <CurrentUserInfo /> */}
      {/* </RecoilRoot> */}
      <QueryClientProvider client={queryClient}>
        <Example />
        <QuickStart />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;

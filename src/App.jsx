import { Provider } from "react-redux";
import store from "./store";
import Home from "./Home";
import Navbar from "./Navbar";
import "./App.css";
import TodoList from "./TodoList";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Home />
      <TodoList />
    </Provider>
  );
};

export default App;

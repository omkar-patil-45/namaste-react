import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./Components/Authentication/Authentication";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/*" element={true ? <Home /> : <Authentication />}></Route>
    </Routes>
  );
}

export default App;

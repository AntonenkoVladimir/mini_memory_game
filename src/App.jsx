import {Routes, Route, Navigate} from "react-router";
import Login from "./components/pages/Login/Login";
import Game from "./components/pages/Game/Game";
import End from "./components/pages/End/End";
import "./App.scss";

const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/game/:user/:lvl" element={<Game/>}/>
        <Route path="/end/:user" element={<End/>}/>
        <Route path="/" element={<Navigate to="/login"/>}/>
      </Routes>
    </div>
  );
}

export default App;

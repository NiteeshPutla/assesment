import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Start } from "./landingpage"
import { Login } from "./login"
import { Main } from "./main"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/main" element={<Main/>}/>
      </Routes>
    </Router>
  );
}

export default App;

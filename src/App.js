import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;

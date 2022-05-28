import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import History from "./components/History";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;

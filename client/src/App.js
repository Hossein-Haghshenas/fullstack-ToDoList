import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import History from "./components/History";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  const searchHandler = (text) => {
    setSearchText(text);
  };
  return (
    <>
      <Navbar searchHandler={searchHandler} />
      <Routes>
        <Route path="/" element={<Container searchText={searchText} />} />
        <Route path="/history" element={<History searchText={searchText} />} />
      </Routes>
    </>
  );
}

export default App;

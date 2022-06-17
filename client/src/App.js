import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Container searchHandler={searchHandler} searchText={searchText} />
          }
        />
        <Route path="/history" element={<History searchText={searchText} />} />
      </Routes>
    </>
  );
}

export default App;

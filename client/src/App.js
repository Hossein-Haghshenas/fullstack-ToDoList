import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import History from "./components/History";
import Login from "./components/Login";
import RegisterPage from "./components/RegisterPage";
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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";

const Navbar = ({ searchHandler }) => {
  const [searchText, setSearchText] = useState("");

  const searchInputHandler = (e) => {
    setSearchText(e.target.value);
    searchHandler(searchText);
  };
  return (
    <nav className="navbar">
      <section className="navbar-btns">
        <Button className="nav-btn" color="gradient" auto ghost>
          <NavLink to="/">Home</NavLink>
        </Button>

        <Button className="nav-btn history-btn" color="gradient" auto ghost>
          <NavLink to="/history">History</NavLink>
        </Button>
      </section>

      <section className="navbar-inputs">
        <Input
          placeholder="Search..."
          status="secondary"
          value={searchText}
          onChange={(e) => searchInputHandler(e)}
          aria-label="search"
        />
      </section>
    </nav>
  );
};

export default Navbar;

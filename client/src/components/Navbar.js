import { NavLink } from "react-router-dom";
import { Button } from "@nextui-org/react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Button className="nav-btn" color="gradient" auto ghost>
        <NavLink to="/">Home</NavLink>
      </Button>

      <Button className="nav-btn history-btn" color="gradient" auto ghost>
        <NavLink to="/history">History</NavLink>
      </Button>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <Button className="nav-btn" color="gradient" auto ghost>
          Home
        </Button>
      </Link>
      <Link to={"/history"}>
        <Button className="nav-btn history-btn" color="gradient" auto ghost>
          History
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;

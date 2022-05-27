import { Button } from "@nextui-org/react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Button color="gradient" auto ghost>
        Home
      </Button>
      <Button color="gradient" auto ghost>
        History
      </Button>
    </nav>
  );
};

export default Navbar;

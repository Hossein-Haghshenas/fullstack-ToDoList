import { NavLink } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BiHome, BiHistory, BiLogIn } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const jwtToken = localStorage.getItem("access_key");
    jwtToken && setIsLogin(true);
    if (jwtToken) {
      const userInfo = jwt_decode(jwtToken);
      const expire = Date.now() >= userInfo.exp * 1000 ? false : true;
      expire && setIsLogin(true);
    }
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* home btn */}

            <Button
              color="gradient"
              className="nav-btn mt-4 mt-lg-1"
              auto
              ghost
            >
              <NavLink to="/">
                <span>
                  <BiHome></BiHome>
                </span>
                <span>Home</span>
              </NavLink>
            </Button>

            {isLogin ? (
              <>
                {/* history btn */}

                <Button color="gradient" className="nav-btn" auto ghost>
                  <NavLink to="/history">
                    <span>
                      <BiHistory></BiHistory>
                    </span>
                    <span>History</span>
                  </NavLink>
                </Button>

                {/* dashboard btn */}

                <Button color="gradient" className="nav-btn" auto ghost>
                  <NavLink to="/dashboard">
                    <span>
                      <MdDashboardCustomize></MdDashboardCustomize>
                    </span>
                    <span>dashboard</span>
                  </NavLink>
                </Button>
              </>
            ) : null}
          </Nav>

          {/* login btn */}

          <Nav>
            <Button color="gradient" className="nav-btn" auto ghost>
              <NavLink to="/login">
                <span>
                  <BiLogIn></BiLogIn>
                </span>
                <span>Login</span>
              </NavLink>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

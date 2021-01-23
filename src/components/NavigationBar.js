import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

export default function NavigationBar() {
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch (err) {
      console.log(err);
      history.push("/");
    }
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand>
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{ marginRight: "1rem" }}
            />
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "#000",
                fontWeight: "500",
              }}
            >
              MEDITRUST LAB
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Link
              className="btn btn-outline-primary"
              to="/dashboard/change-password"
            >
              Change Password
            </Link>
            <Button
              variant="primary"
              onClick={handleLogout}
              style={{ marginLeft: "1rem" }}
            >
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
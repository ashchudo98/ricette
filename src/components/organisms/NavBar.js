import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Logo from "../atoms/Logo";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <NavDropdown title="Ricette" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} href="/categorie/antipasti">
                Antipasti
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categorie/primi">
                Primi
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categorie/secondi">
                Secondi
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categorie/contorni">
                Contorni
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categorie/dolci">
                Dolci
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/categorie/aggiungiRicetta">
              Aggiungi Ricetta
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
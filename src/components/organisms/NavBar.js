import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../atoms/Logo";
import LinkNav from "../atoms/LinkNav";
import LinkNavDropdown from "../atoms/LinkNavDropdown";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkNav href="/" path="Home" />
            <LinkNavDropdown
              title="Ricette"
              id="menu-a-discesa-per-categorie-ricette"
              index={5}
              href={[
                "/categorie/aggiungiRicetta",
                "/categorie/antipasti",
                "/categorie/primi",
                "/categorie/secondi",
                "/categorie/contorni",
                "/categorie/dolci",
              ]}
              titles={["Antipasti", "Primi", "Secondi", "Contorni", "Dolci"]}
            />
            <LinkNav
              href="/categorie/aggiungiRicetta"
              path="Aggiungi Ricetta"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

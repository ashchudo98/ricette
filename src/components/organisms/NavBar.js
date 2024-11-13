import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link href="/" passHref>Ricette</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <NavDropdown title="Ricette" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} href="/categorie/Antipasti">Antipasti</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categorie/Primi">Primi</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categorie/Secondi">Secondi</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categorie/Contorni">Contorni</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categorie/Dolci">Dolci</NavDropdown.Item></NavDropdown>
            <Nav.Link as={Link} href="/categorie/Aggiungi Ricetta">Aggiungi Ricetta</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

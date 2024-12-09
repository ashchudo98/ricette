import NavLogo from "../atoms/NavLogo";
import NavField from "../atoms/NavField";
import NavbarDropdown from "../atoms/NavbarDropDown";
import SearchBar from "../molecules/SearchBar";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar className="navbar" expand="lg">
      <NavLogo
        src="/images/logo.png"
        href="/"
        alt="Logo"
        height={100}
        width={100}
        className='logo'
      />
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="navbar-fields">
          <NavField href="/" label="Home" />
          <NavbarDropdown
            label="Categorie"
            fields={["Antipasti", "Primi", "Secondi", "Contorni", "Dolci"]}
          />
          <NavField href="/categorie/addRecipee" label="Aggiungi Ricetta" />
          <SearchBar className='searchbar'/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

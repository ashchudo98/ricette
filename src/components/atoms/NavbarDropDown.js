import { NavDropdown } from "react-bootstrap";
import Link from "next/link";

export default function NavbarDropdown({ label, fields }) {
  return (
    <NavDropdown title={label}>
      {fields.map((field, index) => (
        <NavDropdown.Item as={Link} href={`/categorie/${field.toLowerCase()}`} key={index}>
          {field}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

import { NavDropdown } from "react-bootstrap";
import Link from "next/link";

export default function NavbarDropdown({ label, fields }) {
  return (
    <NavDropdown title={label}>
      {fields.map((field, index) => (
        <NavDropdown.Item
          style={{ backgroundColor: "rgba(241, 235, 216, 0.932)" }}
          as={Link}
          href={`/categorie/${field.toLowerCase()}`}
          key={index}
        >
          {field}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

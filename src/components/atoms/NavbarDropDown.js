import { NavDropdown } from "react-bootstrap";
import Link from "next/link";

export default function NavbarDropdown({ label, fields }) {
  return (
    <NavDropdown title={label} id={label}>
      {fields.map((field, index) => (
        <NavDropdown.Item
          as={Link}
          href={`#${field}`}
          key={index}
        >
          {field}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

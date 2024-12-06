import { Nav } from "react-bootstrap";
import Link from "next/link";

export default function NavField({ href, label }) {
  return (
    <Nav.Link as={Link} href={href}>
      {label}
    </Nav.Link>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

export default function LinkNav({ href='', path='' }) {
  return (
    <Nav.Link as={Link} href={href}>
      {path}
    </Nav.Link>
  );
}

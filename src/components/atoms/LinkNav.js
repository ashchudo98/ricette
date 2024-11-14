import Nav from "react-bootstrap/Nav";
import Link from "next/link";

export default function LinkNav(props) {
  return (
    <Nav.Link as={Link} href={props.href}>
      {props.path}
    </Nav.Link>
  );
}

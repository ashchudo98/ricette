import { NavDropdown } from "react-bootstrap";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LinkNavDropdown(props) {
  const dropDownItems = props.titles.map((_, i) => (
    <NavDropdown.Item key={i} as={Link} href={props.href[i]}>
      {props.titles[i - 1]}
    </NavDropdown.Item>
  ));

  return (
    <NavDropdown title={props.title} id={props.id}>
      {dropDownItems}
    </NavDropdown>
  );
}

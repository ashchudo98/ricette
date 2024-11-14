import { NavDropdown } from "react-bootstrap";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LinkNavDropdown({ titles, href, title, id }) {
  const dropDownItems = titles.map((_, i) => (
    <NavDropdown.Item key={i} as={Link} href={href[i]}>
      {titles[i - 1]}
    </NavDropdown.Item>
  ));

  return (
    <NavDropdown title={title} id={id}>
      {dropDownItems}
    </NavDropdown>
  );
}

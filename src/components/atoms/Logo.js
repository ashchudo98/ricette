import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Navbar.Brand as={Link} href="/">
      <Image
        src="/images/logo.png"
        alt="Logo del sito per tornare alla Home Page"
        width={80}
        height={80}
      />
    </Navbar.Brand>
  );
}

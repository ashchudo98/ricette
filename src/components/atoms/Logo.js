import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap"; // Importa Navbar da react-bootstrap
import Image from "next/image"; // Importa il componente Image di Next.js
import Link from "next/link"; // Importa il componente Link di Next.js

export default function Logo() {
  return (
    <Navbar>
      <Navbar.Brand as={Link} href="/">
        <Image
          src="/images/logo.png"
          alt="Logo del sito per tornare alla Home Page"
          width={80}
          height={80}
        />
      </Navbar.Brand>
    </Navbar>
  );
}
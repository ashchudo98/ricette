import Navbar from "react-bootstrap";
import Link from "next/link";
import Image from "react-bootstrap";

export default function NavLogo({ href, src, alt, height, width }) {
  return (
    <Navbar.Brand as={Link} href={href}>
      <Image src={src} alt={alt} height={height} width={width} />
    </Navbar.Brand>
  );
}

import { Navbar } from "react-bootstrap";  
import Link from "next/link";
import Image from "next/image";

export default function NavLogo({ href, src, alt, height, width, className }) {
  return (
    <Navbar.Brand as={Link} href={href}>
      <Image src={src} alt={alt} height={height} width={width} className={className} />
    </Navbar.Brand>
  );
}

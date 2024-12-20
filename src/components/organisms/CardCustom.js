import { Container } from "react-bootstrap";
import CardBody from "../molecules/CardBody";
import Image from "next/image";

export default function CardCustom({ key, title, sub, text, href, src, alt, className }) {
  return (
    <Container key={key} className={className}>
      <CardBody title={title} sub={sub} text={text} href={href} className="card" />
      <Image src={src} alt={alt} width={200} height={20} className="recipeImage" />
    </Container>
  );
}
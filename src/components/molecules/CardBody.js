import CardTitle from "../atoms/CardTitle";
import CardSub from "../atoms/CardSub";
import CardText from "../atoms/CardText";
import { Card } from "react-bootstrap";
import Link from "next/link";

export default function CardBody({ title, sub, text, className, href }) {
  return (
    <Card className={className}>
      <Card.Body as={Link} href={href} style={{ textDecoration: "none" }}>
        <CardTitle as={Card} title={title} />
        <CardSub as={Card} sub={sub} />
        <CardText as={Card} text={text} />
      </Card.Body>
    </Card>
  );
}

import { Card } from "react-bootstrap";

export default function CardTitle({ as, title }) {
  return (
    <Card.Title as={as} className="recipeName">
      <h5>{title}</h5>
    </Card.Title>
  );
}

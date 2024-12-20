import { Card } from "react-bootstrap";

export default function CardText({ as, text }) {
  return (
    <Card.Text as={as} className="recipeDescription mt-2">
      {text}
    </Card.Text>
  );
}

import { Card } from "react-bootstrap";

export default function CardSub({ as, sub }) {
  return (
    <Card.Subtitle as={as} className="recipeTime">
      {sub}
    </Card.Subtitle>
  );
}

import { Button, Form } from "react-bootstrap";

export default function SearchBar({ className }) {
  return (
    <div className={className}>
      <Form.Control aria-placeholder="Cerca..." />
      <Button variant="secondary">Cerca</Button>
    </div>
  );
}

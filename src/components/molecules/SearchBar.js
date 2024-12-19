import { Button, Form } from "react-bootstrap";

export default function SearchBar({ className }) {
  return (
    <div className={className}>
      <Form.Control className="form-field" aria-placeholder="Cerca..." />
      <Button className="btn-search">Cerca</Button>
    </div>
  );
}

import { Form } from "react-bootstrap";

export default function FormControl({ type, className, min, rows, as }) {
  return (
    <div className={className}>
      <Form.Control
        required
        as={as}
        rows={rows}
        type={type}
        min={min}
      ></Form.Control>
      <Form.Control.Feedback type="invalid">
        Campo obbigatorio!
      </Form.Control.Feedback>
    </div>
  );
}

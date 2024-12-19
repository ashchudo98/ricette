import { Form } from "react-bootstrap";

export default function FormControl({ type, className, min, rows, as, value, onChange }) {
  return (
    <div className={className}>
      <Form.Control
        required
        as={as}
        rows={rows}
        type={type}
        min={min}
        value={value}
        onChange={onChange}
      />
      <Form.Control.Feedback type="invalid">
        Campo obbligatorio!
      </Form.Control.Feedback>
    </div>
  );
}

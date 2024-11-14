import { Form } from "react-bootstrap";

export default function FormInput({
  className,
  controlId,
  label,
  type,
  ariaLabel,
  recipeName,
  handleOnChange
}) {
  return (
    <Form.Group className={className} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        aria-label={ariaLabel}
        value={recipeName}
        onChange={handleOnChange}      
      />
    </Form.Group>
  );
}

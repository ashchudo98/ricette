import { Form } from "react-bootstrap";

export default function FormRadio({ categorie, className }) {
  return (
    <div className={className}>
      {categorie.map((categoria, index) => (
        <div key={index}>
          <Form.Check required type="checkbox" label={categoria} />
        </div>
      ))}
    </div>
  );
}

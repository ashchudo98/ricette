import { Form } from "react-bootstrap";

export default function FormRadio({
  type,
  categorie,
  className,
  value,
  onChange,
}) {
  return (
    <div className={className}>
      {categorie.map((categoria, index) => (
        <div key={index}>
          <Form.Check
            required
            type={type}
            name={className}
            label={categoria}
            value={categoria}
            checked={
              type === "radio" ? value === categoria : value.includes(categoria)
            }
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
}

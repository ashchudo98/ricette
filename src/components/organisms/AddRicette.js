import { Form, Button, Container, Card, InputGroup } from "react-bootstrap";
import FormControl from "../atoms/FormControl";
import FormRadio from "../atoms/FormRadio";
import { useState } from "react";

export default function AddRicette() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Card as={Container} className="form">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="form-element recipee-name">
            <Form.Label>
              <h5>Nome ricetta:</h5>
            </Form.Label>
            <FormControl type="text" />
          </Form.Group>
          <hr />

          <Form.Group className="form-element preparation-time-unit">
            <Form.Label>
              <h5>Tempo di preparazione:</h5>
            </Form.Label>
            <div className="preparation-time-elements">
              <FormControl type="number" className="preparation-time" min="1" />
              <FormRadio
                categorie={["Minuto/i", "Ora/e"]}
                className="time-unit"
              />
            </div>
          </Form.Group>
          <hr />

          <Form.Group className="form-element">
            <Form.Label>
              <h5>Descrizione:</h5>
            </Form.Label>
            <FormControl as="textarea" rows={5} />
          </Form.Group>
          <hr />

          <Form.Group className="form-element">
            <Form.Label>
              <h5>Categoria/e:</h5>
            </Form.Label>
            <FormRadio
              categorie={["Antipasti", "Primi", "Secondi", "Contorni", "Dolci"]}
              className="categorie"
            />
          </Form.Group>
          <hr />

          <Form.Group className="form-element">
            <Form.Label>
              <h5>Aggiungi ingrediente/i:</h5>
            </Form.Label>
            <div className="ingredient-elements">
              <FormControl type="text" className="ingredient" />
              <Button className="button-ingredient">Aggiungi</Button>
            </div>
          </Form.Group>
          <div>{/*Lista ingredienti*/}</div>
          <hr />

          <Form.Group className="form-element">
            <Form.Label>
              <h5>Aggiungi passaggio/i:</h5>
            </Form.Label>
            <div className="steps-elements">
              <FormControl type="text" className="steps" />
              <Button className="button-steps">Aggiungi</Button>
            </div>
            <div>{/*Lista steps*/}</div>
          </Form.Group>
          <hr />

        <Form.Group className="buttons">
          <Button variant="secondary">Azzera</Button>
          <Button type="submit">Salva</Button>
        </Form.Group>
      </Form>
    </Card>
  );
}

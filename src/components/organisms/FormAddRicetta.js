import { useState } from "react";
import { Form, Card, Button, Modal } from "react-bootstrap";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import FormTextInput from "../atoms/FormTextInput";

export default function FormAddRicetta() {
  const [recipeName, setRecipeName] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [selectedTimeUnit, setSelectedTimeUnit] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [steps, setSteps] = useState([]);
  const [newStep, setNewStep] = useState("");
  const [show, setShow] = useState(false);

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient("");
    }
  };

  const handleAddStep = () => {
    if (newStep.trim() !== "") {
      setSteps([...steps, newStep]);
      setNewStep("");
    }
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const handleRemoveStep = (index) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClearAll = () => {
    setIngredients([]);
    setNewIngredient("");
    setSteps([]);
    setNewStep("");
    setRecipeName("");
    setPreparationTime("");
    setDescription("");
    setSelectedCategory("");
    setSelectedTimeUnit("");
    handleClose();
  };

  const handleSave = async () => {
    const ricetta = {
      nome: recipeName,
      tempoPreparazione: preparationTime,
      unitaTempo: selectedTimeUnit,
      descrizione: description,
      categoria: selectedCategory,
      ingredienti: ingredients,
      preparazione: steps,
      createdAt: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "ricette"), ricetta);
      console.log("Ricetta aggiunta con ID: ", docRef.id);
      alert("Ricetta salvata con successo!");
      handleClearAll();
    } catch (error) {
      alert("Si è verificato un errore durante il salvataggio della ricetta.");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Form>
            {/* Nome ricetta */}
            <FormTextInput
              className="mb-3"
              controlId="nomeRicetta"
              label="Nome Ricetta:"
              type="text"
              ariaLabel="Nome della ricetta"
              recipeName={recipeName}
              handleOnChange={(e) => setRecipeName(e.target.value)}
            />
            
            {/* Tempo preparazione */}
            <Form.Group className="mb-3" controlId="tempoPreparazione">
              <Form.Label>Tempo di preparazione:</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type="number"
                  style={{ width: "100px", marginRight: "10px" }}
                  value={preparationTime}
                  onChange={(e) => setPreparationTime(e.target.value)}
                  aria-label="Tempo di preparazione"
                />
                <div className="d-flex">
                  <Form.Check
                    inline
                    label="Minuto/i"
                    name="tempoPreparazioneUnit"
                    type="radio"
                    value="minuti"
                    checked={selectedTimeUnit === "minuti"}
                    onChange={(e) => setSelectedTimeUnit(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="Ora/e"
                    name="tempoPreparazioneUnit"
                    type="radio"
                    value="ore"
                    checked={selectedTimeUnit === "ore"}
                    onChange={(e) => setSelectedTimeUnit(e.target.value)}
                  />
                </div>
              </div>
            </Form.Group>

            {/* Descrizione */}
            <Form.Group className="mb-3" controlId="descrizioneRicetta">
              <Form.Label>Descrizione:</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                aria-label="Descrizione della ricetta"
              />
            </Form.Group>

            {/* Categoria (radio button) */}
            <Form.Group className="mb-3" controlId="categoriaRicetta">
              <Form.Label>Categoria:</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Antipasti"
                  name="categoriaRicetta"
                  type="radio"
                  value="antipasti"
                  checked={selectedCategory === "antipasti"}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Primi"
                  name="categoriaRicetta"
                  type="radio"
                  value="primi"
                  checked={selectedCategory === "primi"}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Secondi"
                  name="categoriaRicetta"
                  type="radio"
                  value="secondi"
                  checked={selectedCategory === "secondi"}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Contorni"
                  name="categoriaRicetta"
                  type="radio"
                  value="contorni"
                  checked={selectedCategory === "contorni"}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Dolci"
                  name="categoriaRicetta"
                  type="radio"
                  value="dolci"
                  checked={selectedCategory === "dolci"}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
              </div>
            </Form.Group>

            {/* Ingredienti */}
            <Form.Group className="mb-3" controlId="ingredienti">
              <Form.Label>Aggiungi ingrediente:</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type="text"
                  aria-label="Nome ingrediente"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                />
                <Button
                  variant="primary"
                  type="button"
                  className="ms-2"
                  onClick={handleAddIngredient}
                  aria-label="Aggiungi ingrediente"
                >
                  Aggiungi
                </Button>
              </div>
              {/* Lista degli ingredienti */}
              <ul className="mt-2 list-unstyled">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="d-flex align-items-center mb-2">
                    <span className="me-2">{ingredient}</span>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => handleRemoveIngredient(index)}
                      aria-label={`Rimuovi ingrediente: ${ingredient}`}
                      className="text-danger p-0"
                    >
                      <strong className="fs-4">×</strong>
                    </Button>
                  </li>
                ))}
              </ul>
            </Form.Group>

            {/* Passaggi */}
            <Form.Group className="mb-3" controlId="passaggi">
              <Form.Label>Aggiungi passaggio:</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type="text"
                  aria-label="Descrizione passaggio"
                  value={newStep}
                  onChange={(e) => setNewStep(e.target.value)}
                />
                <Button
                  variant="primary"
                  type="button"
                  className="ms-2"
                  onClick={handleAddStep}
                  aria-label="Aggiungi passaggio"
                >
                  Aggiungi
                </Button>
              </div>
              {/* Lista dei passaggi */}
              <ul
                className="mt-2 list-unstyled"
                style={{
                  maxHeight: "150px",
                  overflowY: "auto",
                  paddingRight: "10px",
                }}
              >
                {steps.map((step, index) => (
                  <li key={index} className="d-flex align-items-center mb-2">
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => handleRemoveStep(index)}
                      aria-label={`Rimuovi passaggio: ${step}`}
                      className="text-danger p-0 me-2"
                    >
                      <strong className="fs-4">×</strong>
                    </Button>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </Form.Group>

            <div className="d-flex justify-content-center mt-5">
              <Button
                variant="secondary"
                type="button"
                className="me-3"
                onClick={handleShow}
                aria-label="Azzera form"
              >
                Azzera
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Azzerare il form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Procedere con la cancellazione dei dati inseriti?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Annulla
                  </Button>
                  <Button variant="primary" onClick={handleClearAll}>
                    Conferma
                  </Button>
                </Modal.Footer>
              </Modal>

              <Button
                variant="primary"
                type="button"
                aria-label="Salva ricetta"
                onClick={handleSave}
              >
                Salva
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

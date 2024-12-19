import { Form, Button, Container, Card } from "react-bootstrap";
import FormRadio from "../atoms/FormRadio";
import FormControl from "../atoms/FormControl";
import React, { useReducer, useEffect } from "react";
import { reducer, actionTypes, initialState } from "@/reducers/formReducer";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddRicette() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    handleDisabled();
  }, [
    state.recipeName,
    state.preparationTime,
    state.timeUnit,
    state.description,
    state.categories,
    state.ingredients,
    state.steps,
  ]);

  /* const handleValidation = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    dispatch({ type: actionTypes.SET_VALIDATED, payload: true });
  }; */

  const addIngredient = () => {
    if (state.newIngredient.trim() !== "") {
      dispatch({
        type: actionTypes.SET_INGREDIENTS,
        payload: [...state.ingredients, state.newIngredient],
      });
      dispatch({
        type: actionTypes.SET_NEW_INGREDIENT,
        payload: "",
      });
    }
  };

  const removeIngredient = (index) => {
    const ingredients = [...state.ingredients];
    ingredients.splice(index, 1);
    dispatch({ type: actionTypes.SET_INGREDIENTS, payload: ingredients });
  };

  const addStep = () => {
    if (state.newStep.trim() !== "") {
      dispatch({
        type: actionTypes.SET_STEPS,
        payload: [...state.steps, state.newStep],
      });
      dispatch({ type: actionTypes.SET_NEW_STEP, payload: "" });
    }
  };

  const removeStep = (index) => {
    const steps = [...state.steps];
    steps.splice(index, 1);
    dispatch({ type: actionTypes.SET_STEPS, payload: steps });
  };

  const reset = () => dispatch({ type: actionTypes.RESET_STATE });

  const handleSave = async () => {
    const ricetta = {
      nome: state.recipeName,
      tempoPreparazione: state.preparationTime,
      unitaTempo: state.timeUnit,
      descrizione: state.description,
      categoria: state.categories,
      ingredienti: state.ingredients,
      preparazione: state.steps,
      createdAt: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "ricette"), ricetta);
      console.log("Ricetta aggiunta con ID: ", docRef.id);
      alert("Ricetta salvata con successo!");
      reset();
    } catch (error) {
      alert("Si è verificato un errore durante il salvataggio della ricetta.");
    }
  };

  const handleDisabled = () => {
    if (
      state.recipeName === "" ||
      state.preparationTime === "" ||
      state.timeUnit === "" ||
      state.description === "" ||
      state.categories.length === 0 ||
      state.ingredients.length === 0 ||
      state.steps.length === 0
    ) {
      dispatch({ type: actionTypes.SET_DISABLED, payload: true });
    } else {
      dispatch({ type: actionTypes.SET_DISABLED, payload: false });
    }
  };

  return (
    <Card as={Container} className="form">
      <Form
        noValidate
        validated={state.validated} /* onSubmit={handleValidation} */
      >
        <Form.Group className="form-element recipee-name">
          <Form.Label>
            <h5>Nome ricetta:</h5>
          </Form.Label>
          <FormControl
            type="text"
            className="form-field"
            value={state.recipeName}
            onChange={(e) =>
              dispatch({
                type: actionTypes.SET_RECIPE_NAME,
                payload: e.target.value,
              })
            }
          />
        </Form.Group>
        <hr />

        <Form.Group className="form-element preparation-time-unit">
          <Form.Label>
            <h5>Tempo di preparazione:</h5>
          </Form.Label>
          <div className="preparation-time-elements">
            <FormControl
              type="number"
              className="preparation-time form-field"
              value={state.preparationTime}
              min="1"
              onChange={(e) =>
                dispatch({
                  type: actionTypes.SET_PREPARATION_TIME,
                  payload: e.target.value,
                })
              }
            />
            <FormRadio
              categorie={["Minuto/i", "Ora/e"]}
              className="time-unit"
              value={state.timeUnit}
              type="radio"
              onChange={(e) =>
                dispatch({
                  type: actionTypes.SET_TIME_UNIT,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </Form.Group>
        <hr />

        <Form.Group className="form-element">
          <Form.Label>
            <h5>Descrizione:</h5>
          </Form.Label>
          <FormControl
            as="textarea"
            rows={5}
            className="form-field"
            value={state.description}
            onChange={(e) =>
              dispatch({
                type: actionTypes.SET_DESCRIPTION,
                payload: e.target.value,
              })
            }
          />
        </Form.Group>
        <hr />

        <Form.Group className="form-element">
          <Form.Label>
            <h5>Categoria/e:</h5>
          </Form.Label>
          <FormRadio
            categorie={["Antipasti", "Primi", "Secondi", "Contorni", "Dolci"]}
            className="categorie"
            value={state.categories}
            type="checkbox"
            onChange={(e) =>
              dispatch({
                type: actionTypes.SET_CATEGORY,
                payload: e.target.value,
              })
            }
          />
        </Form.Group>
        <hr />

        <Form.Group className="form-element">
          <Form.Label>
            <h5>Aggiungi ingrediente/i:</h5>
          </Form.Label>
          <div className="ingredient-elements">
            <FormControl
              type="text"
              className="ingredient form-field"
              value={state.newIngredient}
              onChange={(e) =>
                dispatch({
                  type: actionTypes.SET_NEW_INGREDIENT,
                  payload: e.target.value,
                })
              }
            />
            <Button className="button-ingredient" onClick={addIngredient}>
              Aggiungi
            </Button>
          </div>

          <div className="form-field ingredients-list">
            <ul className="list">
              {state.ingredients.map((ingredient, index) => (
                <div
                  key={(ingredient, index)}
                  style={{ display: "flex", gap: "1.5rem" }}
                >
                  <span className="remove" onClick={removeIngredient}>
                    X
                  </span>
                  <li key={index}>{ingredient} </li>
                </div>
              ))}
            </ul>
          </div>
        </Form.Group>
        <hr />

        <Form.Group className="form-element">
          <Form.Label>
            <h5>Aggiungi passaggio/i:</h5>
          </Form.Label>
          <div className="steps-elements">
            <FormControl
              type="text"
              className="steps form-field"
              value={state.newStep}
              onChange={(e) =>
                dispatch({
                  type: actionTypes.SET_NEW_STEP,
                  payload: e.target.value,
                })
              }
            />
            <Button className="button-steps" onClick={addStep}>
              Aggiungi
            </Button>
          </div>
          <div className="form-field steps-list">
            <ul className="list">
              {state.steps.map((step, index) => (
                <div
                  key={(step, index)}
                  style={{ display: "flex", gap: "1.5rem" }}
                >
                  <span className="remove" onClick={removeStep}>
                    X
                  </span>
                  <li key={index}>{step} </li>
                </div>
              ))}
            </ul>
          </div>
        </Form.Group>
        <hr />

        <Form.Group className="buttons">
          <Button variant="secondary" onClick={reset}>
            Azzera
          </Button>
          <Button
            /* type="submit" */ onClick={handleSave}
            className="btn-save"
            disabled={state.disabled}
          >
            Salva
          </Button>
        </Form.Group>
      </Form>
    </Card>
  );
}

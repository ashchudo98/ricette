import { Form, Button, Container, Card } from "react-bootstrap";
import FormRadio from "../atoms/FormRadio";
import FormControl from "../atoms/FormControl";
import React, { useReducer } from "react";
import { reducer, actionTypes, initialState } from "@/reducers/formReducer";

export default function AddRicette() {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const addStep = () => {
    if (state.newStep.trim() !== "") {
      dispatch({
        type: actionTypes.SET_STEPS,
        payload: [...state.steps, state.newStep],
      });
      dispatch({ type: actionTypes.SET_NEW_STEP, payload: "" });
    }
  };

  const reset = () => dispatch({ type: actionTypes.RESET_STATE });

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
        </Form.Group>
        <div className="form-field ingredients-list">
          <ul>
            {state.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
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
            <ul>
              {state.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </Form.Group>
        <hr />

        <Form.Group className="buttons">
          <Button variant="secondary" onClick={reset}>
            Azzera
          </Button>
          <Button /* type="submit" */ className="btn-save">Salva</Button>
        </Form.Group>
      </Form>
    </Card>
  );
}

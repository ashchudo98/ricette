export const initialState = {
  recipeName: "",
  preparationTime: "",
  timeUnit: "",
  description: "",
  categories: [],
  ingredients: [],
  newIngredient: "",
  steps: [],
  newStep: "",
  validated: false,
};

export const actionTypes = {
  SET_RECIPE_NAME: "SET_RECIPE_NAME",
  SET_PREPARATION_TIME: "SET_PREPARATION_TIME",
  SET_TIME_UNIT: "SET_TIME_UNIT",
  SET_DESCRIPTION: "SET_DESCRIPTION",
  SET_CATEGORY: "SET_CATEGORY",
  SET_INGREDIENTS: "SET_INGREDIENTS",
  SET_NEW_INGREDIENT: "SET_NEW_INGREDIENT",
  SET_STEPS: "SET_STEPS",
  SET_NEW_STEP: "SET_NEW_STEP",
  SET_VALIDATED: "SET_VALIDATED",
  RESET_STATE: "RESET_STATE",
};

export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_RECIPE_NAME:
      return { ...state, recipeName: action.payload };
    case actionTypes.SET_PREPARATION_TIME:
      return { ...state, preparationTime: action.payload };
    case actionTypes.SET_TIME_UNIT:
      return { ...state, timeUnit: action.payload };
    case actionTypes.SET_DESCRIPTION:
      return { ...state, description: action.payload };
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        categories: Array.isArray(action.payload)
          ? action.payload
          : state.categories.includes(action.payload)
          ? state.categories.filter((category) => category !== action.payload)
          : [...state.categories, action.payload],
      };
    case actionTypes.SET_INGREDIENTS:
      return { ...state, ingredients: action.payload };
    case actionTypes.SET_NEW_INGREDIENT:
      return { ...state, newIngredient: action.payload };
    case actionTypes.SET_STEPS:
      return { ...state, steps: action.payload };
    case actionTypes.SET_NEW_STEP:
      return { ...state, newStep: action.payload };
    case actionTypes.SET_VALIDATED:
      return { ...state, validated: action.payload };
    case actionTypes.RESET_STATE:
      return initialState;
    default:
      return state;
  }
}

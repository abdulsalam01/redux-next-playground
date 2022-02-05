import { INCREMENT_COUNTER, DECREMENT_COUNTER, RANDOM_ELEMENT, CLEAR_ELEMENT } from "../actions/counterActions"

const generateString = (): string => {
  const _alphabet = "abcdefghijklmnopqrstuvwxyz";
  const _res = _alphabet.split("").map((v: string) => {
    return _alphabet[Math.floor(Math.random() * _alphabet.length)];
  }).join("");

  return _res;
}

const initalState = { value: 0, element: [] }
const counterReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + action.payload.value
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - action.payload.value
      };
    case RANDOM_ELEMENT:
      return {
        ...state,
        element: [...state.element, generateString()]
      }
    case CLEAR_ELEMENT:
      return state = initalState;
    default:
      return { ...state };
  }
}

export default counterReducer;
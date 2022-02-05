import { INCREMENT_COUNTER, DECREMENT_COUNTER, RANDOM_ELEMENT, CLEAR_ELEMENT } from "../actions/counterActions"


const generateString = (): string => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let res = "";

    for (let i = 0; i < 6; i++) {
        res += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    return res;
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
export const INCREMENT_COUNTER: string = "increment";
export const DECREMENT_COUNTER: string = "decrement";
export const RANDOM_ELEMENT: string = "random_elem";
export const CLEAR_ELEMENT: string = "clearElement";

export const incrementCounter = (payload: any) => (dispatch: any) => {
    dispatch({ type: INCREMENT_COUNTER, payload })
}
export const decrementCounter = (payload: any) => (dispatch: any) => {
    dispatch({ type: DECREMENT_COUNTER, payload });
}
export const randomizeElement = () => (dispatch: any) => dispatch({ type: RANDOM_ELEMENT, payload: null });
export const clearElement = () => (dispatch: any) => dispatch({ type: CLEAR_ELEMENT, payload: null });
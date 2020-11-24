import {HIDE_ALERT, SET_PIZZAS, SHOW_ALERT, UPDATE_TEXT} from "../reducers/actionTypes";

export const updateText = (payload) => ({
    type: UPDATE_TEXT,
    payload,
});

export const setPizzas = (payload) => ({
    type: SET_PIZZAS,
    payload,
});

export const showAlert = (payload) => ({
    type: SHOW_ALERT,
    payload,
});

export const hideAlert = () => ({
    type: HIDE_ALERT,
});

export const loadPizzas = () => ({
    type: 'LOAD_MENU',
});

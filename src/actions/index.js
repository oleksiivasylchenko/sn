import {SET_PIZZAS, UPDATE_TEXT} from "../reducers/actionTypes";

export const updateText = (payload) => ({
    type: UPDATE_TEXT,
    payload,
});

export const setPizzas = (payload) => ({
    type: SET_PIZZAS,
    payload,
});

export const loadPizzas = () => {
    return async (dispatch) => {
        const response = await fetch( 'https://www.pizzeriasandiego.pl/api/v1/sites/restaurant_menu/38807/pl?v2=71ea8e9bbfe040638495f8d9287042a5');
        const {result} = await response.json();

        dispatch(setPizzas(result.pizzas));
    }

};

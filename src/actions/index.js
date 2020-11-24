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

export const loadPizzas = () => {
    return async (dispatch) => {
        try {
            const response = await fetch( 'https://www.pizzeriasandiego.pl/api/v1/sites/restaurant_menu/38807/pl?v2=71ea8e9bbfe040638495f8d9287042a5');
            const {result} = await response.json();

            dispatch(setPizzas(result.pizzas));
        } catch(e) {
            dispatch(showAlert("Something went wrong!"));
            setTimeout(() => {
                dispatch(hideAlert());
            }, 2000);
        }

    }

};

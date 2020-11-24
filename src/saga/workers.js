import {call, put, delay} from 'redux-saga/effects';
import {hideAlert, setPizzas, showAlert} from "../actions";

const getMenu = async () => {
    return fetch('https://www.pizzeriasandiego.pl/api/v1/sites/restaurant_menu/38807/pl?v2=71ea8e9bbfe040638495f8d9287042a5');
};

export function* loadMenu() {
    try {
        const response = yield call(getMenu);
        const {result} = yield response.json();
        yield put(setPizzas(result.pizzas));
    } catch(e) {
        yield put(showAlert("Something went wrong!"));
        yield delay(2000);
        yield put(hideAlert());

    }
}

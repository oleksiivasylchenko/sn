import {call, put, takeEvery, delay} from 'redux-saga/effects';

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

function* sagaWorker() {
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

export function* sagaWatcher() {
    yield takeEvery('LOAD_MENU', sagaWorker);
}

const getMenu = async () => {
    return fetch('https://www.pizzeriasandiego.pl/api/v1/sites/restaurant_menu/38807/pl?v2=71ea8e9bbfe040638495f8d9287042a5');
};

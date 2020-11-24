import {ADD_TO_ORDER, HIDE_ALERT, SET_PIZZAS, SHOW_ALERT, UPDATE_TEXT} from "./actionTypes";

const defaultState = {
    text: 'DEFAULT STRING!!!',
    color: "yellow",
    items: [],
    price: 0,
    pizzas: [],
    alertText: "",
};

export default (store = defaultState, action) => {

    switch(action.type) {
        case UPDATE_TEXT: {
            return {...store, text: action.payload}
        }

        case ADD_TO_ORDER: {

            const items = [...store.items, {title: action.item.title, price: action.price}];

            const price = items.reduce((price, item) => price + item.price, 0);

            return {...store, items, price};
        }

        case SET_PIZZAS: {
            return {...store, pizzas: action.payload}
        }

        case SHOW_ALERT: {
            return {...store, alertText: action.payload}
        }

        case HIDE_ALERT: {
            return {...store, alertText: ""}
        }

        default: {
            return store;
        }

    }
}

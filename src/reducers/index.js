import {ADD_TO_ORDER, SET_PIZZAS, UPDATE_TEXT} from "./actionTypes";

const defaultState = {
    text: 'DEFAULT STRING!!!',
    color: "yellow",
    items: [],
    price: 0,
    pizzas: [],
};

export default (store = defaultState, action) => {

    switch(action.type) {
        case UPDATE_TEXT: {
            return {...store, text: action.payload}
        }

        case ADD_TO_ORDER: {

            const items = [...store.items, {title: action.item.title, price: action.price}];

            const price = items.reduce((price, item) => {
                console.log(item, 'ITEM');
                return price + item.price
            }, 0);

            console.log(items, 'ITEMS!!!');
            return {...store, items, price};
        }

        case SET_PIZZAS: {
            return {...store, pizzas: action.payload}
        }

        default: {
            return store;
        }

    }
}

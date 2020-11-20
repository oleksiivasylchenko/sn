import {ADD_TO_ORDER} from "./actionTypes";

const defaultState = {
    text: 'DEFAULT STRING!!!',
    color: "yellow",
    items: [],
    price: 0,
};

export default (store = defaultState, action) => {

    switch(action.type) {
        case "UPDATE_TEXT": {
            return {...store, text: action.text}
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

        default: {
            return store;
        }

    }
}

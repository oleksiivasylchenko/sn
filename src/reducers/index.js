import {ADD_TO_ORDER} from "./actionTypes";

const defaultState = {
    text: 'DEFAULT STRING!!!',
    color: "yellow",
    items: [],
};

export default (store = defaultState, action) => {
    console.log(action, 'action');

    switch(action.type) {
        case "UPDATE_TEXT": {
            return {...store, text: action.text}
        }

        case ADD_TO_ORDER: {
            const res = {...store, items: [...store.items, action.item]};
            console.log(res.items);
            return res;
        }

        default: {
            return store;
        }

    }
}

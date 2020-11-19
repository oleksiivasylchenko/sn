import React from 'react';
import Product from "./product";
import storageBinder from "./storageBinder";

const list = [
    {
        title: "Маргарита",
        type: "Pizza",
        price: [23, 35, 46]
    },
    {
        title: "Морепродукты",
        type: "Pizza",
        price: [22, 37, 49]
    }
];

const ProductList = function({addToOrder}) {

    const items = list.map(item => (
        <Product key={item.title} {...item} addToOrder={() => addToOrder(item)}/>
    ));

    return (
        <div>
            {items}
        </div>
    );
};

export default storageBinder(ProductList);

import React from 'react';
import Product from "./product";
import storageBinder from "./storageBinder";
import {items as pizzaList} from '../../data/pizza';

const ProductList = function({addToOrder}) {

    const items = pizzaList.map(item => (
        <Product key={item.title} {...item} addToOrder={(p) => addToOrder(item, p)}/>
    ));

    return (
        <div className="container">
            <div className="row">
                {items}
            </div>
        </div>
    );
};

export default storageBinder(ProductList);

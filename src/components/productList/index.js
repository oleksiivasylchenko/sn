import React from 'react';
import PropTypes from 'prop-types';

import Product from "./product";

import {items as pizzaList} from '../../data/pizza';
import {ADD_TO_ORDER} from "../../reducers/actionTypes";
import {useDispatch} from "react-redux";

const ProductList = function() {
    const dispatch = useDispatch();
    const addToOrder = (item, price) => dispatch({
        type: ADD_TO_ORDER,
        item,
        price,
    });

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

ProductList.propTypes = {
    addToOrder: PropTypes.func,
};

export default ProductList;

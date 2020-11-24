import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import Product from "./product";

import {ADD_TO_ORDER} from "../../reducers/actionTypes";
import {useDispatch, useSelector} from "react-redux";
import {loadPizzas} from "../../actions";

const ProductList = function() {
    const dispatch = useDispatch();
    const addToOrder = (item, price) => dispatch({
        type: ADD_TO_ORDER,
        item,
        price,
    });

    const pizzaList = useSelector(({pizzas}) => pizzas);

    useEffect(() => {
        dispatch(loadPizzas());
    }, []);

    const items = pizzaList.map(item => (
            <Product key={item.id} title={item.name} sizes={[]} addToOrder={(p) => addToOrder(item, p)}/>
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

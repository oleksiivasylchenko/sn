import React from 'react';

import SelectorList from "../selectorList";
import productTypes from "../../data/product_types";

export default () => {

    const list = productTypes.map(item => ({id: item.id, name: item.name}));
    const onClick = () => {};

    return (
        <SelectorList list={list} onClick={onClick} />
    );
};

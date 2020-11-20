import React from 'react';
import PropTypes from 'prop-types';

import pizzaSizesList from '../../data/pizza_size';
import Selector from "../selectorList";

const Product = ({title, sizes, description, addToOrder}) => {

    const onClick = (id) => addToOrder(id);
    const buttonList = sizes.map(({id, price}) => ({
        id,
        name: pizzaSizesList[id].title + " - " + price,
    }));

    return (
        <div className="card bg-white" style={{
            width: "18rem",
            margin: "5px",
            background: "url(\"./images/pizza.png\") no-repeat center",
            backgroundSize: "contain"
        }}>
            <div className="card-body" style={{padding: "4px"}}>
                <h5 className="card-title text-danger">{title}</h5>
                <p className="card-text text-info">{description}</p>
                <div  className="container">
                    <div className="row">
                        <Selector list={buttonList} onClick={onClick}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    title: PropTypes.string,
    sizes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        price: PropTypes.string,
    })),
};

export default Product;

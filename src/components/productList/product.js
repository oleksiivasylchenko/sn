import React from 'react';
import pizzaSizesList from '../../data/pizza_size';
import Button from "./button";

export default ({title, sizes, description, addToOrder}) => {

    const priceButtons = sizes.map(({id, price}) => (
        <Button key={id} onClick={() => addToOrder(id)} title={pizzaSizesList[id].title} price={price} />
    ));

    return (
        <div className="card bg-white" style={{width: "18rem", margin: "5px",
            background: "url(\"./images/pizza.png\") no-repeat center",
            backgroundSize: "contain"
        }}>
            <div className="card-body" style={{padding: "4px"}}>
                <h5 className="card-title text-danger">{title}</h5>
                <p className="card-text text-info">{description}</p>
                <div  className="container">
                    <div className="row">
                        {priceButtons}
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';

export default ({title, price, addToOrder}) => {

    const priceButtons = price.map(p => (
        <button key={p} onClick={addToOrder}>{p}</button>
    ));

    return (
        <div>
            {title}
            {priceButtons}
        </div>
    );
}

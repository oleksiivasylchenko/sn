import React from 'react';
import {connect} from 'react-redux';

const Order = function ({items, price}) {

    const itemsList = items.map((item, index) => (
        <div key={index}>{item.title}</div>
    ));

    return (
        <div>
            {price}
            {itemsList}
        </div>
    )

}


const mapStateToProps = ({items, price}) => ({
    items,
    price
})

export default connect(mapStateToProps, null)(Order);


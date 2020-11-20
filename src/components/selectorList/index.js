import React from 'react';
import PropTypes from 'prop-types';

const Selector  = ({list, onClick}) => {

    const  itemsList = list.map(({id, name}) => (
        <button
            key={id}
            className="btn btn-primary"
            onClick={() => onClick(id)}
            style={{margin: "0 3px"}}
        >{name}</button>
    ));

    return (
        <div className="d-flex justify-content-around" style={{width: "100%"}}>
            {itemsList}
        </div>
    );
};

Selector.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })),
    onClick: PropTypes.func.isRequired,
};

export default Selector;

import React from "react";

export default function ({title, price, onClick}) {
    return (
        <div className="col-sm" style={{padding: "10px 2px"}}>
            <button
                className="btn btn-primary"
                style={{width: "100%"}}
                onClick={onClick}
            ><span>{title} cm</span> <br/> <span style={{whiteSpace: "nowrap"}}>{price} pln</span></button>
        </div>
    );
}

import React from 'react';
import {useSelector} from "react-redux";

export default () => {
    const text = useSelector(({alertText}) => alertText);

    if (!text.length) return null;

    return (
        <div className="alert alert-warning" role="alert">
            text
        </div>
    );
}

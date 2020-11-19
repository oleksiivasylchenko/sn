import React, {useContext} from 'react';
import {ThemeContext} from "../context/theme";

export default () => {

    const {toggle} = useContext(ThemeContext);

    return (
        <button onClick={toggle}>Toggle theme!</button>
    );
}

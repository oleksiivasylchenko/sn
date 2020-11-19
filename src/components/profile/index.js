import React, {useContext, useState} from 'react';
import ThemeChanger from "../themeChanger";
import {ThemeContext} from "../context/theme";
import reduxBinder from "./reduxBinder";

const useCounter = () => {
    const [counter, setCounter] = useState(25);

    return [
        counter,
        setCounter
    ];
};

const Profile = ({text, updateText}) => {
    const [counter, setCounter] = useCounter();

    const {theme} = useContext(ThemeContext);

    return (
        <div>
            {text}
            <ThemeChanger />

            <div style={{color: theme.textColor}}>NickName {counter}</div>
            <div onClick={() => {
                setCounter(counter + 1);
                updateText(text + "test123");
            }}>MessageCounter</div>
        </div>
    );
};

export default reduxBinder(Profile);

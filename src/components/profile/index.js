import React, {useContext, useState} from 'react';
import ThemeChanger from "../themeChanger";
import {ThemeContext} from "../context/theme";
import {useSelector, useDispatch} from 'react-redux';


const useCounter = () => {
    const [counter, setCounter] = useState(25);

    return [
        counter,
        setCounter
    ];
};

export default () => {
    const text = useSelector(({text}) => text);
    const dispatch = useDispatch();
    const updateText = (text) => {
        dispatch({
            type: 'UPDATE_TEXT',
            text
        });
    };

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

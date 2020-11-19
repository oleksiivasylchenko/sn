import React, {useState} from 'react'

const THEME = {
    light: {
        textColor: "red",
    },
    dark: {
        textColor: "green",
    }
};

export const ThemeContext = React.createContext();

export default ({children}) => {

    const [themeName, setThemeName] = useState("light");

    const toggle = () => {
        setThemeName(prev => prev === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{
            theme: THEME[themeName],
            toggle
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

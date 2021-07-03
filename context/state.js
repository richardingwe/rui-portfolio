import { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

const initialState = {
    light: false
};

function themeReducer(state, action) {
    switch (action.type) {
        case 'setTheme':
            return { light: !light };
        default:
            throw new Error();
    }
}

export function AppWrapper({ children }) {
    const [theme, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    return useContext(ThemeContext);
}

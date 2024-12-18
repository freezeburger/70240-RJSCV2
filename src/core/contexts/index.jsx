import { createContext } from "react";


export const ThemeContext = createContext({
    theme:'light',
    colors:{
        primary:'cornflowerblue',
        secondary:'grey',
        danger:'crimson'
    }
});
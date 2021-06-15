import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext() // (1) create this ThemeContext that can store a theme
const ThemeUpdateContext = React.createContext() // (2) create this ThemeUpdateContext that can store a different theme 

export function useTheme() {
    return useContext(ThemeContext)  
} // (8) because our colors for the darkTheme is in another file (FunctionContextComponent) we need to send this function there to get the colors

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext) 
} // (9) because our colors for the setDarkTheme (light theme) is in another file (FunctionContextComponent) we need to send this function there to get the colors

export function ThemeProvider({ children}) {
    const [darkTheme, setDarkTheme] = useState(true) // (3) create a switch that will be initially set to darkTheme = true 

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme) // (4) create switch logic that will set to darkTheme = flase
    }

    return (
        <ThemeContext.Provider value={darkTheme}> // (5) set this ThemeContext to darkTheme = true
            <ThemeUpdateContext.Provider value={toggleTheme}>   // (6) set this ThemeUpdateContext to darkTheme = false
                {children} // (7) this children will actually be the >> FunctionContextComponent line 15 and 16
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
//Summary: think of this as the FIRST SQUARE


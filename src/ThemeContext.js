import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children}) {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>   
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}


//This is the First Square, this square code spans from line 14 to line 28: this square is supposed to be the logic that wraps around the second square and make everything switch.
//Line 15 is the useState set to true: it means that darktheme will have the value true initially but when you click on the toggleTheme button you will set this to false.
//Line 17 is function that takes the second state(setDarkTheme) of the state(darkTheme) and says: use this object 'prevDarkTheme' to get the state of 'darkTheme' and switch it to its opposite (false).
//Summary: This first square is like a logic skeleton: it decides where the code should sit and how it should act. This first square gets its info from the second square which acts like a database.

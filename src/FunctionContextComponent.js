import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionContextComponent() {
    const darkTheme = useTheme() // (1) This function useTheme() is here to get the darkTheme colors from themeStyles (line 7)
    const toggleTheme = useThemeUpdate() // (2) This function useThemeUpdate() is here to be used by the button Toggle Theme (line 15)
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    } // (3) themeStyles asks darkTheme if it has the value true, which in turn asks useTheme() to ask the ThemeContext if darkTheme is true
    return (
        <>
        <button onClick={toggleTheme}> Toggle Theme</button>  
        <div style={themeStyles}> Function Theme </div>
        </>
    )
       
}
 // 
//(4) line 15 toggleTheme (line 15) asks useThemeUpdate() (line 6) to do its job when button is clicked
// (5) line 16 this is the element we apply all this madness so we can see it either in a darkish or lightish shade... 

// Summary: Think of this as the SECOND SQUARE


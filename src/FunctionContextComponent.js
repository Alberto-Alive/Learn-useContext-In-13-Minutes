import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
        <button onClick={toggleTheme}> Toggle Theme</button>
        <div style={themeStyles}> Function Theme </div>
        </>
    )
}

//This file is the Second square, this square's code is from line 4 to line 19: this second square is supposed to have what you see on the display i.e buttons, text, colors, etc.
//Line 5 is used on line 8 and 9
//Line 6 is used on line 15: it takes the logic from ThemeContext and changes between themes.
//Line 7 is like a small CSS square where we store the colors for either the dark theme or the light theme.
//Summary: Second square uses useTheme() and useThemeUpdate(), defines the themeStyles() and displays the toggleTheme button and themeStyles div field.

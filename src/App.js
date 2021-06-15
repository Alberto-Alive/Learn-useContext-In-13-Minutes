import React from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext'

export const ThemeContext = React.createContext()

export default function App() {

return (
  <ThemeProvider> // (1) THIS IS THE LOGIC THAT CONTROLS THE FUNCTION.CONTEXT.COMPONENT
    <FunctionContextComponent /> // (2) THIS IS THE CONTENT THAT IS CONTROLLED BY THE THEME.PROVIDER
  </ThemeProvider>
)
}
// Summary: FIRST SQUARE = THEME.PROVIDER >>CONTAINS>> SECOND SQUARE = FUNCTION.CONTEXT.COMPONENT


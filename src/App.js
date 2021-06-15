import React from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext'

export const ThemeContext = React.createContext()

export default function App() {

return (
  <ThemeProvider> 
    <FunctionContextComponent /> 
  </ThemeProvider>
)
}
// 
// (1) LINE 10 THIS IS THE LOGIC THAT CONTROLS THE FUNCTION.CONTEXT.COMPONENT
// (2) LINE 11 THIS IS THE CONTENT THAT IS CONTROLLED BY THE THEME.PROVIDER
// Summary: FIRST SQUARE = THEME.PROVIDER >>CONTAINS>> SECOND SQUARE = FUNCTION.CONTEXT.COMPONENT


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
//This file uses two components: FunctionContextComponent and ThemeContext
//Our First square = ThemeProvider(ThemeContext) contains our Second square = FunctionContextComponent


import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ThemeContextProvider from "./contexts/ThemeContext"
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App

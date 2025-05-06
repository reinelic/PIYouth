import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/userContext'
import './assets/css/style.css'
import App from './App'

const container = document.getElementById('root')

const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App tab='home' />)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TareasProvider } from './context/TareasContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TareasProvider>
      <App />
    </TareasProvider>
  </React.StrictMode>
)

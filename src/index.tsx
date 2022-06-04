import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import reportWebVitals from './reportWebVitals'
import { StoreProvider } from './utils'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <StoreProvider>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontSize: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <div>WIP🚧</div>
        <div>施工中🚧</div>
      </div>
    </StoreProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

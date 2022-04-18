import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home, Contact, About, ProjectsPage } from './pages'
import { AppTheme, GlobalStyles } from './styles'
import { Layout } from './components'

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<ProjectsPage />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Contact, SkillPage, About, ProjectsPage } from './pages';
import { AppTheme, GlobalStyles } from './styles';
import { TabMenu } from './components';



function App() {

  

  return (
    <ThemeProvider theme={AppTheme}>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/skills' element={<SkillPage />} />
            <Route path='/contact' element={<Contact />} />
          </>
        </Routes>
        {/* <TabMenu /> */}

      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;

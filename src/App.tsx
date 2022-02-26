import React from 'react';
import { ThemeProvider } from 'styled-components';



import TabContainer from './components/TabContainer';
import { Home, Contact, SkillPage, About, ProjectsPage } from './pages';
import { AppTheme, GlobalStyles } from './styles';

function App() {
  return (
    <>
      <ThemeProvider theme={AppTheme}>
        <>
          <TabContainer color="#0277bd" index={0} label="Home">
            <Home />
          </TabContainer>
          <TabContainer color="#00838f" index={1} label="About" >
            <About />
          </TabContainer>
          <TabContainer color="#00695c" index={2} label="Projects" >
            <ProjectsPage />
          </TabContainer>
          <TabContainer color="#2e7d32" index={3} label="Skills" >
            <SkillPage />
          </TabContainer>
          <TabContainer color="#558b2f" index={4} label="Contact" >
            <Contact />
          </TabContainer>
          <GlobalStyles />
        </>
      </ThemeProvider>
    </>
  );
}

export default App;

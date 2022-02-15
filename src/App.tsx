import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './components';


import TabContainer from './components/TabContainer';
import { AppTheme, GlobalStyles } from './styles';

function App() {
  return (
    <>
      <ThemeProvider theme={AppTheme}>
        <>
          <TabContainer color="#F2BE25" index={0} label="Home">
            <Home />
          </TabContainer>
          <TabContainer color="#9EC545" index={1} label="About" >test 2</TabContainer>
          <TabContainer color="#4BB33E" index={2} label="Projects" >test 3</TabContainer>
          <TabContainer color="#4CB2D4" index={3} label="Skills" >test 4</TabContainer>
          <TabContainer color="#4B709A" index={4} label="Contact" >test 5</TabContainer>
          <GlobalStyles />
        </>
      </ThemeProvider>
    </>
  );
}

export default App;

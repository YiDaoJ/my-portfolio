import React from 'react';
import { ThemeProvider } from 'styled-components';


import TabContainer from './components/TabContainer';
import { AppTheme, GlobalStyles } from './styles';

function App() {
  return (
    <>
      <ThemeProvider theme={AppTheme}>
        <>
          <TabContainer color="tomato" index={0} label="Home">app</TabContainer>
          <TabContainer color="#B4DABB" index={1} label="About" >test 2</TabContainer>
          <GlobalStyles />
        </>
      </ThemeProvider>
    </>
  );
}

export default App;

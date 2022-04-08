import { useState } from 'react';
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools"
import { HelmetProvider } from 'react-helmet-async';
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
  }
`

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleDark = () => setIsDark((current) => !current);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <HelmetProvider>
        <Router toggleDark={toggleDark} />
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}

export default App;

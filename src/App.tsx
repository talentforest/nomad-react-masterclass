import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools"
import { HelmetProvider } from 'react-helmet-async';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
  }
`

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <HelmetProvider>
        <Router />
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}

export default App;

import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools"
import { HelmetProvider } from 'react-helmet-async';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <HelmetProvider>
        <Router />
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;

import { createGlobalStyle } from "styled-components";
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
      <Router />
    </>
  );
}

export default App;

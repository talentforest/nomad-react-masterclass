import { BrowserRouter, Routes, Route } from "react-router-dom";
import DarkModeBtn from './components/DarkModeBtn';

function Router() {
  return (
    <>
      <DarkModeBtn />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" />
          <Route path="/:coinId/*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;

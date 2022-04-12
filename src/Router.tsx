import { BrowserRouter, Routes, Route } from "react-router-dom";

import DarkModeBtn from './components/DarkModeBtn';
import ToDoList from './components/ToDoList';

function Router() {
  return (
    <>
      <DarkModeBtn />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<ToDoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;

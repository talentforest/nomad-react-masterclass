import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from './routes/Coins';
import Coin from './routes/Coin';
import DarkModeBtn from './components/DarkModeBtn';

interface RouterProps {
  toggleDark: () => void;
}

function Router({ toggleDark }: RouterProps) {
  return (
    <>
      <DarkModeBtn toggleDark={toggleDark} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/:coinId/*" element={<Coin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;

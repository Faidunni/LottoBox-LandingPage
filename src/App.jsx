import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LottoPage from "./Pages/LottoPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/lottopage" element={<LottoPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

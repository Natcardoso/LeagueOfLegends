import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListChampion from "./pages/ListChampion";
import ChampionDetail from "./pages/ChampionDetail";
import { DataProvider } from "./context/Data";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ListChampion />} />
          <Route path="/:name/:id" element={<ChampionDetail />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;

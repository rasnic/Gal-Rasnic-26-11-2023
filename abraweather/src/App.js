import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./views/home/Home"
import Favorites from "./views/favorites/Favorites"
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from "react-router-dom"
import React, {useState,useEffect} from 'react';
import Home from "./views/home/Home"
import Favorites from "./views/favorites/Favorites"
import './App.css';
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector((state) => state.theme.value);
  const [clr,setClr] = useState(theme)

  useEffect(() => {
    if(!localStorage.getItem('theme')){ 
      localStorage.setItem('theme','light')
    }
    if(!localStorage.getItem('temp')){ 
      localStorage.setItem('temp','cel')
    }
  },[])
  useEffect(() => {
    setClr(theme)
  },[theme])
  return (
    <div className="App" theme={clr}>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

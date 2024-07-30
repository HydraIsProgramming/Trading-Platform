import react from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import Trade from "./pages/Trade";
import "./App.css";


function App() {
  return (
    <Routes>
      {/* <Route path = "" element = ({<>})/> */}
      <Route path = "/" element = {<Homepage/>}/>
      <Route path = "/portfolio" element = {<Portfolio/>} />
      <Route path = "/trade" element = {<Trade/>} />
    </Routes>
  )
}

export default App

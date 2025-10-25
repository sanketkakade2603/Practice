<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"></link>

import "./index.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AdminDashboard from "../AdminDashboard/AdminDashboard"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

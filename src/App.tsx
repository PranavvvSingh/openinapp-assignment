import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Upload from "./components/Upload"
import Login from "./components/Login"

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/upload" element={<Navbar />}>
               <Route index element={<Upload />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default App

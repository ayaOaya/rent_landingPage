import About from './About/About'
import './App.css'
import Horizantal from './Horizantal/Horizantal'
import Page from './Page/Page'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Page />} />
    <Route path="/about" element={ <About />} />
     
     
     </Routes>
   </BrowserRouter>
  )
}

export default App
